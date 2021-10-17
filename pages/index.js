import { PrismaClient } from "@prisma/client";
import { useState, Fragment } from "react";
import ProductModel from "../modules/home/ProductModal/ProductModal";
import PageContainer from "../components/PageContainer/PageContainer";
import { getSession } from "next-auth/client";
import Categories from "../modules/home/Categories/Categories";
import Receipt from "../modules/home/Receipt/Receipt";
import Input from "../components/input/Input";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/productService";
import { Dialog, Transition } from "@headlessui/react";
import FilteredProductsTable from "../modules/home/FilteredProductsTable/FilteredProductsTable";
import { useReceipt } from "../context/ReceiptContext";

const home = ({ categories }) => {
  const { data: products } = useQuery("products", getAllProducts, { initialData: [] });

  const { addItem } = useReceipt();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [showProductModal, setshowProductModal] = useState(false);
  const [showSearchbox, setShowSearchbox] = useState(false);
  const [filterInput, setFilterInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (value) => {
    if (value.length === 0) {
      setFilteredProducts(products);
    } else {
      setShowSearchbox(true);
      const filterProduct = products.filter((product) => product.name.toLowerCase().includes(filterInput));
      setFilteredProducts(filterProduct);
    }
  };

  const handleProductSelect = (product) => {
    const receiptItem = { id: product.id, name: product.name, price: product.price };
    addItem(receiptItem);
  };

  return (
    <PageContainer>
      <ProductModel setshowProductModal={setshowProductModal} showProductModal={showProductModal} currentCategory={currentCategory} />

      <div className="grid md:grid-cols-8 2xl:grid-cols-12">
        <div className="md:col-span-6 2xl:col-span-8">
          <Input placeholder="Zoek naar producten" value={filterInput} onChange={(e) => setFilterInput(e.target.value)} onKeyPress={(e) => handleFilter(e.target.value)} />
          <Categories categories={categories} setCurrentCategory={setCurrentCategory} setshowProductModal={setshowProductModal} />
        </div>
        <Receipt />
        <FilteredProductsTable
          products={filteredProducts}
          visible={showSearchbox}
          setVisible={setShowSearchbox}
          inputValue={filterInput}
          setInputValue={setFilterInput}
          handleFilter={handleFilter}
          onClick={handleProductSelect}
        />
      </div>
    </PageContainer>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      image: true,
    },
  });
  prisma.$disconnect;
  return {
    props: { categories },
  };
}

export default home;
