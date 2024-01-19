"use server";

import getCurrentUser from "./getCurrentUser";
import prisma from "@/lib/prismadb";

export async function cancelReservation(reservationId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });
}
