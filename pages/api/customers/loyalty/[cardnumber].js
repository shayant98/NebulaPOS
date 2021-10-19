import db from "../../../utils/db";

const prisma = db;

const handler = async (req, res) => {
  if (req.method === "GET") {
    getCustomerByCardNumber(req, res);
  }
  if (req.method === "PUT") {
    addCreditToCustomerCard(req, res);
  }
};

const getCustomerByCardNumber = async ({ query: { cardnumber } }, res) => {
  try {
    const customer = await prisma.customers.findFirst({
      where: {
        loyalty_number: cardnumber,
      },
      include: {
        CreditLog: true,
      },
    });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Unable to find customer" });
  }
};

const addCreditToCustomerCard = async (req, res) => {
  const currentCredit = await prisma.customers.findFirst({
    select: {
      loyalty_credit: true,
      birthday: true,
    },
    where: {
      loyalty_number: req.query.cardnumber,
    },
  });

  let creditMultiplier = 0.1;
  if (isBirthday(new Date(currentCredit.birthday))) {
    creditMultiplier = 0.25;
  }
  const credit = Number(req.body.total * creditMultiplier).toFixed(2);
  const newTotal = Number(credit) + currentCredit.loyalty_credit;
  try {
    const updatedCustomer = await prisma.customers.update({
      where: {
        loyalty_number: req.query.cardnumber,
      },
      data: {
        loyalty_credit: Number(newTotal),
      },
    });

    const addLog = await prisma.creditLog.create({
      data: {
        customer_id: updatedCustomer.id,
      },
    });

    return res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Unable to add credit" });
  }
};

const isBirthday = (date) => {
  const today = new Date();

  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth();
};

export default handler;
