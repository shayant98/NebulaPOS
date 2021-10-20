import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";
import Table from "../../../components/Table/Table";
import { useReceipt } from "../../../context/ReceiptContext";
import { getProducts } from "../../../services/productService";

const ProductModal = ({ showProductModal, setshowProductModal, currentCategory }) => {
  const { data, isLoading, error } = useQuery(["products", currentCategory], getProducts);
  const { addItem } = useReceipt();

  const handleRowOnClick = (row) => {
    const receiptItem = { id: row.id, name: row.name, price: row.price };
    addItem(receiptItem);
  };

  const columns = [
    { name: "Image", accessor: "image", type: "image" },
    { name: "Name", accessor: "name" },
    { name: "Description", accessor: "description" },
    { name: "Price", accessor: "price" },
    { name: "QTY", accessor: "quantity" },
    { name: "", accessor: "", type: "button", action: handleRowOnClick },
  ];

  return (
    <Dialog open={showProductModal} onClose={() => setshowProductModal(false)} className="fixed inset-0 overflow-y-auto">
      <div className={`flex items-center justify-center h-full `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <button className="h-0 w-0 overflow-hidden" />
        <div className={`w-1/2 h-3/4 overflow-auto scrollbar-hide p-5 z-20 bg-white dark:bg-gray-700 dark:text-white rounded-xl`}>
          <Dialog.Title className="text-xl font-bold">Products - {isLoading ? "" : data.name}</Dialog.Title>
          {isLoading && <p className="text-center mt-10 font-bold text-3xl">Loading</p>}
          {data?.products.length > 0 && <Table columns={columns} data={data.products} />}
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
