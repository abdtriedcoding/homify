"use server";

import getCurrentUser from "./getCurrentUser";
import prisma from "@/lib/prismadb";

export async function removeListing(listingId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });
}
