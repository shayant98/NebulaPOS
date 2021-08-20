import React from "react";
import { useOverlay } from "../../context/ModalContext";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "../input/Input";

const Overlay = ({ children }) => {
  const { overlay, toggleOverlay } = useOverlay();

  return <div className="flex w-full h-full absolute bg-black z-10 bg-opacity-80">{children}</div>;
};

export default Overlay;
