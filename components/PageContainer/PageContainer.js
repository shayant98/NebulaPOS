import { Dialog } from "@headlessui/react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";

const PageContainer = ({ children, title = "" }) => {
  const [showSidebar, setshowSidebar] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white w-screen h-screen">
      <Dialog open={showSidebar} onClose={() => setshowSidebar(false)} className={`fixed inset-0 overflow-y-auto `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <Sidebar />
      </Dialog>
      <div className="px-10 pt-10">
        <HiMenu
          size={32}
          className="cursor-pointer"
          onClick={() => {
            setshowSidebar(true);
          }}
        />
      </div>
      <div className="px-10">
        <h2 className="mb-10 text-6xl">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
