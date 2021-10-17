import { Dialog, Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { AiOutlineCheck, AiOutlineMail, AiOutlinePlusCircle, AiOutlineQrcode, AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import Input from "../../../components/input/Input";

const CardModal = ({ showModal, setShowModal, selectedGiftcard, customers }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)} className="fixed inset-0 overflow-y-auto">
      <div className={`flex items-center justify-center h-full `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <button className="h-0 w-0 overflow-hidden" />
        <div className={`h-1/2 overflow-auto overflow-y-auto p-8 z-20 bg-white dark:bg-gray-700 dark:text-white rounded-xl`}>
          <Dialog.Title className="text-6xl font-bold">
            Your selected a giftcard with: <span className="font-bold">${selectedGiftcard}</span>
          </Dialog.Title>
          <div className="mt-10">
            <p className="font-bold">Send Giftcard Digitally:</p>
          </div>
          <div className="flex items-center mt-5">
            <div className="flex flex-col">
              <Listbox value={selectedCustomer} onChange={setSelectedCustomer}>
                <Listbox.Button className="w-full py-2 pl-3 pr-10 text-left bg-white text-black rounded-lg shadow-md">
                  <span className="block truncate">
                    {selectedCustomer.name} {selectedCustomer.surname} - {selectedCustomer.email}
                  </span>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <Listbox.Options className=" w-full cursor-pointer mt-1 overflow-auto text-base bg-white text-black rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {customers.map((customer) => (
                      <Listbox.Option className={`px-2 py-2 text-black ${customer === selectedCustomer ? "bg-green-500 bg-opacity-25" : ""}`} key={customer.id} value={customer}>
                        <span className="flex items-center">
                          {customer === selectedCustomer ? <AiOutlineCheck className="mr-4 text-green-500" size={16} /> : <div className="mr-8"></div>} {customer.name}{" "}
                          {customer.surname} - {customer.email}
                        </span>
                      </Listbox.Option>
                    ))}
                    <Listbox.Option className="px-2 py-2  pl-8 text-green-500 font-bold hover:bg-green-500 hover:bg-opacity-25" key="new-cust" value="">
                      <Link href="/rapports" className="">
                        <span className="flex items-center">
                          {" "}
                          <AiOutlinePlusCircle size={16} className="mr-2" /> Create new customer
                        </span>
                      </Link>
                    </Listbox.Option>
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
            <div className="ml-5 py-2 px-4 bg-green-400 rounded-lg place-self-start">
              <AiOutlineSend fontWeight={700} size="24" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CardModal;
