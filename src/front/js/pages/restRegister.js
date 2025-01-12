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
                    <div className="col-md-8 form-container containerRegister">
                        <h2 className="text-center">Formulario de Registro</h2>
                        <form>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="nombrePersonal" className="col-md-4 col-form-label text-end">
                                    Nombre personal:
                                </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="nombrePersonal" placeholder="Ingrese su nombre" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="nombreRestaurante" className="col-md-4 col-form-label text-end">
                                    Nombre del restaurante:
                                </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="nombreRestaurante" placeholder="Nombre del restaurante" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="direccionRestaurante" className="col-md-4 col-form-label text-end">
                                    Dirección del restaurante:
                                </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="direccionRestaurante" placeholder="Dirección" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="telefono" className="col-md-4 col-form-label text-end">Teléfono:</label>
                                <div className="col-md-8">
                                    <input type="tel" className="form-control" id="telefono" placeholder="Teléfono" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="email" className="col-md-4 col-form-label text-end">Email:</label>
                                <div className="col-md-8">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="contrasena" className="col-md-4 col-form-label text-end">
                                    Crear contraseña:
                                </label>
                                <div className="col-md-8">
                                    <input type="password" className="form-control" id="contrasena" placeholder="Contraseña" />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="codigoAdmin" className="col-md-4 col-form-label text-end">
                                    Crear código administración:
                                </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="codigoAdmin" placeholder="Código admin" />
                                </div>
                            </div>

                            
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="subirArchivo" className="col-md-4 col-form-label text-end">
                                    Cargar imagen o logo del restaurante:
                                </label>
                                <div className="col-md-8 d-flex">
                                    <button
                                        id="subirArchivo"
                                        type="button"
                                        className="button2"
                                        onClick={handleOpenModal}
                                    >
                                        Subir archivo
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                            <button type="submit"
                                className="button2 w-100">
                                Salvar
                            </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
                {/* Modal Component */}
                {showModal && <ModalImg onClose={handleCloseModal} />}
            </div>
        </div>
    );
};