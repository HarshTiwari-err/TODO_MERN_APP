import React from "react";
import { ToastContainer } from "react-toastify";

export const toaststyle = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  pauseOnFocusLoss:false,
  theme: "light",
};

const ContainToast = () => {
  return <ToastContainer />;
};

export default ContainToast;
