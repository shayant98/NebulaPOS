import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import PageContainer from "../components/PageContainer/PageContainer";
import { getOrderByOrderNr } from "../services/orderService";
import { PrismaClient } from "@prisma/client";
import RefundTable from "../modules/refund/RefundTable/RefundTable";
import RefundForm from "../modules/refund/RefundForm/RefundForm";

const refund = ({ refundTypes }) => {
  const [orderNr, setOrderNr] = useState("");
  const { data, refetch, isLoading, error } = useQuery(["order", orderNr], getOrderByOrderNr, { refetchOnWindowFocus: false, enabled: false });

  const handleOrderSearch = (e) => {
    e.preventDefault();
    if (orderNr === "") {
      toast.error("Please enter an order number!");
      return;
    }
    refetch();
  };

  if (error) {
    toast.error(error.message);
  }

  const handleCreateRefund = () => {};

  return (
    <PageContainer>
      <div className="flex justify-center items-center">
        <div className="p-5 w-1/2 bg-gray-700 dark:bg-gray-900 dark:text-white shadow rounded-xl">
          <RefundForm orderNr={orderNr} setOrderNr={setOrderNr} handleSubmit={handleOrderSearch} />
          {isLoading ? (
            <div className="mt-10 flex justify-center">
              <h3 className="text-3xl font-bold">Loading</h3>
            </div>
          ) : data?.order_products.length < 1 ? (
            <div className="mt-10 flex justify-center">
              <h3 className="text-3xl font-bold">No Products Found</h3>
            </div>
          ) : (
            <RefundTable products={data?.order_products} />
          )}
          {/* <div className="flex">
            {refundTypes.map((type) => (
              <label class="inline-flex items-center mt-3">
                <input type="radio" class="form-radio h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">{type.type}</span>
              </label>
            ))}
          </div> */}
          <button
            type="button"
            onClick={handleCreateRefund}
            className=" bg-green-600 ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
          >
            Refund
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export const getServerSideProps = async (ctx) => {
  const prisma = new PrismaClient();

  const refundTypes = await prisma.refundTypes.findMany();
  prisma.$disconnect;

  return {
    props: {
      refundTypes,
    },
  };
};

export default refund;
