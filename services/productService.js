import axios from "axios";

export const getProducts = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    if (id === null) {
      return { products: [] };
    }
    const res = await axios.get(`/api/categories/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductById = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    if (id === null) {
      return [];
    }
    const res = await axios.get(`/api/products/${id}`);
    console.log(res.data);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProductById = async (product) => {
  console.log(product);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(`/api/products/${product.id}`, product, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};

export const deleteProductById = async (product) => {
  console.log(product);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`/api/products/${product}`, config);
    return data;
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message;
    throw new Error(message);
  }
};
