import React, { useState } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal (
    <>
      <div className="modal-container">
        <h3>content</h3>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
