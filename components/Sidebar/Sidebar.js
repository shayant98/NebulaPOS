import SidebarItems from "./SidebarItems";
import { AiOutlineFund, AiOutlineLogout, AiOutlineShop, AiOutlineShopping, AiOutlineSkin, AiOutlineUndo } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/client";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { name: "Register", link: "/", icon: <AiOutlineShopping size={24} /> },
    { name: "Products", link: "products", icon: <AiOutlineSkin size={24} /> },
    { name: "Refund", link: "refund", icon: <AiOutlineUndo size={24} /> },
    { name: "Rapports", link: "rapports", icon: <AiOutlineFund size={24} /> },
  ];

  return (
    <div className={`bg-white dark:bg-gray-900 dark:text-white w-2/12  rounded p-3 shadow-lg absolute h-full z-10`}>
      <div className="grid grid-cols-12 divide-x-2 divide-opacity-20 divide-gray-500 h-full">
        <div className="col-span-2 p-2 mt-10">
          <li className="flex">
            <div className="p-2 cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </div>
          </li>
          <li className="flex">
            <div className="p-2 cursor-pointer" onClick={() => signOut()}>
              <AiOutlineLogout size={24} />
            </div>
          </li>
        </div>
        <div className="col-span-10 p-2">
          <SidebarItems menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
