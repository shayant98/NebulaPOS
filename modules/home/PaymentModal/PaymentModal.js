import { Dialog } from "@headlessui/react";
import React from "react";

import { BsCreditCard, BsPhone } from "react-icons/bs";
import { FaMoneyBill, FaRegMoneyBillAlt } from "react-icons/fa";
import { useMutation } from "react-query";
import { createOrder } from "../../../services/orderService";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { useReceipt } from "../../../context/ReceiptContext";

const PaymentModal = ({ isPaymentModalOpen, setIsPaymentModalOpen, total }) => {
  const { receipt, clearReceipt } = useReceipt();

  const createOrderMut = useMutation(createOrder);

  const handlePayment = (type) => {
    createOrderMut.mutate(
      { receipt, type },
      {
        onSuccess: (data) => {
          setIsPaymentModalOpen(false);
          clearReceipt();
          toast.success(`Order #${data.order_nr} submitted.`);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <Dialog open={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)}>
      <div className="">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div className={`bg-white dark:bg-gray-900 dark:text-white fixed top-1/4 md:inset-x-10 2xl:inset-x-1/4 p-5  rounded-xl`}>
          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
            Payment Screen
          </Dialog.Title>
          <div className="grid grid-cols-2 divide-x divide-gray-200 gap-3">
            <div className="mt-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">Loyalty Card?</h2>
                <p className="w-full break-words">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus augue, vehicula in leo vel, ornare venenatis lacus. Praesent diam ipsum, imperdiet a lobortis
                  eget, porttitor non justo.
                </p>
              </div>
              <Input icon={<BsCreditCard className="text-gray-400" size={24} />} placeholder="###-####-####" type="number" />
              <button className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer">
                <div className="flex space-x-4">
                  <span>Check</span>
                </div>
              </button>
            </div>
            <div className=" p-5">
              <div>
                <h2 className="text-6xl">
                  Your total is: <span className="font-bold">${receipt.total}</span>
                </h2>
              </div>
              <p className="mt-20 text-2xl">Payment options:</p>
              <ul>
                <li>
                  <button
                    onClick={() => handlePayment("cash")}
                    className=" bg-green-100 ring-2 ring-offset-2 ring-green-500  border  border-transparent  w-1/2 py-3 px-5 mt-4 ml-auto text-green-900 font-semibold rounded-lg hover:shadow-lg hover:bg-green-400  transition duration-3000 cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <FaRegMoneyBillAlt size={24} />
                      <span>Mope</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePayment("debit")}
                    className=" bg-green-100 ring-2 ring-offset-2 ring-green-500  border  border-transparent  w-1/2 py-3 px-5 mt-4 ml-auto text-green-900 font-semibold rounded-lg hover:shadow-lg  hover:bg-green-400 transition duration-3000 cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <BsCreditCard size={24} />
                      <span>Debit Card</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePayment("mope")}
                    className=" bg-yellow-100 ring-2 ring-offset-2 ring-yellow-500   border  border-transparent  w-1/2 py-3 px-5 mt-4 ml-auto text-yellow-900 font-semibold rounded-lg hover:shadow-lg  hover:bg-yellow-400 transition duration-3000 cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <BsPhone size={24} />
                      <span>Mope</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePayment("uni5pay")}
                    className=" bg-red-100 ring-2 ring-offset-2 ring-red-500 border  border-transparent w-1/2 py-3 px-5 mt-4 ml-auto text-red-900 font-semibold rounded-lg hover:shadow-lg hover:bg-red-400  transition duration-3000 cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <BsPhone size={24} />
                      <span>Uni5Pay</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
