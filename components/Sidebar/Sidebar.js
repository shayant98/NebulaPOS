import { Switch } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineShop, AiOutlineSkin, AiOutlineStock, AiOutlineUser } from "react-icons/ai";
import { FaRegMoon, FaUserAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeProvider";
const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className={`w-2/12 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"} rounded p-3 shadow-lg absolute h-full z-10`}>
      {/* <div className="flex items-center space-x-4 p-2 mb-5">
        <img className="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <span className="text-gray-600">Verified</span>
          </span>
        </div>
      </div> */}
      <ul className="space-y-2 text-sm mt-10">
        <li className="flex space-x-3">
          <Switch
            checked={isDarkMode}
            onChange={() => toggleDarkMode(!isDarkMode)}
            className={`${isDarkMode ? "bg-gray-600 ring-white" : "bg-white ring-gray-900"} relative inline-flex items-center h-6 rounded-full w-11 ring-1 ring-offset-2 `}
          >
            <span className={`${isDarkMode ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4  transform ${isDarkMode ? "bg-white" : "bg-gray-900"} rounded-full`} />
          </Switch>
          <span>Dark Mode</span>
        </li>

        <li className="flex space-x-3 pt-5 ">
          <a href="#" class={`flex items-center space-x-3  p-2 rounded-md font-medium ${isDarkMode ? "hover:bg-white hover:text-black" : "hover:bg-gray-900 hover:text-white"}`}>
            <AiOutlineUser size={24} />
            <span>Customers</span>
          </a>
        </li>
        <li className="flex space-x-3 ">
          <a href="#" class={`flex items-center space-x-3  p-2 rounded-md font-medium ${isDarkMode ? "hover:bg-white hover:text-black" : "hover:bg-gray-900 hover:text-white"}`}>
            <AiOutlineSkin size={24} />
            <span>Products</span>
          </a>
        </li>
        <li className="flex space-x-3 ">
          <a href="#" class={`flex items-center space-x-3  p-2 rounded-md font-medium ${isDarkMode ? "hover:bg-white hover:text-black" : "hover:bg-gray-900 hover:text-white"}`}>
            <AiOutlineShop size={24} />
            <span>Inventory</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
