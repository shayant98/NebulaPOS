import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "GET") {
    getProductById(req, res);
  }
  if (req.method === "PUT") {
    updateProduct(req, res);
  }
  if (req.method === "DELETE") {
    deleteProduct(req, res);
  }
};

const getProductById = async ({ query: { id } }, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
      Brands: true,
    },
  });
  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const body = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        price: Number(body.price),
        description: body.description,
        quantity: Number(body.qty),
      },
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
};

const deleteProduct = async ({ query: { id } }, res) => {
  try {
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
    console.log(error);
  }
};
export default handler;
