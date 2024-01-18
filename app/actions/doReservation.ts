"use server";

import getCurrentUser from "./getCurrentUser";

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

  console.log("Data:", listingId, startDate, endDate, totalPrice);
}
