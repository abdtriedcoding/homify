import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title cant be blank",
  }),
  description: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  location: z.string({
    required_error: "Please select a country.",
  }),
  category: z.string({
    required_error: "Please select a category.",
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
  price:z.number().min(1, {
    message: "Please enter valid price",
  }),
});

export default formSchema;
