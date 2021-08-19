import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const post = await prisma.post.create({
    data: {
      title: "test",
      body: "test body",
    },
  });
  console.log(post);
};

main();
