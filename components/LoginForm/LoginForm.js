import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../FormContainer/FormContainer";
import Input from "../input/Input";
{
  useState;
}
const LoginForm = () => {
  const handleSignIn = async (data) => {
    e.preventdefault();
    console.log(data);
  };

  return (
    <div className="flex flex-col bg-white rounded p-10">
      <h1 className="text-2xl justify-center items-center">NebulaPOS</h1>
      <hr></hr>
    </div>
  );
};

export default LoginForm;
