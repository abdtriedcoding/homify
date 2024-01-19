"use client";

import Link from "next/link";
import ImageSlider from "./image-slider";
import { SafeListing, SafeReservation } from "@/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
}

const ListingCard: React.FC<ListingCardProps> = ({ data, reservation }) => {
  const pathname = usePathname();
  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <Link href={`/property/${data?.id}`}>
      <div className="cursor-pointer">
        <ImageSlider urls={data?.imageUrls} />

        {pathname !== "/my-trips" && (
          <div className="mt-4 space-y-1">
            <h3 className="font-medium truncate">{data?.title}</h3>
            <p className="text-sm font-medium truncate text-gray-500">
              {data?.description}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-600">
                {data?.roomCount} rooms
              </p>
              <p className="text-sm font-medium text-gray-600">
                ${data?.price}/night
              </p>
            </div>
          </div>
        )}

        {pathname === "/my-trips" && (
          <>
            <div className="font-semibold text-lg">{data.location}</div>
            <div className="font-light text-neutral-500">
              {reservationDate || data.category}
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">${reservation?.totalPrice}</div>
            </div>

            <Button className="w-full mt-2">Cancel Reservation</Button>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListingCard;
