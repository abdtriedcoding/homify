import { CategoryBoxProps } from "@/types";

const CategoryBox = ({ icon: Icon, label }: CategoryBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
