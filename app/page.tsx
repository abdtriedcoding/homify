import ListingCard from "./_components/listing-card";
import getListings from "./actions/getListings";

export default async function Home() {
  const listings = await getListings();
  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {listings?.map((data, index) => (
          <ListingCard key={index} {...data} />
        ))}
      </div>
    </>
  );
}
