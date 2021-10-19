import db from "../../../utils/db";

const prisma = db;

const handler = async (req, res) => {
  if (req.method === "POST") {
    createOrder(req, res);
  }
};

const createOrder = async (req, res) => {
  const body = req.body;
  const productArray = body.receipt.receiptItems.map((item) => {
    return { product_id: item.id, qty: item.qty };
  });
  console.log(body.receipt);
  try {
    const order = await prisma.orders.create({
      data: {
        payment_type: body.type,
        item_total: body.receipt.subTotal,
        order_total: parseFloat(body.receipt.total),
        order_tax: body.receipt.tax,
        order_discount: body.receipt.discount,
        order_discount_type: body.receipt.discountType == "" ? "NONE" : body.receipt.discountType,
        order_products: {
          createMany: {
            data: productArray,
          },
        },
      },
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Order could not be inserted" });
    console.log(error);
  }
};

export default handler;
