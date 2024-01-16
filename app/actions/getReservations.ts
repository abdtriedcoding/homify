import prisma from "@/lib/prismadb";

export default async function getReservations(id: string) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: { id },
    });

    if (!reservations) {
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
    return [];
  }
}
