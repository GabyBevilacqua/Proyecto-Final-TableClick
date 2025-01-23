import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";

export const ModalTable = () => {
    const { actions } = useContext(Context); // Acceso a las acciones del store
    const [tableName, setTableName] = useState("");

    const handleInputChange = (event) => {
        setTableName(event.target.value);
    };

    const handleSave = () => {
        if (tableName.trim() === "") {
            alert("Por favor, ingresa un nombre para la mesa.");
            return;
        }

        actions.addTable(tableName); // Llama a la acción del flux para añadir la mesa
        setTableName("");

        if (window.bootstrap) {
            const modal = document.getElementById("exampleModal");
            const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
            bootstrapModal.hide();
        }
    };

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content cardItemsModal text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            AÑADIR MESA
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text inputModalItems" id="inputGroup-sizing-default">
                                Nombre
                            </span>
                            <input
                                type="text"
                                className="form-control inputModalItems"
                                value={tableName}
                                onChange={handleInputChange}
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleSave} className="button4">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};