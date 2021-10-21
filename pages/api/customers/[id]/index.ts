import { NextApiRequest, NextApiResponse } from "next";

const prisma = db;


export default (req:NextApiRequest, res:NextApiResponse) => {

   switch (req.method) {
     case "PUT":
      updateCustomer(req, res);
       break;
     case "DELETE":
      deleteCustomer(req, res);
      break;
  }


}



function updateCustomer(req: NextApiRequest, res: NextApiResponse<any>) {
  throw new Error('Function not implemented.');
}

async function deleteCustomer(req: NextApiRequest, res: NextApiResponse<any>) {
  const id = parseInt(req.query.id as string)

  try {
     await prisma.customers.delete({
    where: {
    id: id
       }
     })
    res.status(200).json({ message: "Customer successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Customer could not be deleted" });
    console.log(error);
  }
}