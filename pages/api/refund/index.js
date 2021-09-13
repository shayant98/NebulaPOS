import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "GET") {
    createRefund(req, res);
  }
};

const createRefund = (req, res) => {
  const body = req.body;
  //   const productArray = body.receipt.receiptItems.map((item) => {
  //     return { product_id: item.id, qty: item.qty };
  //   });
  console.log(body);
  //   try {
  //     const order = await prisma.refunds.create({
  //       data: {
  //         payment_type: body.type,
  //         item_total: body.receipt.subTotal,
  //         order_total: body.receipt.subTotal,
  //         order_tax: body.receipt.tax,
  //         order_products: {
  //           createMany: {
  //             data: productArray,
  //           },
  //         },
  //       },
  //     });
  //     res.status(200).json(order);
  //   } catch (error) {
  //     res.status(500).json({ error: "Order could not be inserted" });
  //     console.log(error);
  //   }
};

export default handler;
