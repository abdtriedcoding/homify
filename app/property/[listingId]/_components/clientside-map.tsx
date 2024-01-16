"use client";

import useCountries from "@/hook/useCountries";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/_components/map"), {
  ssr: false,
});

const ClientSideMap = ({ location }: { location: string }) => {
  const { getCountryDetails } = useCountries();
  const countryDetails = getCountryDetails(location);
  const coordinates = countryDetails?.latlng;

  return (
    <div className="pr-6">
      <Map center={coordinates} />
    </div>
  );
};

export default ClientSideMap;
