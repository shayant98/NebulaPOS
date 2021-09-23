import axios from "axios";

export const getCustomerByCard = async ({ queryKey }) => {
  try {
    const number = queryKey[1];
    if (number === null) {
      return [];
    }

    console.log(number);
    const res = await axios.get(`/api/customers/loyalty/${number}`);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addCreditToCard = async ({ total, number }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(`/api/customers/loyalty/${number}`, { total }, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};