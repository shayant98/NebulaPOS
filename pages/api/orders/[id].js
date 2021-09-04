import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "GET") {
    getOrderByOrderNr(req.query.id, res);
  }
};

const getOrderByOrderNr = async (id, res) => {
  const order = await prisma.orders.findFirst({
    where: {
      order_nr: id,
    },
    include: {
      order_products: {
        include: {
          product: true,
        },
      },
    },
  });
  res.status(200).json(order);
};

export default handler;
