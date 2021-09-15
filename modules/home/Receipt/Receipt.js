import React from "react";
import ReceiptItems from "./ReceiptItems";
import ReceiptTotal from "./ReceiptTotal";

const Receipt = () => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col h-full">
        <ReceiptItems />
        <ReceiptTotal />
      </div>
    </div>
  );
};

export default Receipt;
