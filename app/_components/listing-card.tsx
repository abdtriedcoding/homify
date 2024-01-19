import Link from "next/link";
import ImageSlider from "./image-slider";
import { SafeListing, SafeReservation } from "@/types";
interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
}) => {
  return (
    <>
      <Link href={`/property/${data?.id}`}>
        <ImageSlider urls={data?.imageUrls} />
        <div className="mt-4 flex flex-col justify-between space-y-1">
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
      </Link>
    </>
  );
};

export default ListingCard;
