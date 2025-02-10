"use client";
import React, { useEffect, useState } from "react";
import {
  Heart,
  Search,
  Star,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SortFilter } from "./sortFilter";
import Image from "next/image";
import axios from "axios";
import BACKEND_URL, { token } from "@/lib/BACKEND_URL";

const MainCard = () => {
  const [propertyData, setPropertyData] = useState({});
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        console.log("token", token);
        const response = await axios.get(
          `${BACKEND_URL}/properties/availableProperty`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);

        setPropertyData(response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    if (token) {
      fetchPropertyData();
    }
  }, [token]);
  return (
    <div className="flex-1 p-4  rounded-xl">
      {/* Search Header */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative flex-1 ">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input className="pl-10 bg-white" placeholder="Search area, city" />
        </div>
        <SortFilter />
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
                    <Button size="icon" className="rounded-full bg-purple-600">
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
  );
};

export default MainCard;
