"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddPrice() {
  const [expectedPrice, setExpectedPrice] = React.useState("")
  const [pricePerSqFt, setPricePerSqFt] = React.useState("")
  const [maintenanceFrequency, setMaintenanceFrequency] = React.useState("monthly")
  const [maintenanceAmount, setMaintenanceAmount] = React.useState("")

  return (
    <Card className="w-[835px] h-[438px]">
      <CardHeader className="border-b border-[#E1E1E1] px-5 py-5">
        <CardTitle className="text-xl font-medium">Add Price</CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        <div className="flex gap-5">
          <div className="flex-1 space-y-2">
            <label className="text-base font-medium">Expected Price</label>
            <div className="relative">
              <Input
                type="text"
                value={expectedPrice}
                onChange={(e) => setExpectedPrice(e.target.value)}
                className="h-[58px] pl-8"
                placeholder="25,00,000"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-base font-medium">Price Per Sq. ft.</label>
            <Input
              type="text"
              value={pricePerSqFt}
              onChange={(e) => setPricePerSqFt(e.target.value)}
              className="h-[58px] bg-[#F5F5F5]"
              placeholder="856"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inclusive"
              className="border-[#9E9E9E] data-[state=checked]:bg-[#7B00FF] data-[state=checked]:border-[#7B00FF]"
            />
            <label htmlFor="inclusive" className="text-sm leading-none">
              All inclusive price
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="negotiable"
              defaultChecked
              className="border-[#9E9E9E] data-[state=checked]:bg-[#7B00FF] data-[state=checked]:border-[#7B00FF]"
            />
            <label htmlFor="negotiable" className="text-sm leading-none">
              Price Negotiable
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="tax-excluded"
              defaultChecked
              className="border-[#9E9E9E] data-[state=checked]:bg-[#7B00FF] data-[state=checked]:border-[#7B00FF]"
            />
            <label htmlFor="tax-excluded" className="text-sm leading-none">
              Tax and Govt. charges excluded
            </label>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="maintenance"
                defaultChecked
                className="border-[#9E9E9E] data-[state=checked]:bg-[#7B00FF] data-[state=checked]:border-[#7B00FF]"
              />
              <label htmlFor="maintenance" className="text-sm leading-none">
                Maintenance
              </label>
            </div>

            <div className="flex">
              <Select value={maintenanceFrequency} onValueChange={setMaintenanceFrequency}>
                <SelectTrigger className="w-[120px] h-[58px] rounded-r-none border-r-0">
                  <SelectValue placeholder="Monthly" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="Enter Maintenance"
                value={maintenanceAmount}
                onChange={(e) => setMaintenanceAmount(e.target.value)}
                className="flex-1 h-[58px] rounded-l-none"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

