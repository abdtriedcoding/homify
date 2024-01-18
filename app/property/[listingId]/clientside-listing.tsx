"use client";

import React, { useEffect, useMemo, useState } from "react";
import ListingImageSlider from "./_components/listing-image-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartIcon } from "lucide-react";
import ClientSideMap from "./_components/clientside-map";
import { ListingClientProps } from "@/types";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import ListingReservation from "./_components/listing-reservation";
import ReserveButton from "./_components/reserve-button";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const ListingClient = ({
  listing,
  currentUser,
  reservations,
}: ListingClientProps) => {
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <ListingImageSlider
          currentUser={currentUser}
          listingId={listing.id}
          urls={listing?.imageUrls!}
        />
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 py-12">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200">
            {/* User Details */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <h1 className="font-semibold  text-xl">
                  Hosted by {currentUser?.name}
                </h1>
                <Avatar className="w-11 h-11">
                  <AvatarImage
                    src={currentUser?.image ?? "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center space-x-4">
                <h3> {listing.guestCount} Guest</h3>
                <h3>{listing.roomCount} Rooms</h3>
                <h3> {listing.bathroomCount} BathRooms</h3>
              </div>
            </div>
            {/* Icon and desc of property */}
            <div className="flex space-x-4 py-6 items-center">
              <HeartIcon className="w-8 h-8" />
              <div className="flex flex-col space-y-1">
                <h1 className="text-md font-bold">Lux</h1>
                <p className="text-sm text-gray-500">This is called property</p>
              </div>
            </div>
            {/* Property desc */}
            <div className="pb-6">
              <h1 className="text-2xl">{listing.title}</h1>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{listing.description}</p>
              </div>
            </div>
            <ClientSideMap location={listing?.location!} />
          </div>
          {/* Calendar */}
          <div className="lg:col-span-1">
            <ListingReservation
              price={listing.price}
              totalPrice={totalPrice}
              onChangeDate={(value) => setDateRange(value)}
              dateRange={dateRange}
              disabledDates={disabledDates}
            />
            <ReserveButton
              totalPrice={totalPrice}
              listingId={listing.id}
              startDate={dateRange.startDate!}
              endDate={dateRange.endDate!}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingClient;
