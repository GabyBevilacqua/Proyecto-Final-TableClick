import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

const ResetPassword = () => {
    const { encoded_token } = useParams();  // Extraemos el token URL-safe desde la URL
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(""); // Para los mensajes 
    const [error, setError] = useState(""); // Para los errores
    const navigate = useNavigate(); 

    // Con este metodo, cojo el token de la URL-safe y la convierto otra vez en base64 para extraer la informacion de vuelta
    useEffect(() => {
        if (encoded_token) {
            const base64 = encoded_token
                .replace(/-/g, '+')  // Reemplazar "-" por "+"
                .replace(/_/g, '/'); // Reemplazar "_" por "/"
                    // Se reemplazan de vuelta porque suelen fallar en la url
            try {
                // Decodificar el token desde Base64
                const decodedToken = atob(base64);  // atob decodifica un string base64, pero no me funciona
                console.log("Decoded token:", decodedToken);
                // Aquí puedes usar decodedToken para obtener los datos que necesites
            } catch (error) {
                console.error("Error al decodificar el token", error);
                setError("Token no válido");
            }
        }
    }, [encoded_token]);
    const alertPassword = () => { alert("Contraseña cambiada") 
        navigate("/") } 
    //Aqui vamos con el codigo de la reset password
    const handleResetPassword = async (event) => {
        event.preventDefault();
        
        if (!newPassword || !confirmPassword) {
            alert("RELLENE LOS 2 CAMPOS ANTES DE DARLE AL BOTON!!");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("LAS CONTRASEÑAS NO COINCIDEN!!.");
            return;
        }
        //Hacemos un fetch post con la url del back-end con el endpoint correcto y el metodo POST
        try {
            const response = await fetch(`${process.env.BACKEND_URL}reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    // Authorization: `Bearer ${encoded_token}`,  // Usamos el token de la URL, importante la autorizacion con el token
                },
                // Definimos que es lo que queremos recibir en formato JSON
                //IMPORTANTE!! Tienen que coincidir aqui y en el back-end
                body: JSON.stringify({
                    password: newPassword,
                    confirmPassword: confirmPassword,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("CONTRASEÑA CAMBIADA CON EXITO");
                navigate("/login");  // Redirigir al inicio de sesión
            } else {
                console.log("ERROR CON EL FLUJO", data);
            }
        } catch (error) {
            alert("Error al restablecer la contraseña.");
            console.error("Error en el código", error);
        }
    };

    return (
        <div>
            <div className="container containerRegister text-white d-flex flex-column align-items-center justify-content-center">
                <h1>Restableciendo Contraseña</h1>
                <form
                    className="d-flex flex-column align-items-center justify-content-center"
                    // onSubmit={handleResetPassword}
                >
                    <div className="row mb-3 align-items-center mt-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-end">
                            Contraseña:
                        </label>
                        <div className="col-md-8">
                            <input
                                type="password"
                                className="form-control inputStyle"
                                id="password"
                                placeholder="Repita su nueva contraseña"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        <label htmlFor="confirm-password" className="col-md-4 col-form-label mt-3 text-end">
                            Repetir contraseña:
                        </label>
                        <div className="col-md-8">
                            <input
                                type="password"
                                className="form-control inputStyle mt-3"
                                id="confirmPassword"
                                placeholder="Ingrese de nuevo la contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className="button1"
                    type="button"
                    onClick={alertPassword }
                    >
                        Restablecer Contraseña
                    </button>
                </form>
                {/* {error && <div className="alert alert-danger mt-3">{error}</div>} */}
                {message && <div className="alert alert-success mt-3">{message}</div>}
            </div>
        </div>
    );
};

export default ResetPassword;
