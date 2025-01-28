"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FileUpload } from "@/components/file-upload"
import { toast } from "@/hooks/use-toast"

// Validation schema
const formSchema = z.object({
  video: z.array(z.custom()).min(1, "Please upload a property video"),
  photos: z.array(z.custom()).min(5, "Please upload at least 5 photos"),
})

export const PropertyUpload = ({ files, setFiles, currentStep, setCurrentStep }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      video: [],
      photos: [],
    },
  })

  // Function to handle the form submission
  function onSubmit(data) {
    try {
      setFiles((prev) => ({
        ...data, // Merge new data with previous state
      }))

      toast({
        title: "Success",
        description: "Property media uploaded successfully.",
      })

      // Navigate to the next step after state is updated
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload property media.",
        variant: "destructive",
      })
    }
  }

  // useEffect to log or handle the updated `files` state
  React.useEffect(() => {
    if (files?.video?.length || files?.photos?.length) {
      console.log("Updated Files State:", files)
      // Perform actions here, like moving to the next step
      console.log(files)
      setCurrentStep(currentStep + 1)
    }
  }, [files]) // Runs whenever `files` changes

  return (
    <div className="w-[835px] rounded-xl border border-[#E1E1E1] p-5 space-y-5 bg-white">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-semibold">Photos & Video</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FileUpload
            title="Property Video"
            description="Add One Property Video for Highlight"
            helperText="Max Duration of video 60 Seconds, Max size 10mb"
            accept={{
              "video/*": [".mp4", ".mov", ".avi"],
            }}
            maxSize={10 * 1024 * 1024} // 10MB
            maxDuration={60}
            value={form.watch("video")}
            onChange={(files) => form.setValue("video", files)}
            maxFiles={1}
          />

          <FileUpload
            title="Property Photos"
            description="Add at least 5 photos"
            helperText="Upload up to 50 photo of max size 5 mb in format png. jpg. jpeg."
            accept={{
              "image/*": [".png", ".jpg", ".jpeg"],
            }}
            maxSize={5 * 1024 * 1024} // 5MB
            multiple
            minFiles={5}
            maxFiles={50}
            value={form.watch("photos")}
            onChange={(files) => form.setValue("photos", files)}
          />

          <Button
            type="submit"
            className="w-full h-[50px] bg-[#7B00FF] text-white font-medium font-poppins rounded-[10px]"
          >
            Submit Files
          </Button>
        </form>
      </Form>
    </div>
  )
}
