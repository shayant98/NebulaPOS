import React from "react";
import ReceiptItems from "./ReceiptItems";
import ReceiptTotal from "./ReceiptTotal";

const Receipt = () => {
  return (
    <div className="h-screen bg-white col-span-2">
      <div className="flex flex-col h-full">
        <ReceiptItems />
        <ReceiptTotal />
      </div>
    </div>
  );
};

export default Receipt;
