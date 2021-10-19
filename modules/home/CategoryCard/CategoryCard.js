import Image from "next/image";

const CategoryCard = ({ category, setCurrentCategory, setshowProductModal }) => {
  return (
    <div
      onClick={() => {
        setCurrentCategory(category.id);
        setshowProductModal(true);
      }}
      className=" mr-10"
    >
      <div className="mt-10">
        <div className="bg-white dark:bg-gray-100 dark:text-black p-5  rounded-xl shadow transform hover:scale-105 transition duration-125 hover:cursor-pointer">
          <div className="w-full h-3/4 flex items-center justify-center space-y-5">
            <Image className="" src={`${category.image}`} width="75" height="75" alt="Picture of the author" />
          </div>
          <p className="font-medium text-xl mt-4">{category.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
