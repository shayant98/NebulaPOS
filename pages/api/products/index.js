import db from "../../../utils/db";

const prisma = db;

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      category: { select: { name: true } },
    },
  });
  prisma.$disconnect;
  res.status(200).json(products);
};

export default getAllProducts;
