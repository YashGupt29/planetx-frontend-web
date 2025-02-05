"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResidentialAmenties from "../_amentiesComponents/residentialAmenties";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useSearchParams } from "next/navigation";
import { residentialAmmentiesFormSchema } from "../_amentiesComponents/_schema/residentialFormSchema";
import { useToast } from "@/hooks/use-toast";
import { pgFormSchema } from "../_amentiesComponents/_schema/pgFormSchema";
import PGAmenities from "../_amentiesComponents/pgAmmenties";
import HotelAmentiesForm from "../_amentiesComponents/hotelAmenties";
import { hotelFormSchema } from "../_amentiesComponents/_schema/hotelFormSchema";

export default function AmenitiesDetails({
  propertyData,
  setPropertyData,
  setCurrentStep,
}) {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const propertyKind = searchParams.get("propertyKind");
  const schema =
    propertyKind === "Residential"
      ? residentialAmmentiesFormSchema
      : propertyKind === "Pg"
      ? pgFormSchema
      : propertyKind === "Hotel"
      ? hotelFormSchema
      : "";
  const hotelDefaults = {
    amenities: {
      wifi: false,
      powerBackup: false,
      parking: {
        twoWheeler: false,
        fourWheeler: false,
      },
      hotWater: false,
      laundryService: false,
      housekeeping: false,
      roomService: false,
      airConditioning: false,
      restaurant: false,
      bar: false,
      conferenceRoom: false,
      gym: false,
      swimmingPool: false,
      lift: false,
      cctv: false,
      security24x7: false,
      firstAidKit: false,
      fireExtinguisher: false,
      wheelChairAccess: false,
    },
    mealOptions: {
      includedMeals: {
        breakfast: false,
        lunch: false,
        dinner: false,
      },
      // Note: the schema requires at least one cuisine; using "Indian" as default.
      availableCuisines: "",
      specialDietaryMeals: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        halal: false,
        kosher: false,
      },
      mealCharges: {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
      },
      diningOptions: {
        inRoomDining: false,
        buffet: false,
        aLaCarte: false,
        commonDiningArea: false,
      },
    },
    dormitorySpecificDetails: {
      totalBeds: 0,
      bunkBedAvailability: false,
      lockerFacility: false,
      commonRoom: false,
      kitchenAccess: false,
      diningArea: false,
    },
    nearbyPlaces: {
      hospital: false,
      school: false,
      metro: false,
      mall: false,
      market: false,
      railway: false,
      airport: false,
      highway: false,
      busStation: false,
    },
    rules: {
      checkInTime: "",
      checkOutTime: "",
      smokingAllowed: false,
      alcoholAllowed: false,
      petsAllowed: false,
      quietHours: "",
      visitorPolicy: "",
      cancellationPolicy: "",
    },
    bookingOptions: {
      onlineBooking: false,
      walkIn: false,
      preBookingRequired: false,
      groupDiscounts: false,
      longStayDiscounts: false,
    },
    additionalFeatures: {
      childFriendly: false,
      coupleFriendly: false,
      seniorCitizenFriendly: false,
      localIDAccepted: false,
      pickupDropService: false,
      tourGuidance: false,
    },
  };

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: propertyKind === "Hotel" ? hotelDefaults : "",
  });
  function onSubmit(values) {
    try {
      console.log(values);
      setPropertyData((prevPropertyData) => ({
        ...prevPropertyData,
        ...values,
      }));
      toast({
        title: "Success",
        description: "Property added successfully!",
        variant: "default",
      });
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add property",
        variant: "destructive",
      });
    }
  }
  return (
    <Card className="w-full max-w-[835px] p-5 space-y-5">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-medium text-[#000000] border-b pb-3">
          Amenities Details
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {propertyKind === "Residential" ? (
            <ResidentialAmenties form={form} />
          ) : propertyKind === "Pg" ? (
            <PGAmenities form={form} />
          ) : propertyKind === "Hotel" ? (
            <HotelAmentiesForm form={form} />
          ) : (
            ""
          )}
          <Button
            type="submit"
            className="w-full h-[50px] text-base bg-[#7B00FF] rounded-lg"
          >
            Submit Amenities
          </Button>
        </form>
      </Form>
    </Card>
  );
}
