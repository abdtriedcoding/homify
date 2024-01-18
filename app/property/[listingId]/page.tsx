import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "./clientside-listing";
import getReservations from "@/app/actions/getReservations";

const Page = async ({ params }: { params: { listingId: string } }) => {
  const { listingId } = params;
  const listing = await getListingById(listingId);
  const reservations = await getReservations(listingId);

  console.log("reservations",reservations)
  console.log("listingId",listingId)

  const currentUser = await getCurrentUser();
  if (!listing) {
    // Handle the null case, for example, redirect to an error page or show a message
    return <div>Listing not found</div>;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default Page;
