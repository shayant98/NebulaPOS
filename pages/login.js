import LoginForm from "../components/LoginForm/LoginForm";

const login = () => {
  return (
    <div className="w-screen h-screen bg-red-400 ">
      <div className="flex justify-center items-center w-full h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
