import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { useQuery } from "react-query";
import db from "@utils/db";

import ProductModel from "@modules/home/ProductModal/ProductModal";
import PageContainer from "@components/PageContainer/PageContainer";
import Categories from "@modules/home/Categories/Categories";
import Receipt from "@modules/home/Receipt/Receipt";
import FilteredProductsTable from "@modules/home/FilteredProductsTable/FilteredProductsTable";
import Input from "@components/input/Input";
import { getAllProducts } from "@services/productService";
import { useReceipt } from "../context/ReceiptContext";

const home = ({ categories }: HomeProps) => {
  const { addItem } = useReceipt();
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showProductModal, setshowProductModal] = useState(false);
  const [showSearchbox, setShowSearchbox] = useState(false);
  const [filterInput, setFilterInput] = useState("");
  const { data: products, refetch } = useQuery(["products", filterInput], getAllProducts, { initialData: [] });
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = async (value: string) => {
    const { data } = await refetch();
    setFilteredProducts(data);
    if (value.length === 0) {
      setFilteredProducts([]);
      setShowSearchbox(false);
    } else {
      setShowSearchbox(true);
    }
  };

  const handleProductSelect = (product: IProduct) => {
    const receiptItem = { id: product.id, name: product.name, price: product.price };
    addItem(receiptItem);
  };

  return (
    <PageContainer>
      <ProductModel setshowProductModal={setshowProductModal} showProductModal={showProductModal} currentCategory={currentCategory} />

      <div className="grid md:grid-cols-8 2xl:grid-cols-12">
        <div className="md:col-span-6 2xl:col-span-8">
          <Input
            placeholder="Zoek naar producten"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            onKeyPress={async (e) => {
              await handleFilter(e.target.value);
            }}
          />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const prisma = db;

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      image: true,
    },
  });
  return {
    props: { categories },
  };
}


interface HomeProps {
  categories: ICategory[]
}

export default home;
