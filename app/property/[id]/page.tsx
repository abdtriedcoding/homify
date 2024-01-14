import ListingImageSlider from "@/app/_components/listing-image-slider";
import getListingById from "@/app/actions/getListingById";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const listing = await getListingById(id);
  return (
    <div className="max-w-5xl mx-auto">
      <ListingImageSlider urls={listing?.imageUrls!} />
    </div>
  );
};

export default Page;
