import { useState } from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import FormContainer from "../../../components/FormContainer/FormContainer";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select/Select";
import SelectOption from "../../../components/SelectOption/SelectOption";

const LoginForm = ({ csrfToken, stores }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  return (
    <div className="bg-gray-900 p-5  shadow-xl rounded-xl ">
      <FormContainer method="post" action="/api/auth/callback/credentials" buttonTitle="Sign in">
        <input name="csrfToken" type="hidden" value={csrfToken} />
        <input name="store" type="hidden" value={selectedStore.id} />
        <Select
          currentlySelectedTitle={`${selectedStore.name} - ${selectedStore.city}`}
          selectedValue={selectedStore}
          setSelectedValue={setSelectedStore}
          SelectOptions={stores.map((store, index) => {
            return <SelectOption value={store} index={index} selectedValue={selectedStore} label={`${store.id} -  ${store.name} ${store.city}`} />;
          })}
        />
        <Input name="username" icon={<AiOutlineUser size={24} />} placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <Input name="password" icon={<AiOutlineLock size={24} />} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </FormContainer>
    </div>
  );
};

export default LoginForm;
