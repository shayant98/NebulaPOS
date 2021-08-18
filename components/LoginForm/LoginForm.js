import React from "react";
import FormContainer from "../FormContainer/FormContainer";
import Input from "../input/Input";

const LoginForm = () => {
  return (
    <div className="flex flex-col bg-white rounded p-10">
      <h1 className="text-2xl justify-center items-center">NebulaPOS</h1>
      <hr></hr>
      <FormContainer>
        <Input title="Gebruikersnaam" placeholder="Vul aub uw gebruikersnaam in" />
        <Input title="Wachtwoord" placeholder="Vul aub uw wachtwoord in" type="password" />
      </FormContainer>
    </div>
  );
};

export default LoginForm;
