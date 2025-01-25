"use client"

import { useState } from "react"
import { ChevronDown, Minus, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePropertyForm } from "@/hooks/use-property-form"

const AREA_UNITS = [
  { label: "Sqft", value: "sqft" },
  { label: "Sq.m", value: "sqm" },
  { label: "Sq.yd", value: "sqyd" },
]

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5", "5+"]
const BATHROOM_OPTIONS = ["1", "2", "3", "4", "5", "5+"]
const BALCONY_OPTIONS = ["1", "2", "3", "3+"]
const OTHER_ROOM_OPTIONS = ["Pooja Room", "Servant Room", "Guest Room"]
const FURNISHING_OPTIONS = ["Unfurnished", "Semi furnished", "Furnished"]
const AVAILABILITY_OPTIONS = ["Ready to move", "Under Construction"]
const BUILDING_TYPE_OPTIONS = ["Resale", "New Bookings"]
const RERA_STATUS_OPTIONS = ["RERA-Registered", "Ongoing Project"]

export const PropertyDetailsForm = ({ onSubmit, className }) => {
  const { formData, errors, isSubmitting, updateField, handleSubmit } = usePropertyForm(onSubmit)
  const [showBuiltUpArea, setShowBuiltUpArea] = useState(true)
  console.log(formData)

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full max-w-[835px] bg-white border border-[#E1E1E1] rounded-xl p-5", className)}
    >
      <div className="pb-2.5 border-b border-[#E1E1E1] mb-5">
        <h2 className="text-xl font-medium leading-8 text-black">Property Details</h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Property Title and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="propertyTitle" className="text-base font-medium text-[#0F0D0D]">
              Property Title
            </label>
            <div className="relative">
              <input
                id="propertyTitle"
                type="text"
                value={formData.propertyTitle}
                onChange={(e) => updateField("propertyTitle", e.target.value)}
                placeholder="Add Property Title"
                className={cn(
                  "w-full px-4 py-4 border rounded-lg text-base placeholder:text-[#9E9E9E]",
                  errors.propertyTitle
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#E1E1E1] focus:border-[#7B00FF]",
                )}
                aria-invalid={!!errors.propertyTitle}
              />
              {errors.propertyTitle && <span className="text-sm text-red-500 mt-1">{errors.propertyTitle}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location" className="text-base font-medium text-[#0F0D0D]">
              Add Location / City
            </label>
            <div className="relative">
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="Enter City"
                className={cn(
                  "w-full px-4 py-4 border rounded-lg text-base placeholder:text-[#9E9E9E]",
                  errors.location ? "border-red-500 focus:border-red-500" : "border-[#E1E1E1] focus:border-[#7B00FF]",
                )}
                aria-invalid={!!errors.location}
              />
              {errors.location && <span className="text-sm text-red-500 mt-1">{errors.location}</span>}
            </div>
          </div>
        </div>

        {/* State and Locality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="state" className="text-base font-medium text-[#0F0D0D]">
              State
            </label>
            <div className="relative">
              <select
                id="state"
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
                className={cn(
                  "w-full px-4 py-4 border rounded-lg text-base appearance-none bg-white",
                  errors.state ? "border-red-500 focus:border-red-500" : "border-[#E1E1E1] focus:border-[#7B00FF]",
                )}
                aria-invalid={!!errors.state}
              >
                <option value="">Select State</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F0D0D] pointer-events-none" />
              {errors.state && <span className="text-sm text-red-500 mt-1">{errors.state}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="locality" className="text-base font-medium text-[#0F0D0D]">
              Locality / Apartment
            </label>
            <div className="relative">
              <input
                id="locality"
                type="text"
                value={formData.locality}
                onChange={(e) => updateField("locality", e.target.value)}
                placeholder="Enter Locality / Apartment"
                className={cn(
                  "w-full px-4 py-4 border rounded-lg text-base placeholder:text-[#9E9E9E]",
                  errors.locality ? "border-red-500 focus:border-red-500" : "border-[#E1E1E1] focus:border-[#7B00FF]",
                )}
                aria-invalid={!!errors.locality}
              />
              {errors.locality && <span className="text-sm text-red-500 mt-1">{errors.locality}</span>}
            </div>
          </div>
        </div>

        {/* Sub Locality and House Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="subLocality" className="text-base font-medium text-[#0F0D0D] flex items-center gap-1">
              Sub Locality
              <span className="text-[#6C696A]">(Optional)</span>
            </label>
            <input
              id="subLocality"
              type="text"
              value={formData.subLocality}
              onChange={(e) => updateField("subLocality", e.target.value)}
              placeholder="Enter Sub Locality"
              className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base placeholder:text-[#9E9E9E]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Apartment" className="text-base font-medium text-[#0F0D0D] flex items-center gap-1">
              Apartment
            </label>
            <input
              id="apartment"
              type="text"
              value={formData.apartment}
              onChange={(e) => updateField("apartment", e.target.value)}
              placeholder="Enter Apartment"
              className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base placeholder:text-[#9E9E9E]"
            />
          </div>    
          <div className="flex flex-col gap-2">
            <label htmlFor="houseNo" className="text-base font-medium text-[#0F0D0D] flex items-center gap-1">
              House No.
              <span className="text-[#6C696A]">(Optional)</span>
            </label>
            <input
              id="houseNo"
              type="text"
              value={formData.houseNo}
              onChange={(e) => updateField("houseNo", e.target.value)}
              placeholder="Enter House No."
              className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base placeholder:text-[#9E9E9E]"
            />
          </div>
        </div>

        {/* Number of Bedrooms */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Number of Bedrooms</label>
          <div className="flex flex-wrap gap-2.5">
            {BEDROOM_OPTIONS.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => updateField("bedrooms", num)}
                className={cn(
                  "h-[46px] px-4 rounded-lg border text-base transition-colors",
                  formData.bedrooms === num
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Bathrooms */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Number of Bathrooms</label>
          <div className="flex flex-wrap gap-2.5">
            {BATHROOM_OPTIONS.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => updateField("bathrooms", num)}
                className={cn(
                  "h-[46px] px-4 rounded-lg border text-base transition-colors",
                  formData.bathrooms === num
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Balconies */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Balconies</label>
          <div className="flex flex-wrap gap-2.5">
            {BALCONY_OPTIONS.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => updateField("balconies", num)}
                className={cn(
                  "h-[46px] px-4 rounded-lg border text-base transition-colors",
                  formData.balconies === num
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Area Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <label className="text-base font-medium text-[#0F0D0D]">Add Area of Property</label>

            {/* Carpet Area */}
            <div className="relative">
              <div className="flex items-center border border-[#E1E1E1] rounded-lg overflow-hidden">
                <select
                  value={formData.carpetArea.unit}
                  onChange={(e) =>
                    updateField("carpetArea", {
                      ...formData.carpetArea,
                      unit: e.target.value,
                    })
                  }
                  className="w-[100px] px-4 py-4 border-r border-[#9E9E9E] text-[#6C696A] bg-white"
                >
                  {AREA_UNITS.map((unit) => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.carpetArea.value}
                  onChange={(e) =>
                    updateField("carpetArea", {
                      ...formData.carpetArea,
                      value: e.target.value.replace(/[^0-9]/g, ""),
                    })
                  }
                  placeholder="Carpet Area"
                  className={cn(
                    "flex-1 px-4 py-4 text-base placeholder:text-[#9E9E9E]",
                    errors.carpetArea && "border-red-500",
                  )}
                />
              </div>
              {errors.carpetArea && <span className="text-sm text-red-500 mt-1">{errors.carpetArea}</span>}
            </div>

            {/* Built-up Area */}
            {showBuiltUpArea && (
              <div className="relative">
                <div className="flex items-center border border-[#E1E1E1] rounded-lg overflow-hidden">
                  <select
                    value={formData.builtUpArea.unit}
                    onChange={(e) =>
                      updateField("builtUpArea", {
                        ...formData.builtUpArea,
                        unit: e.target.value,
                      })
                    }
                    className="w-[100px] px-4 py-4 border-r border-[#9E9E9E] text-[#6C696A] bg-white"
                  >
                    {AREA_UNITS.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.builtUpArea.value}
                    onChange={(e) =>
                      updateField("builtUpArea", {
                        ...formData.builtUpArea,
                        value: e.target.value.replace(/[^0-9]/g, ""),
                      })
                    }
                    placeholder="Built-up Area"
                    className="flex-1 px-4 py-4 text-base placeholder:text-[#9E9E9E]"
                  />
                </div>
              </div>
            )}

            {/* Area Controls */}
            <div className="flex flex-col gap-2">
              {showBuiltUpArea ? (
                <button
                  type="button"
                  onClick={() => setShowBuiltUpArea(false)}
                  className="flex items-center gap-1 text-[#F44336] text-sm"
                >
                  <X className="h-4 w-4" />
                  Remove Built-up Area
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowBuiltUpArea(true)}
                  className="flex items-center gap-0.5 text-[#7B00FF] text-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Total Built-up Area
                </button>
              )}
            </div>
          </div>

          {/* Other Rooms */}
          <div className="flex flex-col gap-2">
            <label className="text-base text-[#0F0D0D] flex items-center gap-1">
              Other Rooms
              <span className="text-[#6C696A]">(Optional)</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {OTHER_ROOM_OPTIONS.map((room) => (
                <button
                  key={room}
                  type="button"
                  onClick={() => {
                    const newRooms = formData.otherRooms.includes(room)
                      ? formData.otherRooms.filter((r) => r !== room)
                      : [...formData.otherRooms, room]
                    updateField("otherRooms", newRooms)
                  }}
                  className={cn(
                    "px-4 py-2.5 rounded-lg border text-base transition-colors",
                    formData.otherRooms.includes(room)
                      ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                      : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                  )}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Furnishing Status */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Furnishing Status</label>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2.5">
              {FURNISHING_OPTIONS.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => updateField("furnishingStatus", status)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg border text-base transition-colors",
                    formData.furnishingStatus === status
                      ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                      : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="px-4 py-2.5 bg-[#7B00FF] text-white rounded-lg text-base"
              onClick={() => {
                /* Add furnishing details handler */
              }}
            >
              Add Furnishing Details
            </button>
          </div>
        </div>

        {/* Total Floor and Property Floor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="totalFloor" className="text-base font-medium text-[#0F0D0D]">
              Total no. of Floor
            </label>
            <input
              id="totalFloor"
              type="text"
              value={formData.totalFloors}
              onChange={(e) => updateField("totalFloors", e.target.value)}
              placeholder="Enter Total Floor"
              className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base placeholder:text-[#9E9E9E]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="propertyFloor" className="text-base font-medium text-[#0F0D0D]">
              Property on Floor
            </label>
            <div className="relative">
              <select
                id="propertyFloor"
                value={formData.propertyOnFloor}
                onChange={(e) => updateField("propertyOnFloor", e.target.value)}
                className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base appearance-none bg-white"
              >
                <option value="">Select Floor</option>
                {Array.from({ length: 50 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F0D0D] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Parking */}
        <div className="flex flex-col gap-2">
          <label className="text-base text-[#0F0D0D] flex items-center gap-1">
            Parking
            <span className="text-[#6C696A]">(Optional)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* Covered Parking */}
            <div className="flex items-center gap-[30px]">
              <span className="text-[#6C696A]">Covered Parking</span>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => updateField("coveredParking", Math.max(0, formData.coveredParking - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-[#E1E1E1] rounded-full hover:border-[#7B00FF] transition-colors"
                >
                  <Minus className="h-5 w-5 text-[#9E9E9E]" />
                </button>
                <span className="text-lg text-[#6C696A] min-w-[1ch] text-center">{formData.coveredParking}</span>
                <button
                  type="button"
                  onClick={() => updateField("coveredParking", formData.coveredParking + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-[#E1E1E1] rounded-full hover:border-[#7B00FF] transition-colors"
                >
                  <Plus className="h-5 w-5 text-[#6C696A]" />
                </button>
              </div>
            </div>

            {/* Open Parking */}
            <div className="flex items-center gap-[30px]">
              <span className="text-[#6C696A]">Open Parking</span>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => updateField("openParking", Math.max(0, formData.openParking - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-[#E1E1E1] rounded-full hover:border-[#7B00FF] transition-colors"
                >
                  <Minus className="h-5 w-5 text-[#9E9E9E]" />
                </button>
                <span className="text-lg text-[#6C696A] min-w-[1ch] text-center">{formData.openParking}</span>
                <button
                  type="button"
                  onClick={() => updateField("openParking", formData.openParking + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-[#E1E1E1] rounded-full hover:border-[#7B00FF] transition-colors"
                >
                  <Plus className="h-5 w-5 text-[#6C696A]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Availability Status</label>
          <div className="flex flex-wrap gap-2.5">
            {AVAILABILITY_OPTIONS.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => updateField("availabilityStatus", status)}
                className={cn(
                  "px-4 py-2.5 rounded-lg border text-base transition-colors",
                  formData.availabilityStatus === status
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Building Type */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">Building Type</label>
          <div className="flex flex-wrap gap-2.5">
            {BUILDING_TYPE_OPTIONS.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField("buildingType", type)}
                className={cn(
                  "px-4 py-2.5 rounded-lg border text-base transition-colors",
                  formData.buildingType === type
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* RERA Category */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#0F0D0D]">RERA Category</label>
          <div className="flex flex-wrap gap-2.5">
            {RERA_STATUS_OPTIONS.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => updateField("reraStatus", status)}
                className={cn(
                  "px-4 py-2.5 rounded-lg border text-base transition-colors",
                  formData.reraStatus === status
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A] hover:border-[#7B00FF]",
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Available From and Age of Property */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="availableFrom" className="text-base font-medium text-[#0F0D0D]">
              Available From
            </label>
            <div className="relative">
              <select
                id="availableFrom"
                value={formData.availableFrom}
                onChange={(e) => updateField("availableFrom", e.target.value)}
                className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base appearance-none bg-white"
              >
                <option value="">Select Availability</option>
                <option value="immediate">Immediate</option>
                <option value="15days">Within 15 Days</option>
                <option value="30days">Within 30 Days</option>
                <option value="after30days">After 30 Days</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F0D0D] pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ageOfProperty" className="text-base font-medium text-[#0F0D0D]">
              Age of Property
            </label>
            <div className="relative">
              <select
                id="ageOfProperty"
                value={formData.propertyAge}
                onChange={(e) => updateField("propertyAge", e.target.value)}
                className="w-full px-4 py-4 border border-[#E1E1E1] rounded-lg text-base appearance-none bg-white"
              >
                <option value="">Select Age of Property</option>
                <option value="0-1">0-1 Year</option>
                <option value="1-5">1-5 Years</option>
                <option value="5-10">5-10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F0D0D] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-base font-medium text-[#0F0D0D]">
            Add Description
          </label>
          <div className="relative">
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Add Description"
              className={cn(
                "w-full h-[126px] px-4 py-4 border rounded-lg text-base placeholder:text-[#9E9E9E] resize-none",
                errors.description ? "border-red-500 focus:border-red-500" : "border-[#E1E1E1] focus:border-[#7B00FF]",
              )}
              aria-invalid={!!errors.description}
            />
            {errors.description && <span className="text-sm text-red-500 mt-1">{errors.description}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full max-w-[216px] h-[50px] mx-auto bg-[#7B00FF] text-white rounded-[10px] font-medium",
            "hover:bg-[#6600D9] transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          {isSubmitting ? "Submitting..." : "Submit Property Details"}
        </button>

        {/* Form-level Error */}
        {errors.submit && <div className="text-center text-red-500 mt-2">{errors.submit}</div>}
      </div>
    </form>
  )
}

