import axios from "axios";

export const getCustomerByCard = async ({ queryKey }) => {
  try {
    const number = queryKey[1];
    if (number === null) {
      return [];
    }

    console.log(number);
    const res = await axios.get(`/api/customer/loyalty/${number}`);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
