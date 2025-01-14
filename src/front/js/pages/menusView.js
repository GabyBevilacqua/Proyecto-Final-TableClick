import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalMenu } from "../component/modals/modalMenu";
import CardMenu from "../component/cards/cardsMenus";

export const MenusView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menus, setMenus] = useState([]); // Estado para almacenar los menús creados
    const [menuToSave, setMenuToSave] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSaveMenu = (menuData) => {
        setMenus([menuData, ...menus]); // Añade el nuevo menú al estado
        closeModal();
    };

    useEffect(() => {
        if (menuToSave) {
            // Si hay un menú para guardar, lo agregamos al inicio
            setMenus([menuToSave, ...menus]);
            setMenuToSave(null); // Reiniciamos el estado después de guardarlo
            closeModal(); // Cerramos el modal después de guardar
        }
    }, [menuToSave, menus]);

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
            <div className="container">
                <div className="row">
                    {menus.map((menu, index) => (
                        <div className="col-md-3" key={index}>
                            <CardMenu menu={menu} />
                        </div>
                    ))}
                    <div className="col-md-3">
                        <div className="card menu-container text-center">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <button onClick={openModal} className="btn button1 btn-primary w-100">
                                    Crear Menú
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalMenu isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveMenu} />
        </div>
    );
};
