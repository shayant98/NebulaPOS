import Receipt from "../components/Receipt/Receipt";
import { HiMenu } from "react-icons/hi";
import { PrismaClient } from "@prisma/client";
import Input from "../components/input/Input";
import Categories from "../components/Categories/Categories";
import { useEffect, useRef, useState } from "react";
import ProductModel from "../components/ProductModal/ProductModal";
import { Dialog } from "@headlessui/react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useTheme } from "../context/ThemeProvider";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      image: true,
    },
  });
  prisma.$disconnect;
  return {
    props: { categories },
  };
}

const home = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showProductModal, setshowProductModal] = useState(false);
  const [showSidebar, setshowSidebar] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    console.log(isDarkMode);
    const darkmodeValue = localStorage.getItem("modeSwitch");
    if (darkmodeValue === "dark") {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
    // toggleDarkMode( ?? false);
  }, []);
  return (
    <div className={`w-screen h-screen ${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} `}>
      <ProductModel setshowProductModal={setshowProductModal} showProductModal={showProductModal} currentCategory={currentCategory} />
      <Dialog open={showSidebar} onClose={() => setshowSidebar(false)} className={`fixed inset-0 overflow-y-auto `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <Sidebar />
      </Dialog>
      <div className="grid md:grid-cols-8 2xl:grid-cols-12">
        <div className="md:col-span-6 2xl:col-span-10">
          <div className="px-10 pt-10">
            <HiMenu
              size={32}
              className="cursor-pointer"
              onClick={() => {
                setshowSidebar(true);
              }}
            />
          </div>
          <div className="p-10">
            <Input placeholder="Zoek naar producten" />
            <Categories categories={categories} setCurrentCategory={setCurrentCategory} setshowProductModal={setshowProductModal} />
          </div>
        </div>
        <Receipt />
      </div>
    </div>
  );
};

export default home;
