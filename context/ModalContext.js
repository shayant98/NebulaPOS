import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
const ModalStateContext = createContext();

export function ModalProvider({ children }) {
  const [overlayIsVisible, setoverlayIsVisible] = useState(true);

  const toggleOverlay = (val) => {
    setoverlayIsVisible(val === undefined ? !overlayIsVisible : val);
    return overlayIsVisible;
  };

  return (
    <ModalContext.Provider value={overlayIsVisible}>
      <ModalStateContext.Provider value={toggleOverlay}>{children}</ModalStateContext.Provider>
    </ModalContext.Provider>
  );
}

export const useOverlay = () => {
  return { overlay: useContext(ModalContext), toggleOverlay: useContext(ModalStateContext) };
};
