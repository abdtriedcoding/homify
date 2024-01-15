import prisma from "@/lib/prismadb";

export default async function getProperties(id: string) {
  try {
    const listings = await prisma.listing.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    return null;
  }
}
