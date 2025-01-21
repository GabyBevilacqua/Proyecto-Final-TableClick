import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
//import "../../styles/restRegister.css";
//import { Link, useNavigate } from "react-router-dom";

export const ModalImg = ({ onClose }) => {
    const { store, actions } = useContext(Context);


    const handleImageUp = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        actions.uploadImageUser(file);

    }

    return (

        <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalImgLabel">Cargar imagen o logo del restaurante</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}>
                        </button>
                    </div>
                    <div className="modal-body" style={{ backgroundColor: "#7297B4", color: "#F4F0D1" }}>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Subir archivo:</label>
                            <input 
                            className="form-control" 
                            type="file" 
                            id="formFile"
                            onChange={handleImageUp} 
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="button2"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};