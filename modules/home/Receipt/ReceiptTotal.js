import React, { useState } from "react";
import { toast } from "react-toastify";
import { useReceipt } from "../../../context/ReceiptContext";
import PaymentModal from "../PaymentModal/PaymentModal";

const ReceiptTotal = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const {
    receipt: { total, subTotal, tax },
  } = useReceipt();
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 flex-none m-5 p-5  rounded-xl shadow`}>
      <div className="flex flex-col">
        <div className="  p-5 w-full ">
          <div className="grid grid-cols-2">
            <p className=" text-lg">Sub-total:</p>
            <p className="place-self-end text-lg">${subTotal}</p>
          </div>
        </div>
        <div className="  p-5 w-full ">
          <div className="grid grid-cols-2">
            <p className=" text-lg">Tax:</p>
            <p className="place-self-end text-lg">${tax}</p>
          </div>
        </div>
        <div className="  p-5 w-full ">
          <div className="grid grid-cols-2">
            <p className=" text-lg">Total:</p>
            <p className="place-self-end text-lg">${total}</p>
          </div>
        </div>
        <div
          onClick={() => {
            if (total <= 0) {
              toast.error("No need to pay", {
                toastId: "no-pay",
              });
            } else {
              setIsPaymentModalOpen(true);
            }
          }}
          className="bg-blue-400  p-5 w-full border-b border-blue-400 text-white rounded-xl transform hover:scale-105 duration-150 cursor-pointer"
        >
          <div className="grid grid-cols-2">
            <p className=" text-xl font-bold">Pay:</p>
            <p className="place-self-end text-xl">${total}</p>
          </div>
        </div>
      </div>
      <PaymentModal isPaymentModalOpen={isPaymentModalOpen} setIsPaymentModalOpen={setIsPaymentModalOpen} />
    </div>
  );
};

export default ReceiptTotal;
