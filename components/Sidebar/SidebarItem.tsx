import useFlags from "@hooks/useFlags";
import Link from "next/link";

const SidebarItem = ({ menuItem }: SidebarItemProps) => {
  const isVisible = useFlags(menuItem.flag);
  console.log(isVisible);
  return (
    <li className={`flex space-x-3 space-y-2 ${isVisible ? "" : "hidden"}`}>
      <a href={menuItem.link} className={`hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center space-x-3  p-2 rounded-md font-medium`}>
        {menuItem.icon}
        <span>{menuItem.name}</span>
      </a>
    </li>
  );
};


interface SidebarItemProps {
  menuItem: IMenuItem
}

export default SidebarItem;
