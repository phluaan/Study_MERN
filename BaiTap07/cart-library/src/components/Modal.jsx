import React from "react";
import "../styles/cart.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button className="btn btn-danger" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};

export default Modal;
