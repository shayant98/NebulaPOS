import { PrismaClient } from "@prisma/client";
import PageContainer from "../components/PageContainer/PageContainer";
import superjson from "superjson";
import TodayRevenueCard from "../modules/orders/TodayRevenueCard/TodayRevenueCard";
import TodayOrdersCard from "../modules/orders/TodayOrdersCard/TodayOrdersCard";

import OrdersListCard from "../modules/orders/OrdersListCard/OrdersListCard";
import BestSellingCard from "../modules/orders/BestSellingCard/BestSellingCard";
import TodayTotalDiscountCard from "../modules/orders/TodayTotalDiscountCard/TodayTotalDiscountCard";

function orders({ totalOrdersToday, totalOrdersYesterday, ordersToday, totalDiscountToday }) {
  console.log(totalDiscountToday);
  return (
    <PageContainer>
      <div className="grid grid-cols-6 grid-flow-row  gap-4 p-10">
        <TodayRevenueCard todayRevenue={totalOrdersToday._sum.order_total} yesterdayRevenue={totalOrdersYesterday._sum.order_total} />
        <TodayOrdersCard todayOrders={totalOrdersToday._count.order_nr} yesterdayOrders={totalOrdersYesterday._count.order_nr} />
        <OrdersListCard orders={ordersToday} />
        <TodayTotalDiscountCard total={totalDiscountToday._sum.order_discount} />
      </div>
    </PageContainer>
  );
}
export async function getServerSideProps(ctx) {
  const prisma = new PrismaClient();
  const nowDate = new Date();
  const nextDay = new Date().setDate(nowDate.getDate() + 1);
  const prevDay = new Date().setDate(nowDate.getDate() - 2);
  const ordersToday = await prisma.orders.findMany({
    where: {
      date: {
        gte: new Date(nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate()),
        lte: new Date(nextDay),
      },
    },
    include: {
      order_products: true,
    },
    take: 5,
  });
  const totalOrdersToday = await prisma.orders.aggregate({
    _count: {
      order_nr: true,
    },
    _sum: {
      order_total: true,
    },
    where: {
      date: {
        gte: new Date(nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate()),
        lte: new Date(nextDay),
      },
    },
  });
  const totalOrdersYesterday = await prisma.orders.aggregate({
    _count: {
      order_nr: true,
    },
    _sum: {
      order_total: true,
    },
    where: {
      date: {
        lte: new Date(nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate()),
        gte: new Date(prevDay),
      },
    },
  });
  const totalDiscountToday = await prisma.orders.aggregate({
    _sum: {
      order_discount: true,
    },
    where: {
      date: {
        gte: new Date(nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate()),
        lte: new Date(nextDay),
      },

      order_discount: {
        gt: 0,
      },
    },
  });

  prisma.$disconnect;

  const { json } = superjson.serialize(ordersToday);
  return {
    props: {
      ordersToday: json,
      totalOrdersToday,
      totalOrdersYesterday,
      totalDiscountToday,
    },
  };
}

export default orders;
