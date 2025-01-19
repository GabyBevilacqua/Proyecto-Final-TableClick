import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalMenu } from "../component/modals/modalMenu";
import CardMenu from "../component/cards/cardsMenus";

export const MenusView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menus, setMenus] = useState([{ id: 1, menuName: "Menu Principal" }]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
            <div className="text-center mt-5 text-white">
                <h2>Aquí se crean y se ven los menús creados</h2>
                <Link to="/">
                    <span className="text m-5">Return to preLogin</span>
                </Link>
                <Link to="/menuItems">
                    <span className="text m-5">Go to menuItems</span>
                </Link>
                <Link to="/secLogin">
                    <span className="text">Regresar</span>
                </Link>
            </div>
            <div className="container mt-4 text-white">
                <h1 id="menus-creados">Menús Creados</h1>
            </div>
            <div className="container menuCreate">
                <ul className="list-unstyled row">
                    {menus.length === 0 ? (
                        <li className="col-12">
                            <div className="alert alert-warning text-center" role="alert">
                                No hay menús creados aún. ¡Crea uno ahora!
                            </div>
                        </li>
                    ) : (
                        menus.map((menu) => (
                            <li className="col-md-3">
                                <CardMenu
                                    menu={menu}
                                    onEdit={handleEditMenu}
                                    onDelete={handleDeleteMenu}
                                />
                            </li>
                        ))
                    )}
                    <li className="col-md-3">
                        <div className="card menu-container text-center">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <button
                                    onClick={openModal}
                                    className="btn button1 btn-primary"
                                >
                                    Crear Menú
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ModalMenu isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveMenu} />
        </div>
    );
};
