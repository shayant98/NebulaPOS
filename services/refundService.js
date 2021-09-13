import axios from "axios";

export const createRefund = async ({ refund, type }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(`/api/refund`, { refund, type }, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};
