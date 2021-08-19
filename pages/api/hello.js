// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

main();
export default function helloAPI(req, res) {
  const post = await prisma.post.create({
    data: {
      title: "test",
      body: "test body",
    },
  });
  console.log(post);
  res.status(200).json(post);
}
