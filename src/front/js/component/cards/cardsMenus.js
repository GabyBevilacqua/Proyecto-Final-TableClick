import React, { useState } from "react";
import { ModalMenu } from "../modals/modalMenu";
import { Link } from "react-router-dom";
import "../../../styles/menusView.css";

const CardMenu = ({ menu, onEdit, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSaveEdit = (menuData) => {
        onEdit(menu.id, menuData.menuName);
        setShowModal(false);
    };

    return (
        <div className="card " style={{ backgroundColor: "#7297B4" }}>
            <div className="card-body menusViewCard" style={{ backgroundColor: "#7297B4" }}>
                {/* <a className="card-title cardTitleMenusView text-center text-white">
                    {menuName}
                </a> */}
                <Link to="/menuItems">
                    <h3 className="card-title cardTitleMenusView text-center text-white">{menu.menuName}</h3>
                </Link>
                <div className="d-flex flex-column">
                    <Link to="/menuItems">
                        <button
                            className="button1 m-2 col-11"
                        >
                            Editar
                        </button>
                    </Link>
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

