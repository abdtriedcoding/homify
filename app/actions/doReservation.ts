"use server";

import getCurrentUser from "./getCurrentUser";
import prisma from "@/lib/prismadb";

interface DoReservationProps {
  totalPrice: number;
  listingId: string;
  startDate: Date;
  endDate: Date;
}

export async function doReservation({
  totalPrice,
  listingId,
  startDate,
  endDate,
}: DoReservationProps) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;

  await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });
}
