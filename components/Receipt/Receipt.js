import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import ReceiptItems from "./ReceiptItems";
import ReceiptTotal from "./ReceiptTotal";

const Receipt = () => {
  return (
    <div className={`h-screen col-span-2`}>
      <div className="flex flex-col h-full">
        <ReceiptItems />
        <ReceiptTotal />
      </div>
    </div>
  );
};

export default Receipt;
