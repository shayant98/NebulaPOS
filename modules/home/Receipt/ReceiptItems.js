import React from "react";
import { useReceipt } from "../../../context/ReceiptContext";
import ReceiptItem from "./ReceiptItem";

const ReceiptItems = () => {
  const {
    receipt: { receiptItems },
  } = useReceipt();

  return (
    <div className="flex-grow  p-4">
      <h3 className="text-3xl ">Receipt</h3>
      <div className=" h-96 overflow-auto">
        {receiptItems.length > 0 ? receiptItems.map((item, index) => <ReceiptItem key={index} item={item} />) : <p className="mt-5">No products selected</p>}
      </div>
    </div>
  );
};

export default ReceiptItems;
