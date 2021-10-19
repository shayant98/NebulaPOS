import db from "../../../utils/db";

const prisma = db;

const getUserByUsername = async ({ query: { username } }, res) => {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });
  res.status(200).json(user);
};

export default getUserByUsername;
