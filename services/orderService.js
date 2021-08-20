import axios from "axios";

export const createOrder = async (receipt) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.post(`/api/orders`, receipt, config);
  return data;
};
