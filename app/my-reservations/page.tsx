import ListingCard from "../_components/listing-card";
import getCurrentUser from "../actions/getCurrentUser";
import getUserPropertyReservations from "../actions/getUserPropertyReservations";

export default async function Page() {
  const currentUser = await getCurrentUser();
  const listings = await getUserPropertyReservations(currentUser?.id!);
  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {listings?.map((data, index) => (
          <ListingCard key={index} {...data.listing} />
        ))}
      </div>
    </>
  );
}
