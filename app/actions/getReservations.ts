import prisma from "@/lib/prismadb";

export default async function getReservations(listingId: string) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: { listingId: listingId },
    });

    if (!reservations || reservations.length === 0) {
      return [];
    }

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
    }));

    return safeReservations;
  } catch (error: any) {
    console.error("Error fetching reservations:", error);
    return [];
  }
}
