import PageContainer from "../components/PageContainer/PageContainer";
import superjson from "superjson";
import TodayRevenueCard from "../modules/rapports/TodayRevenueCard/TodayRevenueCard";
import TodayOrdersCard from "../modules/rapports/TodayOrdersCard/TodayOrdersCard";

import OrdersListCard from "../modules/rapports/OrdersListCard/OrdersListCard";
// import BestSellingCard from "../modules/rapports/BestSellingCard/BestSellingCard";
import TodayTotalDiscountCard from "../modules/rapports/TodayTotalDiscountCard/TodayTotalDiscountCard";
import { format, startOfToday, startOfTomorrow, startOfYesterday } from "date-fns";
import db from "../utils/db";
import { getSession } from "next-auth/client";

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
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const prisma = db;
  const today = new Date(format(startOfToday(), "yyyy/MM/dd"));
  const tommorow = new Date(format(startOfTomorrow(), "yyyy/MM/dd"));
  const yesterday = new Date(format(startOfYesterday(), "yyyy/MM/dd"));

  const ordersToday = await prisma.orders.findMany({
    where: {
      date: {
        gte: today,
        lte: tommorow,
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
        gte: today,
        lte: tommorow,
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
        gte: yesterday,
        lte: today,
      },
    },
  });
  const totalDiscountToday = await prisma.orders.aggregate({
    _sum: {
      order_discount: true,
    },
    where: {
      date: {
        gte: today,
        lte: tommorow,
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
