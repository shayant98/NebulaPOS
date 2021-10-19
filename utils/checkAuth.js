import { getSession } from "next-auth/client";

const checkAuth = async (context) => {
  const session = await getSession(context);
  return session;
};

export default checkAuth;
