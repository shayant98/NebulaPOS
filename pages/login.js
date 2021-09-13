import { getCsrfToken, getSession } from "next-auth/client";
import LoginForm from "../modules/Login/LoginForm/LoginForm";

const login = ({ csrfToken }) => {
  return (
    <div className="w-screen h-screen dark:bg-gray-700  ">
      <div className="flex justify-center items-center w-full h-full">
        <LoginForm csrfToken={csrfToken} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    props: {
      session: null,
      csrfToken: (await getCsrfToken(context)) ?? null,
    },
  };
}

export default login;
