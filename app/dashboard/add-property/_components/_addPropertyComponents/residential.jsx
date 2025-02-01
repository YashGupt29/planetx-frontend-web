import React from "react";
import { formSchema } from "../../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Residential = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: propertyType,
      category: propertyKind,
      location: {
        city: "",
        state: "",
        locality: "",
        subLocality: "",
        apartment: "",
        houseNumber: "",
      },
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
      propertyArea: {
        carpetArea: 0,
        builtUpArea: undefined,
      },
      furnishingStatus: "",
      totalFloors: 0,
      propertyOnFloor: 0,
      availabilityStatus: "",
      availableFrom: "",
      ageOfProperty: 0,
      description: "",
    },
  });
  return <div>Residential</div>;
};

export default Residential;
