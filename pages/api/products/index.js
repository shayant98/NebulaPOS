import db from "../../../utils/db";

const prisma = db;

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    where: req.query.search
      ? {
          name: {
            contains: req.query.search,
          },
        }
      : {},
    include: {
      category: { select: { name: true } },
    },
    take: 4,
  });
  res.status(200).json(products);
};

export default getAllProducts;
