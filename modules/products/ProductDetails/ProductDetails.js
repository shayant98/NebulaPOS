import React, { useEffect, useState } from "react";
import { AiOutlineShop, AiOutlineTag, AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import Input from "../../../components/input/Input";
import { deleteProductById, getProductById, updateProductById } from "../../../services/productService";
const ProductDetails = ({ product }) => {
  const [editMode, seteditMode] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0.0);
  const [qty, setQty] = useState(1);
  const { data, isLoading, refetch, remove } = useQuery(["product", product], getProductById);

  const updateMut = useMutation(updateProductById);
  const deleteMut = useMutation(deleteProductById);

  useEffect(() => {
    if (editMode) {
      setName(data.name);
      setDesc(data.description);
      setPrice(data.price);
      setQty(data.quantity);
    }
  }, [editMode]);

  const handleEditPressed = () => {
    if (!editMode) {
      seteditMode(true);
      return;
    }
    if (name === data.name && desc === data.description && price === data.price && qty === data.quantity) {
      seteditMode(false);
      return;
    }
    updateMut.mutate(
      { id: product, name, description: desc, price, qty },
      {
        onSuccess: (data) => {
          seteditMode(false);
          refetch();
          toast.success(`${data.name} successfully modified.`);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  const handleDeletePressed = () => {
    deleteMut.mutate(product, {
      onSuccess: (data) => {
        product = null;
        remove();
      },
    });
  };

  console.log(data);
  return (
    <div>
      {isLoading ? (
        <div className="mt-10 flex justify-center">
          <h3 className="text-3xl font-bold">Loading</h3>
        </div>
      ) : product === null || hideDetails ? (
        <div className="mt-10 flex justify-center">
          <h3 className="text-3xl font-bold">Please Choose a product</h3>
        </div>
      ) : (
        <div className={`bg-gray-100 dark:bg-gray-900 flex-none  p-5 rounded-xl shadow`}>
          <div className="flex justify-between">
            {editMode ? <Input value={name} onChange={(e) => setName(e.target.value)} /> : <h2 className="text-4xl font-extrabold">{data.name}</h2>}

            <div className="flex">
              <div className="bg-red-400 p-3 rounded-l shadow-xl transform hover:scale-105 duration-100 cursor-pointer" onClick={handleDeletePressed}>
                <AiOutlineDelete size={24} />
              </div>
              <div
                className={`${editMode ? "bg-green-400" : "bg-yellow-400"} p-3 rounded-r shadow-xl transform hover:scale-105 duration-100 cursor-pointer`}
                onClick={handleEditPressed}
              >
                {editMode ? <AiOutlineCheck size={24} /> : <AiOutlineEdit size={24} />}
              </div>
            </div>
          </div>
          <hr className="mt-3 rounded opacity-50"></hr>
          <div className="mt-3 space-y-2">
            <h2 className="text-xl">Description</h2>
            {editMode ? (
              <Input varient="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} />
            ) : (
              <p className="text-sm h-64 overflow-hidden overflow-y-scroll" dangerouslySetInnerHTML={{ __html: data.description }}></p>
            )}
          </div>
          <div className="mt-3">
            <h2 className="text-xl font-medium">Properties</h2>
            <div className="mt-3">
              {editMode ? (
                <Input icon={<AiOutlineTag size={24} />} type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              ) : (
                <div className="flex bg-gray-100 text-black p-4 w-1/2 rounded-t-lg space-x-4">
                  <AiOutlineTag size={24} /> <span>${data.price}</span>
                </div>
              )}

              {editMode ? (
                <Input icon={<AiOutlineShop size={24} />} type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
              ) : (
                <div className="flex bg-gray-100 text-black p-4 w-1/2 rounded-b-lg space-x-4">
                  <AiOutlineShop size={24} /> <span>{data.quantity}</span>
                </div>
              )}

              <div className="grid grid-cols-2 mt-10 gap-x-4">
                <div className="flex justify-between">
                  <h5 className="text-lg font-bold">Brand</h5>
                  <h5 className="text-lg">{data.Brands.name}</h5>
                </div>
                <div className="flex justify-between">
                  <h5 className="text-lg font-bold">SKU</h5>
                  <h5 className="text-lg">{data.id}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
