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
     case "PUT":
      updateCustomer(req, res);
       break;
     case "DELETE":
      deleteCustomer(req, res);
      break;
  }


}

async function getCustomers(req: NextApiRequest, res: NextApiResponse<any>) {
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


function createCustomer(req: NextApiRequest, res: NextApiResponse<any>) {
  throw new Error('Function not implemented.');
}
function updateCustomer(req: NextApiRequest, res: NextApiResponse<any>) {
  throw new Error('Function not implemented.');
}

function deleteCustomer(req: NextApiRequest, res: NextApiResponse<any>) {
  throw new Error('Function not implemented.');
}
