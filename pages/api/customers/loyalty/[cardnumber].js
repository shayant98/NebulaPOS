import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "GET") {
    getCustomerByCardNumber(req, res);
  }
  if (req.method === "PUT") {
    addCreditToCustomerCard(req, res);
  }
};

const getCustomerByCardNumber = async ({ query: { cardnumber } }, res) => {
  const customer = await prisma.customers.findFirst({
    where: {
      loyalty_number: cardnumber,
    },
  });

  res.status(200).json(customer);
};

const addCreditToCustomerCard = async (req, res) => {
  const currentCredit = await prisma.customers.findFirst({
    select: {
      loyalty_credit: true,
    },
    where: {
      loyalty_number: req.query.cardnumber,
    },
  });
  console.log(currentCredit);
  const updateUser = await prisma.customers.update({
    where: {
      loyalty_number: req.query.cardnumber,
    },
    data: {
      loyalty_credit: Number(req.body.credit + currentCredit.loyalty_credit).toFixed(2),
    },
  });

  res.status(200).json(updateUser);
};

export default handler;
