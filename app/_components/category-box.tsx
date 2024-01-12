import { CategoryBoxProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

const CategoryBox = ({ icon: Icon, label }: CategoryBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");

  const selected = category === label;

  const handleClick = () => {
    router.push(`/?category=${label}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col cursor-pointer items-center justify-center gap-2p-3border-b-2 hover:text-neutral-800transitioncursor-pointer${
        selected ? "border-b-neutral-800" : "border-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
