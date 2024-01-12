import CategoryBox from "@/app/_components/category-box";
import { categories } from "@/constants";

const Categories = () => {
  return (
    <div className="p-2 flex flex-row items-center justify-between overflow-x-auto scrollbar-hide">
      {categories.map((item) => (
        <CategoryBox key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default Categories;
