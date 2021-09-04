import React from "react";
import { useReceipt } from "../../context/ReceiptContext";

const ReceiptItem = ({ item }) => {
  const { removeItem } = useReceipt();
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 flex  w-full  rounded-lg mt-2 items-center`}>
      <p className="font-bold w-10 p-4 text-lg mr-3">{item.qty}</p>
      <span>x</span>
      <p className=" flex-grow p-4 font-normal overflow-hidden overflow-ellipsis text-md xl:text-lg 2xl:text-lg">{item.name} </p>
      <p className="font-bold p-4 text-md xl:text-lg 2xl:text-3xl mr-10">${item.totalPrice}</p>
      <div onClick={() => removeItem(item.id)} className="font-bold p-5 h-16 rounded text-white bg-red-400 transform hover:scale-105 duration-100 cursor-pointer">
        X
      </div>
    </div>
  );
};

export default ReceiptItem;
