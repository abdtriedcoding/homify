import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "./clientside-listing";

const Page = async ({ params }: { params: { listingId: string } }) => {
  const { listingId } = params;
  const listing = await getListingById(listingId);
  const currentUser = await getCurrentUser();
  if (!listing) {
    // Handle the null case, for example, redirect to an error page or show a message
    return <div>Listing not found</div>;
  }

  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default Page;
