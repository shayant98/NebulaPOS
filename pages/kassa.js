import Receipt from "../components/Receipt/Receipt";

import CategoryCard from "../components/CategoryCard/CategoryCard";
const kassa = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="h-15 w-full bg-green-400"></div>
      <div class="grid grid-cols-12">
        <div className="col-span-10 border-r  border-blue-400 ">
          <CategoryCard />
        </div>
        <Receipt />
      </div>
    </div>
  );
};

export default kassa;
