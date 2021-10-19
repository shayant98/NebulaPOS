import { PrismaClient } from ".prisma/client";
import { getCsrfToken, getSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import LoginForm from "../modules/Login/LoginForm/LoginForm";
import db from "../utils/db";

const login = ({ csrfToken, stores }) => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.error) {
      toast.error(query.error);
    }
  }, [query]);

  return (
    <div className="dark:bg-gray-700  ">
      {/* <div className="flex justify-center items-center w-full h-full"></div> */}
      <div className="grid grid-cols-2 h-screen  content-center">
        <div className="bg-green-500 h-screen"></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white mb-10 text-6xl">
            Welcome to <strong>NebulaPOS</strong>
          </h1>
          <LoginForm csrfToken={csrfToken} stores={stores} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  const prisma = db;

  if (session && res) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  const stores = await prisma.stores.findMany({});
  prisma.$disconnect;

  return {
    props: {
      session: null,
      csrfToken: (await getCsrfToken(context)) ?? null,
      stores,
    },
  };
}

export default login;
