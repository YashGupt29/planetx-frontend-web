import * as z from "zod";

export const PGFormSchema = z.object({
  subCategory: z.enum(["Boys PG", "Girls PG", "Co-ed PG", "Couples PG"], {
    errorMap: () => ({ message: "Sub-Category is required" }),
  }),
  roomDetails: z.object({
    sharingType: z.enum(
      [
        "Single Sharing",
        "Double Sharing",
        "Triple Sharing",
        "Quad Sharing",
        "Dormitory",
      ],
      { errorMap: () => ({ message: "Sharing Type is required" }) }
    ),
    bedCount: z.number().min(1, { message: "At least one bed is required" }),
    attachedBathroom: z.boolean({
      required_error: "Attached Bathroom field is required",
    }),
    balcony: z.boolean({
      required_error: "Balcony field is required",
    }),
    roomSize: z.string().min(1, { message: "Room size is required" }),
  }),
  mealDetails: z.object({
    mealIncluded: z.boolean({
      required_error: "Meal Included field is required",
    }),
    mealType: z.enum(["Vegetarian", "Non-Vegetarian", "Both"], {
      errorMap: () => ({ message: "Meal Type is required" }),
    }),
    mealFrequency: z.enum(["Breakfast", "Lunch", "Dinner"], {
      errorMap: () => ({ message: "Meal Frequency is required" }),
    }),
    customizationAllowed: z.boolean({
      required_error: "Customization Allowed field is required",
    }),
  }),
});
