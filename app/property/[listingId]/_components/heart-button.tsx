import { toogleFavourite } from "@/app/actions/toogleFavourite";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HeartButton = ({
  currentUser,
  listingId,
}: {
  currentUser: any;
  listingId: string;
}) => {
  const router = useRouter();
  const favoriteIds = currentUser?.favoriteIds || [];
  const isFavorite = favoriteIds.includes(listingId);

  const handleSubmit = async () => {
    await toogleFavourite(listingId);
    router.refresh();
    toast.success("Done");
  };
  return (
    <>
      <form action={handleSubmit}>
        <button type="submit" className="bg-white rounded-full p-2">
          <HeartIcon
            className={`${isFavorite ? "fill-red-500" : ""}`}
            size={24}
          />
        </button>
      </form>
    </>
  );
};

export default HeartButton;
