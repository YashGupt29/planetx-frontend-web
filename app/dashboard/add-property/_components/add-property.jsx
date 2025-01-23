
"use client"

import * as React from "react"
import { BasicInformation } from "./basic-information"
import { StepsSection } from "./steps"
import { Button } from "@/components/ui/button"

const steps = [
  { number: 1, title: "Basic Information" },
  { number: 2, title: "Property Details" },
  { number: 3, title: "Photos & Video" },
  { number: 4, title: "Amenities" },
  { number: 5, title: "Add Price" },
]

export function AddPropertyForm() {
  const [currentStep, setCurrentStep] = React.useState(1)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <StepsSection steps={steps} currentStep={currentStep} />
      <div className="flex-1 space-y-8">
        <div className="rounded-lg border bg-card p-6">
          {currentStep === 1 && (
            <BasicInformation
              onNext={() => setCurrentStep((prev) => Math.min(prev + 1, 5))}
            />
          )}
          {/* Add other steps here */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            {currentStep} of {steps.length} steps
          </div>
          <Button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 5))}
            className="bg-primary text-primary-foreground"
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
        </div>
      </div>
    </div>
  )
}


