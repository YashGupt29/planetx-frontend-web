"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Heart,
  Search,
  Star,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { ReusableCollapsible } from "./_component/collapisble";
import BudgetFilter from "./_component/BudgetFilter";

export default function ListingView() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [parking, setParking] = useState(null);
  const [furnished, setFurnished] = useState(null);

  return (
    <div className="flex min-h-screen bg-[#f8f4fc] p-10 gap-3">
      {/* Left Sidebar */}
      <div className="w-[300px] border-r p-4 space-y-6 bg-white rounded-xl">
        {/* Budget Section */}
        <BudgetFilter />
        {/* Property Type Section */}
        <ReusableCollapsible
          title="Property Type"
          options={["For Sale", "For Rent", "Commercial"]}
          selected={selectedType}
          setSelected={setSelectedType}
          paramName="propertyType"
        />{" "}
        <ReusableCollapsible
          title="Category"
          options={[
            "Residential",
            "Pg",
            "Hotel",
            "Office",
            "Shop",
            "Warehouse",
            "Shared Warehouse",
            "EventSpace",
          ]}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          paramName="category"
        />
        <ReusableCollapsible
          title="Number of Bedrooms"
          options={["1", "2", "3", "4", "5", "6+"]}
          selected={selectedBedroom}
          setSelected={setSelectedBedroom}
          paramName="bedrooms"
        />
        <ReusableCollapsible
          title="Posted By"
          options={[
            "Buyer",
            "Renter",
            "Landlord",
            "Property Owner",
            "Rental Provider",
            "Builder",
            "Dealer",
          ]}
          selected={selectedRole}
          setSelected={setSelectedRole}
          paramName="postedBy"
        />
        <ReusableCollapsible
          title="Parking"
          options={["Open Parking", "Closed Parking"]}
          selected={parking}
          setSelected={setParking}
          paramName="parking"
        />
        <ReusableCollapsible
          title="Furnishing status"
          options={["Furnished", "Semi furnished", "Unfurnished"]}
          selected={furnished}
          setSelected={setFurnished}
          paramName="furnishing"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4  rounded-xl">
        {/* Search Header */}
        <div className="flex gap-4 mb-6">
          <Select defaultValue="buy">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Buy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-1 ">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input className="pl-10 bg-white" placeholder="Search area, city" />
          </div>
        </div>

        {/* Property Cards */}
        <div className="space-y-6 ">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border p-4 flex gap-4 bg-white rounded-xl">
              {/* Property Image */}
              <div className="relative w-[240px] h-[180px]">
                <Image
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000002818-szLXOpbE2ilxY1Q6amjLapJ3p1NlSl.png`}
                  alt="Property"
                  fill
                  className="rounded-lg object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white rounded-full"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-white opacity-60"
                    />
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Vishwami Society</h3>
                    <p className="text-sm text-gray-600">
                      4 BHK Flat in Paharganj, Delhi
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex gap-8">
                    <div>
                      <p className="font-semibold">₹17.5 Lac</p>
                      <p className="text-sm text-gray-600">₹3,500 / sqft</p>
                    </div>
                    <div>
                      <p className="font-semibold">500 Sqft</p>
                      <p className="text-sm text-gray-600">Carpet Area</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting ind...
                  </p>

                  <div className="flex gap-2">
                    <Button variant="outline" className="rounded-full text-xs">
                      Ready to Move
                    </Button>
                    <Button variant="outline" className="rounded-full text-xs">
                      Furnished
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      Property Owner • 2d ago
                    </p>
                    <div className="flex gap-2">
                      <Button size="icon" className="rounded-full bg-green-500">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-full bg-purple-600"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
