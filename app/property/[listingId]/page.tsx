import getListingById from "@/app/actions/getListingById";
import ListingImageSlider from "./_components/listing-image-slider";
import getCurrentUser from "@/app/actions/getCurrentUser";

const Page = async ({ params }: { params: { listingId: string } }) => {
  const { listingId } = params;
  const listing = await getListingById(listingId);
  const currentUser = await getCurrentUser();

  return (
    <div className="max-w-5xl mx-auto">
      <ListingImageSlider
        currentUser={currentUser}
        listingId={listingId}
        urls={listing?.imageUrls!}
      />
    </div>
  );
};

export default Page;
