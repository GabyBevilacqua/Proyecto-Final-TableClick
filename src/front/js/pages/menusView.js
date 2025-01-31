import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalMenu } from "../component/modals/modalMenu";
import { ModalImg } from "../component/modals/modalImg";
import CardMenu from "../component/cards/cardsMenus";
import "../../styles/menusView.css";

export const MenusView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menus, setMenus] = useState([{ id: 1, menuName: "Carta Principal" }]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSaveMenu = (menuData) => {
        setMenus((prevMenus) => [menuData, ...prevMenus]);
        closeModal();
    };

    const handleEditMenu = (id, newName) => {
        const updatedMenus = menus.map(menu =>
            menu.id === id ? { ...menu, menuName: newName } : menu
        );
        setMenus(updatedMenus);
    }

    const handleDeleteMenu = (id) => {
        const filteredMenus = menus.filter(menu => menu.id !== id);
        setMenus(filteredMenus);
    };

    return (
        <div>
            <div className="container mt-5 mb-5 text-white text-center">
                <h1 id="menus-creados">Cartas y Menús</h1>
            </div>

            <div className="container col-8 menu-grid">
                <div className="row contView g-4 d-flex justify-content-center">
                    {menus.length === 0 ? (
                        <div className="col-8">
                            <div className="alert alert-warning text-center" role="alert">
                                No hay menús creados aún. ¡Crea uno ahora!
                            </div>
                        </div>
                    ) : (
                        menus.map((menu) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={menu.id}>
                                <CardMenu
                                    menu={menu}
                                    type="button"
                                   
                                    onEdit={handleEditMenu}
                                    onDelete={handleDeleteMenu}
                                />
                            </div>
                        ))
                    )}
                    <div className="col-lg-3 col-md-4 col-sm-6 h-100">
                        <div className="card menu-container text-center">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <p>Presione el botón si desea crear un nuevo menú.</p>
                                <button
                                    onClick={openModal}
                                    className="button2 col-11"
                                >
                                    Crear Menú
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 h-100">
                        <div className="card menu-container text-center">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <p>Por favor, haga clic en el botón para cargar la imagen o el logotipo de su restaurante.</p>
                                <button
                                    id="subirArchivo"
                                    type="button"
                                    onClick={handleOpenModal}
                                    className="button2 col-11"
                                >
                                    Subir imagen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalMenu isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveMenu} />

            {showModal && <ModalImg onClose={handleCloseModal} />}

        </div>
    );
};
