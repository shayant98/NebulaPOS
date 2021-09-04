import LoginForm from "../components/LoginForm/LoginForm";
import { getCsrfToken, getSession } from "next-auth/client";
import Input from "../components/input/Input";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
const login = ({ csrfToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen dark:bg-gray-700  ">
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-gray-900 p-5 shadow-xl rounded-xl">
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Input name="username" icon={<AiOutlineUser size={24} />} placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
            <Input name="password" icon={<AiOutlineLock size={24} />} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button
              type="submit"
              className=" bg-black ring-2 hover:ring-4 ring-offset-2 ring-black border  border-transparent  py-3 px-5 mt-4 ml-auto text-white font-semibold rounded-lg hover:shadow-lg   transition duration-3000 cursor-pointer"
            >
              Sign in
            </button>
          </form>
        </div>
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
