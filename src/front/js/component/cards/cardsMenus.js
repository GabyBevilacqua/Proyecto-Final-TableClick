import React, { useState } from "react";
import { ModalMenu } from "../modals/modalMenu";
import { Link } from "react-router-dom";

const CardMenu = ({ menu, onEdit, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSaveEdit = (menuData) => {
        onEdit(menu.id, menuData.menuName);
        setShowModal(false);
    };

    return (
        <div className="card mt-2" style={{ backgroundColor: "#677a9c" }}>
            <div className="card-body menusViewCard">
                {/* <a className="card-title cardTitleMenusView text-center text-white">
                    {menuName}
                </a> */}
                <Link to="/menuItems">
                    <span className="card-title cardTitleMenusView text-white">{menu.menuName}</span>
                </Link>
                <div className="d-flex flex-column">
                    <button
                        className="button2 m-2"
                        onClick={() => setShowModal(true)}
                    >
                        Editar
                    </button>
                    <button
                        className="button3 m-2"
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

