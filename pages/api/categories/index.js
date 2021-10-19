import db from "../../../utils/db";

const prisma = db;

const getAllCategories = async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  res.status(200).json(categories);
};

export default getAllCategories;
