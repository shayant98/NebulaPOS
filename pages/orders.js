import { PrismaClient } from "@prisma/client";
import PageContainer from "../components/PageContainer/PageContainer";

function orders({ orders }) {
  return <PageContainer></PageContainer>;
}
export async function getServerSideProps(ctx) {
  const prisma = new PrismaClient();

  const orders = await prisma.orders.findMany();
  prisma.$disconnect;

  return {
    props: {
      data: { orders },
    },
  };
}

export default orders;
