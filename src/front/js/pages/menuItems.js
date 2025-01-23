import React, { useState } from "react";
import "../../styles/menuItems.css";
import "../../styles/home.css";
import { CardsItem3 } from "../component/cards/cardsItem3";
import { ModalItems } from "../component/modals/modalItems";
import { CardsTable } from "../component/cards/cardsTables";
import { ModalTable } from "../component/modals/modalTables";

export const MenuItems = () => {
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando
    const [headerText, setHeaderText] = useState("CARTA PRINCIPAL"); // Estado para el contenido del h5

    const handleEditClick = () => {
        setIsEditing(true); // Cambiar a modo edición
    };

    const handleInputChange = (e) => {
        setHeaderText(e.target.value); // Actualizar el texto del h5
    };

    const handleBlur = () => {
        setIsEditing(false); // Salir del modo edición al perder el foco
    };

    return (
        <div className="bodyMenuItens">
            <div className="container d-flex justify-content-center">
                {isEditing ? (
                    <input
                        type="text"
                        value={headerText}
                        onChange={handleInputChange} // Actualizar el estado con el valor del input
                        onBlur={handleBlur} // Salir del modo edición al perder el foco
                        className="tituloNombreMenu text-white m-3 p-3"
                        autoFocus
                    />
                ) : (
                    <h3 className="tituloNombreMenu text-white m-3 p-3">
                        {headerText}
                    </h3>
                )}
                <button
                    className="edit-button mt-4"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(); // Cambiar a modo de edición
                    }}
                >
                    <svg className="edit-svgIcon" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                </button>
            </div>
            <CardsTable />
            <ModalTable />
            <CardsItem3 />
            <ModalItems />
        </div>
    );
};