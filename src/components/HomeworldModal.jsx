import React from 'react'
import ReactDOM from 'react-dom';


const HomeworldModal = ({ isOpen, onClose, data }) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}>
            </div>
            <div className="modal">
                <h2>Planet info</h2>
                <div className="modal-item">
                    <span>Name:</span>
                    <p>{data.name}</p>
                </div>
                <div className="modal-item">
                    <span>Diameter:</span>
                    <p>{data.diameter}</p>
                </div>
                <div className="modal-item">
                    <span>Climate:</span>
                    <p>{data.climate}</p>
                </div>
                <div className="modal-item">
                    <span>Population:</span>
                    <p>{data.population}</p>
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div></>,
        document.getElementById('modal-root')
    );
};

export default HomeworldModal
