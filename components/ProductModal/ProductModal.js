import { Dialog } from "@headlessui/react";
import { useTheme } from "../../context/ThemeProvider";
import Input from "../input/Input";
import ProductTable from "../ProductTable/ProductTable";

const ProductModal = ({ showProductModal, setshowProductModal, currentCategory }) => {
  const { isDarkMode } = useTheme();

  return (
    <Dialog open={showProductModal} onClose={() => setshowProductModal(false)} className="fixed inset-0 overflow-y-auto">
      <div className={`flex items-center justify-center h-full `}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />

        <div className={`w-1/2 h-1/2 overflow-auto overflow-y-auto p-5 z-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"} rounded-xl`}>
          <Dialog.Title className="text-xl font-bold">Deactivate account</Dialog.Title>
          <Input placeholder="Zoek naar producten" />
          <ProductTable category={currentCategory} />
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
