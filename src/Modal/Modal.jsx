import React, { useState } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, outcome, userCount, compCount }) => {
  if (!open) return null;

  console.log("GAME OUTCOME", outcome);

  return ReactDom.createPortal(
    <>
      <div className="overlaydis" />
      <div className="modal-container">
        <h3>{outcome.title}</h3>
        <hr/>
        <p>{outcome.message}</p>
        <button className="mod-btn" onClick={onClose}>
          Play again
        </button>{" "}
        <button
          className="mod-btn"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
