import PageContainer from "@components/PageContainer/PageContainer";
import FormContainer from "@components/FormContainer/FormContainer";
import { useState } from "react";
import { useMutation } from "react-query";
import { createCustomer } from "@services/customerService";
import { startOfToday } from "date-fns";
import Input from "@components/input/Input";
import { AiOutlineCalendar, AiOutlineMail, AiOutlineRedEnvelope, AiOutlineUser } from "react-icons/ai";
import Card from "@components/Card/Card";

const newCustomerForm = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState<string>("")
    const mutation = useMutation(createCustomer)

    const handleSubmit = (): void => {
        const customer: ICustomer = {
            name,
            surname,
            email,
            birthday: new Date(birthday)
        }
        mutation.mutate(customer, {
            onSuccess: (data, variables) => {

            }
        },)
    }

    return (
        <PageContainer title="Add Customer">
            <div className="grid grid-cols-3">
                <Card>
                    <FormContainer onSubmit={handleSubmit} buttonTitle="Submit" buttonType="button" method="post">
                    <Input title="Name" icon={<AiOutlineUser className="text-gray-700" size={24}/>} placeholder="Enter a name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input title="Surname" icon={<AiOutlineUser className="text-gray-700" size={24}/>} placeholder="Enter a surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <Input type="email" title="E-mail" icon={<AiOutlineMail className="text-gray-700" size={24}/>} placeholder="Enter an email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input title="Birthday" icon={<AiOutlineCalendar className="text-gray-700" size={24}/>} varient="masked" mask="9999-99-99" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    </FormContainer>
                </Card>
            </div>
        </PageContainer>
    );
}

export default newCustomerForm;