import axios from "axios";

export const createOrder = async ({ receipt, type }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(`/api/orders`, { receipt, type }, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};

export const getOrderByOrderNr = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    if (id === null) {
      return [];
    }
    const res = await axios.get(`/api/orders/${id}`);
    console.log(res.data);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
