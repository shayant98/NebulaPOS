import PageContainer from "@components/PageContainer/PageContainer";
import Table from "@components/Table/Table";
import Card from "@components/Card/Card";
import superjson from "superjson";

import db from "@utils/db";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { deleteCustomer, getCustomers } from "@services/customerService";
import CustomersTable from "@modules/customers/CustomersTable/CustomersTable";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "@components/Button/Button";
import Link from "next/link";
import { toast } from "react-toastify";

const customers = ({ customers , pages}: CCustomerProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState<string>("")
  const { data, refetch } = useQuery(["customer", currentPage, filter], getCustomers, { initialData: customers })
  const delMutation = useMutation(deleteCustomer)
    const handleEditClick = (customer: ICustomer) => {

    }


  const handleDeleteClick = (customer: ICustomer) => {
      console.log(123);

      delMutation.mutate(customer.id, {
        onSuccess: () => {
          refetch()
          toast.success("Successfully Deleted customer")
        },
        onError: (error) => {
          toast.error("Something went wrong during deletion")
        }
      })
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
        <a href='/customer/new'><Button type="button"><AiOutlinePlus size={24}/><span>Add new customer</span></Button></a>
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