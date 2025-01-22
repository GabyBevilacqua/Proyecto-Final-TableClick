import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/restRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { ModalImg } from "../component/modals/modalImg";

// aqui se usaria el modalImg.js para el logo del rest si nos da tiempo de implementarlo
//formulario : Nombre personal, Nombre del rest, direccion, telefono, mail, crear contraseña, crear codigo admin   -- y logo con su modal si nos da tiempo --

export const RestRegister = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nombrePersonal: "",
        username: "",
        nombreRestaurante: "",
        direccion: "",
        telefono: "",
        email: "",
        password: "",
        codigoAdmin: "",
        image: ""
    });

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await actions.registerUser(formData); // Asume que devuelve `true` o lanza error
            if (success) {
                alert("Usuario creado con éxito, inicia sesion");
                navigate("/");
            }
        } catch (error) {
            // Mostrar el mensaje de error del servidor
            alert(error.message || "Error al registrar el usuario");
        }
    };

    return (
        <div className="container mt-2">
            <div className="text mt-2">
                <Link to="/">
                    <button className="btn m-2">
                        Return to preLogin
                    </button>
                </Link>
                <Link to="/menusView">
                    <button className="btn">
                        Go to menusView
                    </button>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-md-8 form-container containerRegister mt-5">
                        <h2 className="text-center mb-4">Formulario de Registro</h2>
                        {/*error && <div className="alert alert-danger">{error}</div>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="nombrePersonal" className="col-md-4 col-form-label text-end">
                                    Nombre personal:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="nombrePersonal"
                                        placeholder="Ingrese su nombre"
                                        value={formData.nombrePersonal}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="username" className="col-md-4 col-form-label text-end">
                                    Nombre de usuario:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="username"
                                        placeholder="Ingrese nombre de usuario"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="nombreRestaurante" className="col-md-4 col-form-label text-end">
                                    Nombre del restaurante:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="nombreRestaurante"
                                        placeholder="Nombre del restaurante"
                                        value={formData.nombreRestaurante}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="direccion" className="col-md-4 col-form-label text-end">
                                    Dirección del restaurante:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="direccion"
                                        placeholder="Dirección"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="telefono" className="col-md-4 col-form-label text-end">
                                    Teléfono:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="tel"
                                        className="form-control inputStyle"
                                        id="telefono"
                                        placeholder="Teléfono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="email" className="col-md-4 col-form-label text-end">
                                    Email:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="email"
                                        className="form-control inputStyle"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="contrasena" className="col-md-4 col-form-label text-end">
                                    Crear contraseña:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="password"
                                        className="form-control inputStyle"
                                        id="password"
                                        placeholder="Ingrese la contraseña"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="codigoAdmin" className="col-md-4 col-form-label text-end">
                                    Crear código administración:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="codigoAdmin"
                                        placeholder="Código admin"
                                        value={formData.codigoAdmin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label htmlFor="image" className="col-md-4 col-form-label text-end">
                                    Imagen:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control inputStyle"
                                        id="image"
                                        placeholder="Imagen"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                    />
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
                                    Guardar
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