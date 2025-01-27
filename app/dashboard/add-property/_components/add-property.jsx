
"use client"

import * as React from "react"
import { BasicInformation } from "./basic-information"
import { StepsSection } from "./steps"
import { Button } from "@/components/ui/button"
import { PropertyDetailsForm } from "./add-property-details"
import { PropertyUpload } from "@/app/dashboard/add-property/_components/property-upload"
import AmenitiesDetails from "./amenities-details"
import AddPrice from "./add-price"
import axios from "axios"
import BACKEND_URL from "@/lib/BACKEND_URL"

const steps = [
  { number: 1, title: "Basic Information" },
  { number: 2, title: "Property Details" },
  { number: 3, title: "Photos & Video" },
  { number: 4, title: "Amenities" },
  { number: 5, title: "Add Price" },
]

export function AddPropertyForm() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [propertyData, setPropertyData] = React.useState();
  const [files, setFiles] = React.useState({});

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append('propertyData', propertyData);
    formData.append('files', files);
    console.log(files, propertyData)

    const token = localStorage.accessToken.replaceAll('"', '');
    console.log(`${token}`);
    try {
      console.log(formData);
      const response = await axios.post(`${BACKEND_URL}/properties/add`, formData, {
        headers: {
          Authorization: `${localStorage.accessToken.replace('"', '')}`
        }
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <StepsSection steps={steps} currentStep={currentStep} />
      <div className="flex-1 space-y-8">
        <div>
          {currentStep === 1 && (
            <BasicInformation />
          )}
          {currentStep === 2 && (
            <PropertyDetailsForm propertyData={propertyData} setPropertyData={setPropertyData} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 3 && (
            <div className="max-w-[835px] max-h-[14475px]">
              <PropertyUpload files={files} setFiles={setFiles} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
          )}
          {currentStep === 4 && (
            <AmenitiesDetails />
          )}

          {currentStep === 5 && (
            <AddPrice />
          )}

          {/* Add other steps here */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            {currentStep} of {steps.length} steps
          </div>
          {currentStep === 5 ? (<Button
            onClick={() => handleSubmit()}
            className="bg-[#7B00FF] text-primary-foreground"
          >
            Submit Property
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>) : (<Button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 5))}
            className="bg-[#7B00FF] text-primary-foreground"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>)}
        </div>
      </div>
    </div>
  )
}


