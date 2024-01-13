import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Please enter title",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
  location: z.string({
    required_error: "Please select a country",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  no_of_guest: z.string({
    required_error: "Please select number of guests",
  }),
  no_of_rooms: z.string({
    required_error: "Please select number of rooms",
  }),
  no_of_bathroom: z.string({
    required_error: "Please select number of bathrooms",
  }),
  price: z.number({
      required_error: "Number is required",
      invalid_type_error: "Number must be a number",
    })
    .min(1, { message: "Please enter price" }),
});

export default formSchema;
