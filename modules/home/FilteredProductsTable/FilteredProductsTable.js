import { Dialog, Transition } from "@headlessui/react";
import Input from "../../../components/input/Input";
import { Fragment } from "react";
import Image from "next/image";
import Table from "../../../components/Table/Table";

const FilteredProductsTable = ({ visible, setVisible, products, inputValue, setInputValue, onClick, handleFilter }) => {
  const columns = [
    { name: "Image", accessor: "image", type: "image" },
    { name: "Name", accessor: "name" },
    { name: "Price", accessor: "price" },
    { name: "Category", accessor: "category.name" },
    { name: "", accessor: "", type: "button", action: onClick },
  ];

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-visible" onClose={(e) => setVisible(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div className={`bg-white dark:bg-gray-900 dark:text-white fixed top-1/4 md:inset-x-10 2xl:inset-x-1/4 p-5  rounded-xl`}>
          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
            Payment Screen
          </Dialog.Title>
          <Input placeholder="Zoek naar producten" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => handleFilter(e.target.value)} />
          <div className="mt-2">
            {products.length > 0 && <Table columns={columns} data={products} />}
            {products.length == 0 && <p className="text-center mt-10 font-bold text-3xl">Please enter a search query</p>}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilteredProductsTable;
