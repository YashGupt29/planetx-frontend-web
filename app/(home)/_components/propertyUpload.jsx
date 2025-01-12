
import { Store } from 'lucide-react'
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Enter Property Details",
    description: "Enter essential information like location, price, and property type to start.",
  },
  {
    title: "Upload Photos & Video",
    description: "Showcase your property with clear, high-quality images to attract attention.",
  },
  {
    title: "Submit & Go Live",
    description: "Review the details and publish your property. It's now live and ready for buyers or renters!",
  },
]

export const PropertyUpload = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center gap-[35px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <h2 className="text-[32px] leading-[50px] font-semibold text-[#0F0D0D] font-poppins">
          Upload Your Property in 3 Easy Steps
        </h2>
      </div>

      <div className="flex flex-row items-center gap-[120px] max-w-[975px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[19px] w-[245px]"
          >
            <div className="flex items-center justify-center w-[75px] h-[75px] bg-[#F2E6FF] rounded-lg p-[15px]">
              <Store className="w-[45px] h-[45px] text-[#0F0D0D]" />
            </div>
            <div className="flex flex-col items-start gap-[5px] w-full">
              <h3 className="font-poppins font-medium text-[20px] leading-[32px] text-[#0F0D0D] text-center w-full">
                {step.title}
              </h3>
              <p className="font-poppins font-normal text-[16px] leading-[26px] text-[#6C696A] text-center">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button
        className="bg-[#7B00FF] hover:bg-[#7B00FF]/90 text-white font-poppins font-medium text-[16px] leading-[26px] px-[30px] py-[15px] h-[56px] rounded-[10px]"
      >
        Add Property
      </Button>
    </div>
  )
}

