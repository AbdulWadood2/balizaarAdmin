import React from "react";

const Modal = ({ children }) => {
  return (
    <section className="w-screen h-screen fixed top-0 left-0 z-[1001] flex justify-center items-center bg-black bg-opacity-50">
      {children}
    </section>
  );
};

export default Modal;
