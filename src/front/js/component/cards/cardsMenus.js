import React, { useState } from "react";
import { ModalMenu } from "../modals/modalMenu";

const CardMenu = ({ menu, onEdit, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSaveEdit = (menuData) => {
        onEdit(menu.id, menuData.menuName);
        setShowModal(false); 
    };

    return (
        <div className="card mt-2" style={{backgroundColor:"#677a9c"}}>
            <div className="card-body menusViewCard">
                <h5 className="card-title text-center text-white">{menu.menuName}</h5>
                    <div className="d-flex flex-column">
                    <button
                        className="btn btn-warning m-2"
                        onClick={() => setShowModal(true)}
                    >
                        Editar
                    </button>
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => onDelete(menu.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
            <ModalMenu
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveEdit}
                initialMenuData={{
                    menuName: menu.menuName,
                }}
            />
        </div>
    );
};

export default CardMenu;

