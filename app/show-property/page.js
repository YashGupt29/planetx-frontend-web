import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
import Image from "next/image";

export default function ListingView() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex gap-4">
        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-4">Budget</h3>
          <div className="flex">
            <span>₹0 to</span>
            <span>₹10 Lacs</span>
          </div>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            className="text-pink-500"
            direction="ltr"
          />
          <h3 className="text-lg font-semibold mt-6 mb-2">Localities</h3>
          <div className="space-y-2">
            <Checkbox label="Dwarka" />
            <Checkbox label="Uttam Nagar" />
            <Checkbox label="Greater Kailash" />
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-2">Property Type</h3>
          <div className="space-y-2">
            <Button variant="outline">Flat / Apartment</Button>
            <Button variant="ghost">House / Villa</Button>
          </div>
        </aside>

        {/* Listings */}
        <main className="w-3/4">
          {/* Search Bar */}
          <div className="flex items-center bg-white p-3 rounded-lg shadow-md mb-4">
            <Search className="text-gray-500 mr-2" />
            <Input placeholder="Search area, city" className="flex-grow" />
          </div>

          {/* Listing Items */}
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="flex gap-4 p-4 shadow-md">
                <Image
                  src="/property.jpg"
                  width={120}
                  height={80}
                  alt="Property Image"
                  className="rounded-lg"
                />
                <CardContent>
                  <h4 className="font-semibold">Vishvarni Society</h4>
                  <p className="text-sm text-gray-600">
                    4 BHK Flat in Paharganj, Delhi
                  </p>
                  <p className="font-bold text-lg">₹17.5 Lac</p>
                  <p className="text-sm text-gray-500">
                    500 Sqft | Ready to Move
                  </p>
                  <Button variant="outline" className="mt-2">
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
