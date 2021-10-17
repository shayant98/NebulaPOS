import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import ProductModel from "../modules/home/ProductModal/ProductModal";
import PageContainer from "../components/PageContainer/PageContainer";
import { getSession } from "next-auth/client";
import Categories from "../modules/home/Categories/Categories";
import Receipt from "../modules/home/Receipt/Receipt";
import Input from "../components/input/Input";

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

const home = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showProductModal, setshowProductModal] = useState(false);

  return (
    <PageContainer>
      <ProductModel setshowProductModal={setshowProductModal} showProductModal={showProductModal} currentCategory={currentCategory} />

      <div className="grid md:grid-cols-8 2xl:grid-cols-12">
        <div className="md:col-span-6 2xl:col-span-8">
          <Input placeholder="Zoek naar producten" />
          <Categories categories={categories} setCurrentCategory={setCurrentCategory} setshowProductModal={setshowProductModal} />
        </div>
        <Receipt />
      </div>
    </PageContainer>
  );
};

export default home;
