import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserByUsername = async ({ query: { username } }, res) => {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });
  res.status(200).json(user);
};

export default getUserByUsername;
