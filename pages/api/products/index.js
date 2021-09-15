import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      product_variations: {
        include: {
          ProductDetails: true,
        },
      },
    },
  });
  res.status(200).json(products);
};

export default getAllProducts;
