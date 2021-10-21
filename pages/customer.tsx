import PageContainer from "@components/PageContainer/PageContainer";
import Table from "@components/Table/Table";
import Card from "@components/Card/Card";
import superjson from "superjson";

import db from "@utils/db";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { useQuery } from "react-query";
import { useState } from "react";
import { getCustomers } from "@services/customerService";
import CustomersTable from "@modules/customers/CustomersTable/CustomersTable";

const customers = ({ customers , pages}: CCustomerProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState<string>("")
    const {data} = useQuery(["customer",currentPage, filter], getCustomers, {initialData: customers})
    const handleEditClick = () => {

    }


    const handleDeleteClick = () => {

    }




      const columns: TableColumn[] = [
    { name: "Name", accessor: "name" },
    { name: "Surname", accessor: "surname" },
    { name: "E-mail", accessor: "email" },
    { name: "Birthday", accessor: "birthday" },
    { name: "Card Number", accessor: "loyalty_number" },
    { name: "available Credit", accessor: "loyalty_credit" },
    { name: "EDIT", accessor: "", type: "button",varient: "warning" ,action: handleEditClick },
    { name: "DELETE", accessor: "", type: "button",varient: "error", action: handleDeleteClick },
      ];

    return (
        <PageContainer title="Customers">
            <CustomersTable columns={columns} data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} filter={filter} setFilter={setFilter}/>
        </PageContainer>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

    const prisma = db;

    const data = await prisma.customers.findMany({take:5})
    const pages = await prisma.customers.count() / 5

    const { json: customers } = superjson.serialize(data);


    return {
        props: {
            customers,
            pages
        },
  };
}


interface CCustomerProps {
    customers: ICustomer[]
    pages: number

}


export default customers;