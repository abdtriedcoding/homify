"use client";

import React from "react";
import ListingImageSlider from "./_components/listing-image-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartIcon } from "lucide-react";
import ClientSideMap from "./_components/clientside-map";
import { ListingClientProps } from "@/types";

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
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
            <p className="text-3xl tracking-tight text-gray-900">
              ${listing.price}
            </p>
            <form className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingClient;
