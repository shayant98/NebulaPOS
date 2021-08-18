import React from "react";

const ReceiptItems = () => {
  return (
    <div class="flex-grow p-4 overflow-y-auto">
      <h3 className="text-3xl ">Receipt</h3>
      <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg mt-2 items-center">
        <p className="font-bold text-lg mr-10">1</p>
        <span>x</span>
        <p className=" flex-grow font-normal overflow-hidden overflow-ellipsis text-lg">Broeken </p>
        <p className="font-bold text-3xl mr-10">$60</p>
      </div>
      <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg mt-2 items-center">
        <p className="font-bold text-lg mr-10">1</p>
        <span>x</span>
        <p className=" flex-grow font-normal overflow-hidden overflow-ellipsis text-lg">Broeken </p>
        <p className="font-bold text-3xl mr-10">$60</p>
      </div>
      <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg mt-2 items-center">
        <p className="font-bold text-lg mr-10">1</p>
        <span>x</span>
        <p className=" flex-grow font-normal overflow-hidden overflow-ellipsis text-lg">Broeken </p>
        <p className="font-bold text-3xl mr-10">$60</p>
      </div>
    </div>
  );
};

export default ReceiptItems;
