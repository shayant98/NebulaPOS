import { Dialog, Transition } from "@headlessui/react";
import Input from "../../../components/input/Input";
import { Fragment } from "react";

const FilteredProductsTable = ({ visible, setVisible, products, inputValue, setInputValue, onClick, handleFilter }) => {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={(e) => setVisible(false)}>
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
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-green-500 hover:bg-opacity-25 hover:rounded">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={product.image} alt="Product Image" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap font=bold">$ {product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.category.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.category.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button type="button" onClick={() => onClick(product)} className="text-green-600 cursor-pointer">
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilteredProductsTable;
