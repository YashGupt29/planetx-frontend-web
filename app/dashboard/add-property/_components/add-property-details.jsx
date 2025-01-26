
"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ChevronDown, Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { formSchema } from "../schema"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"
import BACKEND_URL from "@/lib/BACKEND_URL"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const PropertyDetailsForm = () => {
  const [openFurnishingDialog, setOpenFurnishingDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: {
        bedrooms: 1,
        bathrooms: 1,
        balconies: 0,
      },
      parking: {
        covered: 0,
        open: 0,
      },
      otherRooms: {
        poojaRoom: false,
        guestRoom: false,
        servantRoom: false,
        studyRoom: false,
      },
      furnishingDetails: {},
    },
  })

  async function onSubmit(values) {
    console.log(values)
    setIsSubmitting(true)

    try {
      // Make API call using axios
      const response = await axios.post(`${BACKEND_URL}/properties/add`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response)

      toast({
        title: "Success",
        description: "Property added successfully!",
        variant: "default",
      })

      // Reset form after successful submission
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to add property",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const SelectButton = ({ name, options, value, onChange }) => (
    <div>
      <p className="text-base font-poppins text-[#0F0D0D] mb-2">{name}</p>
      <div className="flex gap-2.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`h - [46px] px - [15px] rounded - lg flex items - center justify - center font - poppins
              ${option === value
                ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                : "border border-[#E1E1E1] text-[#6C696A]"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )

  const NumberInput = ({ name, value, onChange }) => (
    <div>
      <p className="text-base font-poppins text-[#6C696A] mb-2">{name}</p>
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-9 h-9 rounded-full border border-[#E1E1E1] flex items-center justify-center"
        >
          <Minus className="w-5 h-5 text-[#9E9E9E]" />
        </button>
        <span className="text-lg font-poppins text-[#6C696A]">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-9 h-9 rounded-full border border-[#E1E1E1] flex items-center justify-center"
        >
          <Plus className="w-5 h-5 text-[#6C696A]" />
        </button>
      </div>
    </div>
  )

  return (
    <Card className="w-[835px] bg-white border border-[#E1E1E1] rounded-xl p-5">
      <CardContent className="p-0">
        <div className="border-b border-[#E1E1E1] pb-2.5 mb-5">
          <h2 className="text-xl font-medium font-poppins text-[#000000]">Property Details</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Type</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full h-[58px] px-[15px] border border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins appearance-none"
                        >
                          <option value="">Select Type</option>
                          <option value="For Sale">For Sale</option>
                          <option value="For Rent">For Rent</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Property Category
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full h-[58px] px-[15px] border border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins appearance-none"
                        >
                          <option value="">Select Category</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter City"
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">State</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full h-[58px] px-[15px] border border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins appearance-none"
                        >
                          <option value="">Select State</option>
                          <option value="state1">State 1</option>
                          <option value="state2">State 2</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.locality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Locality / Apartment
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Locality / Apartment"
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.subLocality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Sub Locality (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Sub Locality"
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.apartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Apartment</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Apartment"
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location.houseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      House No. (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter House No."
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about.bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Number of Bedrooms
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-2.5">
                        {[1, 2, 3, 4, 5, "5+"].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => field.onChange(num === "5+" ? 6 : Number(num))}
                            className={`w - [46px] h - [46px] rounded - lg flex items - center justify - center font - poppins
                              ${field.value === (num === "5+" ? 6 : Number(num))
                                ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                                : "border border-[#E1E1E1] text-[#6C696A]"
                              } `}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about.bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Number of Bathrooms
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-2.5">
                        {[1, 2, 3, 4, 5, "5+"].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => field.onChange(num === "5+" ? 6 : Number(num))}
                            className={`w - [46px] h - [46px] rounded - lg flex items - center justify - center font - poppins
                              ${field.value === (num === "5+" ? 6 : Number(num))
                                ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                                : "border border-[#E1E1E1] text-[#6C696A]"
                              } `}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about.balconies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Balconies</FormLabel>
                    <FormControl>
                      <div className="flex gap-2.5">
                        {[1, 2, 3, "3+"].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => field.onChange(num === "3+" ? 4 : Number(num))}
                            className={`w - [46px] h - [46px] rounded - lg flex items - center justify - center font - poppins
                              ${field.value === (num === "3+" ? 4 : Number(num))
                                ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                                : "border border-[#E1E1E1] text-[#6C696A]"
                              } `}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <p className="text-base font-poppins text-[#0F0D0D] mb-2">
                Other Rooms <span className="text-[#6C696A]">(Optional)</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["poojaRoom", "guestRoom", "servantRoom", "studyRoom"].map((room) => (
                  <FormField
                    key={room}
                    control={form.control}
                    name={`otherRooms.${room} `}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <button
                            type="button"
                            onClick={() => field.onChange(!field.value)}
                            className={`h - [46px] px - [15px] rounded - lg flex items - center justify - center font - poppins
                              ${field.value
                                ? "bg-[#F5F5F5] border border-[#7B00FF] text-[#7B00FF]"
                                : "border border-[#E1E1E1] text-[#6C696A]"
                              } `}
                          >
                            {room.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                          </button>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-base font-medium font-poppins text-[#0F0D0D]">Add Area of Property</p>
              <FormField
                control={form.control}
                name="propertyArea.carpetArea"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative flex">
                        <Input
                          type="number"
                          placeholder="Carpet Area"
                          className="h-[58px] pl-[15px] pr-[80px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                        <select className="absolute right-0 w-[70px] h-[58px] bg-transparent border-l border-[#E1E1E1] rounded-r-lg text-[#6C696A] font-poppins appearance-none cursor-pointer pl-2 pr-8">
                          <option value="sqft">Sqft</option>
                          <option value="sqm">Sqm</option>
                          <option value="sqyd">Sqyd</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {form.watch("propertyArea.builtUpArea") !== undefined && (
                <FormField
                  control={form.control}
                  name="propertyArea.builtUpArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex">
                          <Input
                            type="number"
                            placeholder="Built-up Area"
                            className="h-[58px] pl-[15px] pr-[80px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                          <select className="absolute right-0 w-[70px] h-[58px] bg-transparent border-l border-[#E1E1E1] rounded-r-lg text-[#6C696A] font-poppins appearance-none cursor-pointer pl-2 pr-8">
                            <option value="sqft">Sqft</option>
                            <option value="sqm">Sqm</option>
                            <option value="sqyd">Sqyd</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F0D0D] pointer-events-none" />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              {form.watch("propertyArea.builtUpArea") !== undefined ? (
                <div
                  className="flex items-center gap-2 text-sm font-poppins cursor-pointer"
                  onClick={() => form.setValue("propertyArea.builtUpArea", undefined)}
                >
                  <X className="w-4 h-4 text-[#F44336]" />
                  <span className="text-[#F44336]">Remove Built-up Area</span>
                </div>
              ) : (
                <div
                  className="flex items-center gap-0.5 text-sm font-poppins cursor-pointer"
                  onClick={() => form.setValue("propertyArea.builtUpArea", 0)}
                >
                  <Plus className="w-4 h-4 text-[#7B00FF]" />
                  <span className="text-[#7B00FF]">Add Built-up Area</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="furnishingStatus"
                render={({ field }) => (
                  <FormItem>
                    <SelectButton
                      name="Furnishing Status"
                      options={["Unfurnished", "Semi Furnished", "Fully Furnished"]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItem>
                )}
              />
              <Dialog open={openFurnishingDialog} onOpenChange={setOpenFurnishingDialog}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="h-[46px] px-[15px] bg-[#7B00FF] text-white font-medium font-poppins rounded-lg text-sm"
                  >
                    Furnishing Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-medium font-poppins text-[#000000]">
                      Furnishing Details
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {["fans", "lights", "tv", "beds", "ac", "wardrobes", "exhaustFans", "curtains", "floorLamps"].map(
                      (item) => (
                        <FormField
                          key={item}
                          control={form.control}
                          name={`furnishingDetails.${item} `}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base font-poppins">
                                  {item.charAt(0).toUpperCase() + item.slice(1)}
                                </FormLabel>
                              </div>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) => field.onChange(Number(e.target.value))}
                                  className="w-[100px]"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ),
                    )}
                    {[
                      "diningTable",
                      "sofa",
                      "stove",
                      "kitchenCabinets",
                      "chimney",
                      "coffeeTable",
                      "refrigerator",
                      "microwave",
                      "dishwasher",
                      "waterPurifier",
                      "washingMachine",
                    ].map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name={`furnishingDetails.${item} `}
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base font-poppins">
                                {item.replace(/([A-Z])/g, " $1").trim()}
                              </FormLabel>
                            </div>
                            <FormControl>
                              <div className="relative">
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="w-6 h-6 border-2 border-[#7B00FF] rounded-md"
                                />
                                {field.value && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute top-0 left-0 w-6 h-6 text-[#7B00FF]"
                                  >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                )}
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="totalFloors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Total no. of Floor
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Total Floor"
                        className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyOnFloor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">
                      Property on Floor
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full h-[58px] px-[15px] border border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins appearance-none"
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        >
                          <option value="">Select Floor</option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <p className="text-base font-poppins text-[#0F0D0D] mb-2">
                Parking <span className="text-[#6C696A]">(Optional)</span>
              </p>
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="parking.covered"
                  render={({ field }) => (
                    <FormItem>
                      <NumberInput name="Covered Parking" value={field.value} onChange={field.onChange} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parking.open"
                  render={({ field }) => (
                    <FormItem>
                      <NumberInput name="Open Parking" value={field.value} onChange={field.onChange} />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="availabilityStatus"
              render={({ field }) => (
                <FormItem>
                  <SelectButton
                    name="Availability Status"
                    options={["Ready to Move", "Under Construction"]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="availableFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Available From</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={(date) => field.onChange(date.toISOString().split('T')[0])}
                          className="h-[58px] px-[15px] border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins w-full"
                          dateFormat="yyyy-MM-dd"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ageOfProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Age of Property</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full h-[58px] px-[15px] border border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins appearance-none"
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        >
                          <option value="">Select Age of Property</option>
                          {[...Array(20)].map((_, i) => (
                            <option key={i} value={i}>
                              {i} years
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0F0D0D] pointer-events-none" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium font-poppins text-[#0F0D0D]">Add Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add Description"
                      className="min-h-[126px] px-[15px] py-4 border-[#E1E1E1] rounded-lg text-[#9E9E9E] font-poppins resize-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-[50px] bg-[#7B00FF] text-white font-medium font-poppins rounded-[10px]"
            >
              Submit Property Details
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}


