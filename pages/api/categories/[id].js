import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategoryById = async ({ query: { id } }, res) => {
  const category = await prisma.category.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      products: true,
    },
  });
  res.status(200).json(category);
};

export default getCategoryById;
