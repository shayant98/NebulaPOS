import axios from "axios";

export const getProducts = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    const res = await axios.get(`/api/categories/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
