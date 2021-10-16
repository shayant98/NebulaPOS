import React, { useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { useReceipt } from "../../../context/ReceiptContext";
import PaymentModal from "../PaymentModal/PaymentModal";

const ReceiptTotal = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [discountInput, setDiscountInput] = useState(0);
  const {
    receipt: { total, subTotal, tax, setDiscount, setDiscountType, calculateTotal, discount, totalWithoutDiscount },
  } = useReceipt();

  const handleDiscount = () => {
    setDiscountType("MANUAL");
    if (discountInput > 0) {
      setDiscount(discountInput);
    } else {
      setDiscount(0);
    }

    if (discount >= subTotal) {
      setDiscount(subTotal);
    }

    calculateTotal(totalWithoutDiscount);
  };
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
        <div className="  p-5 w-full ">
          <div className="grid grid-cols-2">
            <p className=" text-lg">Discount:</p>
            <div className="flex place-content-end">
              <Input
                onChange={(e) => setDiscountInput(e.target.value)}
                icon={<BsCreditCard className="text-gray-400" size={24} />}
                placeholder="Enter Discount ammount"
                type="disabled"
              />
              <div onClick={handleDiscount} className="ml-2 text-center rounded-lg bg-blue-500 p-4 text-xs flex justify-center place-items-center">
                <BsCreditCard className="text-white" size={24} />
              </div>
            </div>
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
