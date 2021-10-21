import db from '@utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = db;

export default (req:NextApiRequest, res:NextApiResponse) => {

   switch (req.method) {
    case "GET":
      getCustomers(req, res);
      break;
    case "POST":
      createCustomer(req, res);
       break;
  }


}

async function getCustomers(req: NextApiRequest, res: NextApiResponse<any>): Promise<void> {
  const selectedPage = parseInt(req.query.page as string)
  const filter: string = req.query.filter as string
  const customersPerPage: number = parseInt(req.query.take as string) | 5

  let customers = []
  try {
    if (filter === "") {
       customers = await prisma.customers.findMany({
    take: customersPerPage,
    skip: (selectedPage - 1)  * customersPerPage
    })
    } else {
        customers = await prisma.customers.findMany({
        take: customersPerPage,
         where: {
               OR: [
      {
        name: {
          contains: filter
        },
      },
      {
        surname: {
          contains: filter
        },
             },
      {
        email: {
          contains: filter
        },
      },
    ],
        }
        })

    }

    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({message: "Unable to get customers"})
  }



}


async function createCustomer(req: NextApiRequest, res: NextApiResponse<any>): Promise<void> {
  const body: ICustomer = req.body;

    try {
    const customer = await prisma.customers.create({
      data: {
        name: body.name,
        surname: body.surname,
        email: body.email,
        birthday: body.birthday,
        loyalty_credit: 0,
        loyalty_number: "111-111-111"
      },
    });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Customer could not be inserted" });
    console.log(error);
  }
}
