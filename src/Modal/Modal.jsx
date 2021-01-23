import React, { useState } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, outcome, userCount, compCount }) => {
  if (!open) return null;

  return ReactDom.createPortal (
    <>
    <div className="overlaydis"/>
      <div className="modal-container">
        <h3>{outcome}</h3>

        <p>user:{userCount} vs comp: {compCount}</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
