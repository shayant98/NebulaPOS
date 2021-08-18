import React from "react";

const ReceiptTotal = () => {
  return (
    <div class="flex-none ">
      <div className="flex flex-col">
        <div className="  p-5 w-full border-b border-blue-400">
          <div className="grid grid-cols-2">
            <p className=" text-2xl">Sub-total:</p>
            <p className="place-self-end text-2xl">$3000</p>
          </div>
        </div>
        <div className="  p-5 w-full border-b border-blue-400">
          <div className="grid grid-cols-2">
            <p className=" text-2xl">Tax:</p>
            <p className="place-self-end text-2xl">$3000</p>
          </div>
        </div>
        <div className="  p-5 w-full border-b border-blue-400">
          <div className="grid grid-cols-2">
            <p className=" text-2xl">Total:</p>
            <p className="place-self-end text-2xl">$3000</p>
          </div>
        </div>
        <div className="bg-blue-400  p-5 w-full border-b border-blue-400 text-white">
          <div className="grid grid-cols-2">
            <p className=" text-4xl font-bold">Total:</p>
            <p className="place-self-end text-3xl">$3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptTotal;
