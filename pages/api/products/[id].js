import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProductById = async ({ query: { id } }, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
    },
  });
  res.status(200).json(product);
};

export default getProductById;
