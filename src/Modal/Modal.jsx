import React, {useState} from 'react';
import "./Modal.css"

const Modal = ({open, children}) => {
if(!open) return null;

    return (
        <div className="modal-container">
            <h3>content</h3>
            <button>Close Modal</button>
        </div>
    );
};

export default Modal;