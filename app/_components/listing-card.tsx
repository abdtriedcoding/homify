import Link from "next/link";
import ImageSlider from "./image-slider";

const ListingCard = ({
  title,
  description,
  roomCount,
  price,
  imageUrls,
}: {
  title: string;
  description: string;
  roomCount: string;
  imageUrls: string[];
  price: number;
}) => {
  return (
    <>
      <Link href={"/"}>
        <ImageSlider urls={imageUrls} />
        <div className="mt-4 flex flex-col justify-between space-y-1">
          <h3 className="font-medium truncate">{title}</h3>
          <p className="text-sm font-medium truncate text-gray-500">
            {description}
          </p>
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600">
              {roomCount} rooms
            </p>
            <p className="text-sm font-medium text-gray-600">${price}/night</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListingCard;
