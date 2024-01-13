"use server";

import { z } from "zod";
import formSchema from "@/validation";

type Inputs = z.infer<typeof formSchema>;

export async function handelAddHome(values: Inputs, imageUrls: string[]) {
  const result = formSchema.parse(values);
  console.log({ result, imageUrls });
  return result;
}
