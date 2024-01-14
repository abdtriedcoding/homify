import prisma from "@/lib/prismadb";

export default async function getListingById(id: string) {
  try {
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      return null;
    }

    const safeListing = {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    };
    return safeListing;
  } catch (error: any) {
    return null;
  }
}
