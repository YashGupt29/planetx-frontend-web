"use client";

import * as React from "react";
import { BasicInformation } from "./basic-information";
import { StepsSection } from "./steps";
import { Button } from "@/components/ui/button";
import { PropertyDetailsForm } from "./add-property-details";
import { PropertyUpload } from "@/app/dashboard/add-property/_components/property-upload";
import AmenitiesDetails from "./amenities-details";
import AddPrice from "./add-price";
import axios from "axios";
import BACKEND_URL from "@/lib/BACKEND_URL";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  { number: 1, title: "Basic Information" },
  { number: 2, title: "Property Details" },
  { number: 3, title: "Photos & Video" },
  { number: 4, title: "Amenities" },
  { number: 5, title: "Add Price" },
];

export function AddPropertyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [propertyData, setPropertyData] = React.useState({});
  const [files, setFiles] = React.useState({ images: [], video: null });
  const [lookingFor, setLookingFor] = React.useState(
    searchParams.get("lookingFor") || "Buyer"
  );
  const [propertyKind, setPropertyKind] = React.useState(
    searchParams.get("propertyKind") || "Residential"
  );
  const [propertyType, setPropertyType] = React.useState(
    searchParams.get("propertyType") || "For Sale"
  );

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("lookingFor", lookingFor);
    params.set("propertyKind", propertyKind);
    params.set("propertyType", propertyType);

    router.push(`?${params.toString()}`, { scroll: false });
  }, [lookingFor, propertyKind, propertyType]);

  const handleSubmit = async () => {
    const formData = new FormData();
    console.log(propertyData);

    formData.append("propertyData", JSON.stringify(propertyData));
    if (files.images.length > 0) {
      files.images.forEach((image) => {
        formData.append("images", image);
      });
    }
    console.log(files.video);
    if (files.video && files.video[0]) {
      formData.append("video", files.video[0]);
    }

    console.log("FormData:", [...formData.entries()]);

    const token = localStorage.getItem("accessToken").replace(/^"|"$/g, "");
    try {
      // const response = await axios.post(
      //   `${BACKEND_URL}/properties/add`,
      //   formData,
      //   {
      //     headers: {
      //       Authorization: token,
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <StepsSection steps={steps} currentStep={currentStep} />
      <div className="flex-1 space-y-8">
        <div>
          {currentStep === 4 && (
            <BasicInformation
              lookingFor={lookingFor}
              setLookingFor={setLookingFor}
              propertyKind={propertyKind}
              setPropertyKind={setPropertyKind}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
            />
          )}
          {currentStep === 2 && (
            <PropertyDetailsForm
              propertyData={propertyData}
              setPropertyData={setPropertyData}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 3 && (
            <div className="max-w-[835px] max-h-[14475px]">
              <PropertyUpload
                files={files}
                setFiles={setFiles}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
          )}
          {currentStep === 4 && (
            <AmenitiesDetails
              propertyData={propertyData}
              setCurrentStep={setCurrentStep}
              setPropertyData={setPropertyData}
            />
          )}

          {currentStep === 1 && <AddPrice />}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            {currentStep} of {steps.length} steps
          </div>
          {currentStep === 5 ? (
            <Button
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
            </Button>
          ) : (
            <Button
              onClick={(event) => {
                setCurrentStep((prev) => Math.min(prev + 1, 5));
              }}
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
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
