import axios from "axios";




export const getCustomers = async ({ queryKey }): Promise<ICustomer[]> => {
  try {
    const page = queryKey[1];
    const filter = queryKey[2];

    const res = await axios.get(`/api/customers?page=${page}&filter=${filter}`);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCustomerByCard = async ({ queryKey }): Promise<ICustomer> => {
  try {
    const number = queryKey[1];
    if (number === null) {
      return null;
    }
    const res = await axios.get(`/api/customers/loyalty/${number}`);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addCreditToCard = async ({ loyaltyNumber }: { loyaltyNumber: number}): Promise<ICustomer> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(`/api/customers/loyalty/${loyaltyNumber}`, {  }, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};
