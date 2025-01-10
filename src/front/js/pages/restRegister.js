import React, { useContext, useEffect, useState } from "react";
//import { Context } from "../store/appContext";
import "../../styles/restRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { ModalImg } from "../component/modals/modalImg";

// aqui se usaria el modalImg.js para el logo del rest si nos da tiempo de implementarlo
//formulario : Nombre personal, Nombre del rest, direccion, telefono, mail, crear contraseña, crear codigo admin   -- y logo con su modal si nos da tiempo --

export const RestRegister = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container">
            <div className="text mt-2">
                <Link to="/">
                    <span className="text  m-5">
                        Return to preLogin
                    </span>
                </Link>
                <Link to="/menusView">
                    <span className="text">
                        Go to menusView
                    </span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-md-6 form-container">
                        <h2 className="text-center">Formulario de Registro</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombrePersonal" className="form-label">Nombre personal:</label>
                                <input type="text" className="form-control" id="nombrePersonal" placeholder="Ingrese su nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombreRestaurante" className="form-label">Nombre del restaurante:</label>
                                <input type="text" className="form-control" id="nombreRestaurante" placeholder="Nombre del restaurante" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccionRestaurante" className="form-label">Dirección del restaurante:</label>
                                <input type="text" className="form-control" id="direccionRestaurante" placeholder="Dirección" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono:</label>
                                <input type="tel" className="form-control" id="telefono" placeholder="Teléfono" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contrasena" className="form-label">Crear contraseña:</label>
                                <input type="password" className="form-control" id="contrasena" placeholder="Contraseña" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="codigoAdmin" className="form-label">Crear código admin:</label>
                                <input type="text" className="form-control" id="codigoAdmin" placeholder="Código admin" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cargar imagen o logo del restaurante:</label>
                                <button
                                    type="button"
                                    className="btn btn-custom"
                                    onClick={handleOpenModal}
                                >
                                    Subir archivo
                                </button>
                            </div>
                            <button type="submit" className="btn btn-custom w-100">
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
                {/* Modal Component */}
                {showModal && <ModalImg onClose={handleCloseModal} />}
            </div>
        </div>
    );
};