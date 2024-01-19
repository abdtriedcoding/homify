import ListingCard from "../_components/listing-card";
import getFavoriteListings from "../actions/getFavoritesListings";

export default async function Page() {
  const listings = await getFavoriteListings();
  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {listings?.map((data, index) => (
          <ListingCard key={index} data={data} />
        ))}
      </div>
    </>
  );
}
