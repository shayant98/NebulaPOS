import Image from "next/image";
import Input from "../input/Input";
import image from "../../public/vercel.svg";
import Overlay from "../Overlay/Overlay";
import { useOverlay } from "../../context/ModalContext";
import { useTheme } from "../../context/ThemeProvider";

const CategoryCard = ({ category, setCurrentCategory, setshowProductModal }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      onClick={() => {
        setCurrentCategory(category.id);
        setshowProductModal(true);
      }}
      className=" mr-10"
    >
      <div className="mt-10">
        <div className={` p-5  rounded-xl shadow transform hover:scale-105 transition duration-125 hover:cursor-pointer ${isDarkMode ? "bg-gray-100 text-black" : "bg-white"}`}>
          <div className="w-full h-3/4 flex items-center justify-center space-y-5">
            <Image className="" src={`/${category.image}`} width="75" height="75" alt="Picture of the author" />
          </div>
          <p className="font-medium text-xl mt-4">{category.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
