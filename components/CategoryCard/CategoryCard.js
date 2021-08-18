import Image from "next/image";
import Input from "../input/Input";
import image from "../../public/vercel.svg";

const CategoryCard = () => {
  return (
    <div className="p-10 ">
      <Input placeholder="Zoek naar producten" />
      <div className="mt-10">
        <div className="w-56 h-56 p-5  rounded-xl shadow transform hover:scale-105 transition delay-75 hover:cursor-pointer">
          <Image src={image} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
