import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    createOrder(req, res);
  }
};

const createOrder = async (req, res) => {
  const body = req.body;

  console.log(body);
  const order = await prisma.orders.create({
    data: {
      payment_type: "cash",
      order_products: {
        createMany: {
          data: [{ product_id: 1 }],
        },
      },
    },
  });
  console.log(order);
  res.status(200).json(order);
};

export default handler;
