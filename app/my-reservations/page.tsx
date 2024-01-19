import { SafeReservation } from "@/types";
import ListingCard from "../_components/listing-card";
import getCurrentUser from "../actions/getCurrentUser";
import getUserPropertyReservations from "../actions/getUserPropertyReservations";

export default async function Page() {
  const currentUser = await getCurrentUser();
  const listings: SafeReservation[] = await getUserPropertyReservations(
    currentUser?.id!
  );

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {listings?.map((reservation) => (
          <ListingCard key={reservation.id}
          data={reservation.listing}
          reservation={reservation} />
        ))}
      </div>
    </>
  );
}
