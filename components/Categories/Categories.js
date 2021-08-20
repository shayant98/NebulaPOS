import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = ({ categories, setCurrentCategory, setshowProductModal }) => {
  return (
    <div className="flex w-full">
      {categories.map((category, index) => (
        <div key={index}>
          <CategoryCard category={category} setCurrentCategory={setCurrentCategory} setshowProductModal={setshowProductModal} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
