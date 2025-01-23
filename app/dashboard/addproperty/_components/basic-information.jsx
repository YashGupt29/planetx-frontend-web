
"use client"

import * as React from "react"
import { useState } from "react"
import { PropertyTypeButton } from "./property-type-button"


export function BasicInformation() {
  const [purpose, setPurpose] = useState("sell")
  const [propertyKind, setPropertyKind] = useState("residential")
  const [propertyType, setPropertyType] = useState("flat")

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium border-b pb-2">Basic Information</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium">Are you looking for</h3>
          <div className="flex flex-wrap gap-2">
            <PropertyTypeButton
              active={purpose === "sell"}
              onClick={() => setPurpose("sell")}
            >
              Sell
            </PropertyTypeButton>
            <PropertyTypeButton
              active={purpose === "rent"}
              onClick={() => setPurpose("rent")}
            >
              Rent
            </PropertyTypeButton>
            <PropertyTypeButton
              active={purpose === "paying-guest"}
              onClick={() => setPurpose("paying-guest")}
            >
              Paying Guest
            </PropertyTypeButton>
            <PropertyTypeButton
              active={purpose === "rent-hourly"}
              onClick={() => setPurpose("rent-hourly")}
            >
              Rent Hourly
            </PropertyTypeButton>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-medium">What kind of property</h3>
          <div className="flex flex-wrap gap-2">
            <PropertyTypeButton
              active={propertyKind === "residential"}
              onClick={() => setPropertyKind("residential")}
            >
              Residential
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyKind === "commercial"}
              onClick={() => setPropertyKind("commercial")}
            >
              Commercial
            </PropertyTypeButton>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-medium">Select Property Type</h3>
          <div className="flex flex-wrap gap-2">
            <PropertyTypeButton
              active={propertyType === "flat"}
              onClick={() => setPropertyType("flat")}
            >
              Flat / Apartment
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyType === "house"}
              onClick={() => setPropertyType("house")}
            >
              House / Villa
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyType === "plot"}
              onClick={() => setPropertyType("plot")}
            >
              Plot / Land
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyType === "studio"}
              onClick={() => setPropertyType("studio")}
            >
              1 RK / Studio Apartment
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyType === "farmhouse"}
              onClick={() => setPropertyType("farmhouse")}
            >
              Farmhouse
            </PropertyTypeButton>
            <PropertyTypeButton
              active={propertyType === "other"}
              onClick={() => setPropertyType("other")}
            >
              Other
            </PropertyTypeButton>
          </div>
        </div>
      </div>
    </div>
  )
}

