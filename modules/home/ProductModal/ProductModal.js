import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";
import { useReceipt } from "../../../context/ReceiptContext";
import { getProducts } from "../../../services/productService";
import ProductsTable from "../../../components/ProductsTable/ProductsTable";

const ProductModal = ({ showProductModal, setshowProductModal, currentCategory }) => {
  const { data, isLoading, error } = useQuery(["products", currentCategory], getProducts);

  const { addItem } = useReceipt();

  const handleRowOnClick = (row) => {
    const receiptItem = { id: row.id, name: row.name, price: row.price };
    addItem(receiptItem);
  };

  return (
    <Dialog open={showProductModal} onClose={() => setshowProductModal(false)} className="fixed inset-0 overflow-y-auto">
      <div className={`flex items-center justify-center h-full `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <button className="h-0 w-0 overflow-hidden" />
        <div className={`w-1/2 h-1/2 overflow-auto overflow-y-auto p-5 z-20 bg-white dark:bg-gray-700 dark:text-white rounded-xl`}>
          <Dialog.Title className="text-xl font-bold">Products - {isLoading ? "" : data.name}</Dialog.Title>
          {isLoading ? (
            <div className="mt-10 flex justify-center">
              <h3 className="text-3xl font-bold">Loading...</h3>
            </div>
          ) : data.products.length === 0 ? (
            <div className="mt-10 flex justify-center">
              <h3 className="text-3xl font-bold">No Products Found</h3>
            </div>
          ) : (
            <ProductsTable products={data.products} onClick={handleRowOnClick} />
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
