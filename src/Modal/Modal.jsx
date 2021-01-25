import React, { useState } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, outcome, userCount, compCount }) => {
  const [message, setMessage] = useState("");
  if (!open) return null;

  console.log("GAME OUTCOME", outcome);

  if (outcome === "You won!") {
    setMessage("Congrats on showing the comp who's boss around here");
  } else if(outcome === "You lost...") {
      setMessage("Go back to that mirror and get some practice in")
  }

  return ReactDom.createPortal(
    <>
      <div className="overlaydis" />
      <div className="modal-container">
        <h3>{outcome}</h3>

        <p>
          {message}
        </p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
