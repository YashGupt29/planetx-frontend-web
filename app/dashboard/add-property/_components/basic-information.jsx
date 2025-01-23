
"use client"

import { useState } from "react"


const lookingForOptions = [
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
  { value: "paying-guest", label: "Paying Guest" },
  { value: "rent-hourly", label: "Rent Hourly" },
]

const propertyKindOptions = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
]

const propertyTypeOptions = [
  { value: "flat-apartment", label: "Flat / Apartment" },
  { value: "house-villa", label: "House / Villa" },
  { value: "plot-land", label: "Plot / Land" },
  { value: "1rk-studio", label: "1 RK/ Studio Apartment" },
  { value: "farmhouse", label: "Farmhouse" },
  { value: "other", label: "Other" },
]

export const BasicInformation = () => {
  const [lookingFor, setLookingFor] = useState("sell")
  const [propertyKind, setPropertyKind] = useState("residential")
  const [propertyType, setPropertyType] = useState("flat-apartment")

  return (
    <div className="w-full max-w-[835px] bg-white border border-[#E1E1E1] rounded-xl p-5" >
      <div className="pb-2.5 border-b border-[#E1E1E1] mb-5">
        <h2 className="text-xl font-medium leading-8 text-black">Basic Information</h2>
      </div>

      <div className="flex flex-col gap-[25px]">
        {/* Looking For Section */}
        <div className="space-y-[5px]">
          <label className="text-base leading-6 text-[#0F0D0D]">Are you looking for</label>
          <div className="flex flex-wrap gap-2.5">
            {lookingForOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setLookingFor(option.value)}
                className={`
                  px-[15px] py-2.5 rounded-lg text-base leading-[26px]
                  ${lookingFor === option.value
                    ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                    : "bg-white border border-[#E1E1E1] text-[#6C696A]"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Kind Section */}
        <div className="space-y-[5px]">
          <label className="text-base leading-6 text-[#0F0D0D]">What kind of property</label>
          <div className="flex flex-wrap gap-2.5">
            {propertyKindOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setPropertyKind(option.value)}
                className={`
                  px-[15px] py-2.5 rounded-lg text-base leading-[26px]
                  ${propertyKind === option.value
                    ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                    : "bg-white border border-[#E1E1E1] text-[#6C696A]"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Type Section */}
        <div className="space-y-[5px]">
          <label className="text-base leading-6 text-[#0F0D0D]">Select Property Type</label>
          <div className="flex flex-wrap gap-2.5">
            {propertyTypeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setPropertyType(option.value)}
                className={`
                  px-[15px] py-2.5 rounded-lg text-base leading-[26px]
                  ${propertyType === option.value
                    ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                    : "bg-white border border-[#E1E1E1] text-[#6C696A]"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


