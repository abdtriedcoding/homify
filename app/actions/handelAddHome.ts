"use server";

import { z } from "zod";
import formSchema from "@/validation";
import getCurrentUser from "./getCurrentUser";

type Inputs = z.infer<typeof formSchema>;

export async function handelAddHome(values: Inputs, imageUrls: string[]) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const result = formSchema.parse(values);
  await prisma?.listing.create({
    data: {
      title: result.title,
      description: result.description,
      imageUrls: imageUrls,
      category: result.category,
      roomCount: result.roomCount,
      bathroomCount: result.bathroomCount,
      guestCount: result.guestCount,
      location: result.country,
      price: result.price,
      userId: currentUser.id,
    },
  });
}
