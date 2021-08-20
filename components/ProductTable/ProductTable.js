import React from "react";
import { useQuery } from "react-query";
import { useReceipt } from "../../context/ReceiptContext";
import { useTheme } from "../../context/ThemeProvider";
import { getProducts } from "../../services/productService";

const ProductTable = ({ category }) => {
  const { addItem } = useReceipt();
  const { data, isLoading, error } = useQuery(["products", category], getProducts);
  const { isDarkMode } = useTheme();

  return (
    <>
      {isLoading ? (
        <div className="mt-10 flex justify-center">
          <h3 className="text-3xl font-bold">Loading...</h3>
        </div>
      ) : data.products.length === 0 ? (
        <div className="mt-10 flex justify-center">
          <h3 className="text-3xl font-bold">No Products Found</h3>
        </div>
      ) : (
        <table className={`min-w-full divide-y divide-gray-200 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                desc
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                price
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">QTY</span>
              </th>
            </tr>
          </thead>
          <tbody className={`${isDarkMode ? "bg-gray-900" : "bg-white"} divide-y divide-gray-200`}>
            {data.products.map((product, index) => (
              <tr className="cursor-pointer" onClick={() => addItem({ id: product.id, name: product.name, price: product.price })} key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProductTable;
