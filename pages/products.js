import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductsTable from "../components/ProductsTable/ProductsTable";

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({ select: { name: true, price: true, id: true } });
  prisma.$disconnect;

  return {
    props: { products }, // will be passed to the page component as props
  };
}

const produts = ({ products }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleRowOnClick = (row) => {
    setCurrentProduct(row.id);
  };
  return (
    <PageContainer>
      <div className="grid md:grid-cols-8 2xl:grid-cols-12">
        <div className="col-span-4 p-5">
          <h3 className="text-5xl pl-5 mt-10 ">Products</h3>
          <div className="pl-5">
            <ProductsTable products={products} onClick={handleRowOnClick} />
          </div>
        </div>
        <div className="col-span-8 p-5">
          <div className="p-5">
            <ProductDetails product={currentProduct} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default produts;
