import SidebarItem from "./SidebarItem";

const SidebarItems = ({ menuItems }:SidebarItemsProps) => {
  return (
    <ul className="text-sm pt-10">
      {menuItems.map((menuItem, index) => (
        <SidebarItem key={index} menuItem={menuItem} />
      ))}
    </ul>
  );
};

interface SidebarItemsProps {
  menuItems: IMenuItem[]
}

export default SidebarItems;
