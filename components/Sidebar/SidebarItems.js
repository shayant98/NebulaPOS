import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import SidebarItem from "./SidebarItem";

const SidebarItems = ({ menuItems }) => {
  return (
    <ul className="text-sm pt-10">
      {menuItems.map((menuItem, index) => (
        <SidebarItem key={index} menuItem={menuItem} />
      ))}
    </ul>
  );
};

export default SidebarItems;
