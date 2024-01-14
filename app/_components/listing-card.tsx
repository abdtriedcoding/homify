import Link from "next/link";
import ImageSlider from "./image-slider";

const ListingCard = ({
  title,
  description,
  category,
  roomCount,
  imageUrls,
}: {
  title: string;
  description: string;
  category: string;
  roomCount: string;
  imageUrls: string[];
  price: number;
}) => {
  return (
    <>
      <Link href={"/"}>
        <ImageSlider urls={imageUrls} />
        <div className="mt-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="font-medium truncate">{title}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <p className="text-sm font-medium truncate text-gray-500">
            {description}
          </p>
          <p className="text-sm font-medium text-gray-500">{roomCount} rooms</p>
        </div>
      </Link>
    </>
  );
};

export default ListingCard;
