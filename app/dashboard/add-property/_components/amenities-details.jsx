"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function AmenitiesDetails() {
  const [selectedAmenities, setSelectedAmenities] = React.useState([])
  const [powerBackup, setPowerBackup] = React.useState("None")
  const [facing, setFacing] = React.useState("North")
  const [waterSource, setWaterSource] = React.useState("Municipal corporation")
  const [features, setFeatures] = React.useState(["Swimming Pool"])
  const [otherFeatures, setOtherFeatures] = React.useState(["Separate entry for servant room"])
  const [locationAdvantages, setLocationAdvantages] = React.useState(["Close to School"])

  const toggleSelection = (array, setArray, value) => {
    if (array.includes(value)) {
      setArray(array.filter((item) => item !== value))
    } else {
      setArray([...array, value])
    }
  }

  return (
    <Card className="w-full max-w-[835px] p-5 space-y-5">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-medium text-[#000000]">Amenities Details</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Amenities */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Maintenance Staff",
              "Housekeeping Services",
              "Vaastu Compliant",
              "Security / Fire Alarm",
              "Visitor Parking",
              "Laundry/Dry Cleaning",
              "Lifts",
              "Gas Line",
              "Wi-Fi/Cable",
            ].map((amenity) => (
              <Button
                key={amenity}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  selectedAmenities.includes(amenity)
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => toggleSelection(selectedAmenities, setSelectedAmenities, amenity)}
              >
                {amenity}
              </Button>
            ))}
          </div>
        </div>

        {/* Power Backup */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Power Back up</p>
          <div className="flex flex-wrap gap-2">
            {["None", "Partial", "Full"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  powerBackup === option
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => setPowerBackup(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Property Facing */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Property facing</p>
          <div className="flex flex-wrap gap-2">
            {["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"].map(
              (direction) => (
                <Button
                  key={direction}
                  variant="outline"
                  className={`h-[46px] text-base font-normal ${
                    facing === direction
                      ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                      : "border-[#E1E1E1] text-[#6C696A]"
                  }`}
                  onClick={() => setFacing(direction)}
                >
                  {direction}
                </Button>
              ),
            )}
          </div>
        </div>

        {/* Water Source */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Water Source</p>
          <div className="flex flex-wrap gap-2">
            {["Municipal corporation", "Borewell/Tank", "24*7 Water"].map((source) => (
              <Button
                key={source}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  waterSource === source
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => setWaterSource(source)}
              >
                {source}
              </Button>
            ))}
          </div>
        </div>

        {/* Society/Building Features */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Society/Building feature</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Swimming Pool",
              "24/7 Security",
              "Gym/Fitness Center",
              "Shopping Centre",
              "Clubhouse",
              "Children's Play Area",
              "Sports Facilities",
              "Jogging/Walking Tracks",
              "Garden/Parks",
              "Community Halls",
              "Cinema Room",
              "Library/Reading Room",
            ].map((feature) => (
              <Button
                key={feature}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  features.includes(feature)
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => toggleSelection(features, setFeatures, feature)}
              >
                {feature}
              </Button>
            ))}
          </div>
        </div>

        {/* Other Features */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Other feature</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Separate entry for servant room",
              "No open drainage around",
              "Pet-Friendly",
              "Wheelchair friendly",
              "Rain Water Harvesting",
              "Corner Property",
              "Bank Attached Property",
            ].map((feature) => (
              <Button
                key={feature}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  otherFeatures.includes(feature)
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => toggleSelection(otherFeatures, setOtherFeatures, feature)}
              >
                {feature}
              </Button>
            ))}
          </div>
        </div>

        {/* Type of Flooring & Width of Road */}
        <div className="flex gap-5">
          <div className="flex-1 space-y-2">
            <p className="font-medium">Type of flooring</p>
            <Select>
              <SelectTrigger className="h-[58px] text-base font-normal text-[#6C696A] border-[#E1E1E1]">
                <SelectValue placeholder="Select Flooring" className="text-[#9E9E9E]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marble">Marble</SelectItem>
                <SelectItem value="tile">Tile</SelectItem>
                <SelectItem value="wooden">Wooden</SelectItem>
                <SelectItem value="granite">Granite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 space-y-2">
            <p className="font-medium">Width of Facing road</p>
            <div className="flex">
              <Select>
                <SelectTrigger className="w-[100px] h-[58px] rounded-r-none border-r-0 text-base font-normal text-[#6C696A] border-[#E1E1E1]">
                  <SelectValue placeholder="Feet" className="text-[#9E9E9E]" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feet">Feet</SelectItem>
                  <SelectItem value="meters">Meters</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="number"
                placeholder="Enter the Width"
                className="rounded-l-none flex-1 h-[58px] text-base font-normal text-[#6C696A] border-[#E1E1E1] placeholder:text-[#9E9E9E]"
              />
            </div>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="space-y-2">
          <p className="text-base font-medium text-[#0F0D0D]">Location Advantages</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Close to School",
              "Close to Hospital",
              "Close to Mall",
              "Close to Metro Station",
              "Close to Market",
              "Close to Railway Station",
              "Close to Airport",
              "Close to Highway",
              "Close to Bus Station",
            ].map((advantage) => (
              <Button
                key={advantage}
                variant="outline"
                className={`h-[46px] text-base font-normal ${
                  locationAdvantages.includes(advantage)
                    ? "bg-[#F5F5F5] border-[#7B00FF] text-[#7B00FF]"
                    : "border-[#E1E1E1] text-[#6C696A]"
                }`}
                onClick={() => toggleSelection(locationAdvantages, setLocationAdvantages, advantage)}
              >
                {advantage}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

