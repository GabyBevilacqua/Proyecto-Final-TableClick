import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const params = useParams()
    console.log(params)
    console.log(atob(params.token))

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = async (event) => {
        event.preventDefault();
        
        if (!newPassword || !confirmPassword){
            alert("RELLENE LOS 2 CAMPOS ANTES DE DARLE AL BOTON")
            return
        }

        if (newPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    password: newPassword,
                    confirmPassword: confirmPassword,
                }),
            });
            
            const data = await response.json()
            if (response.ok) {
                console.log(data);
                alert("CONTRASEÑA CAMBIADA CON EXITO")
                navigate("/login"); // Redirigir al inicio de sesión
            }
            else {
                console.log("ERROR CON EL FLUJO", data)
            }
        } catch (error) {
            alert("Error al restablecer la contraseña.");
            console.error("error en el codigo", error);
        }
    };

    return (
        <div className="container text-white d-flex flex-column align-items-center justify-content-center">
            <h1>restableciendo contraseña</h1>
            <form
                className="d-flex flex-column align-items-center justify-content-center"
                onSubmit={handleResetPassword}
            >
                <div className="row mb-3 align-items-center">
                    <label htmlFor="password" className="col-md-4 col-form-label text-end">
                        Contraseña:
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control inputStyle"
                            id="password"
                            placeholder="Repita su nueva contraseña"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <label htmlFor="confirm-password" className="col-md-4 col-form-label text-end">
                        Repetir contraseña:
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control inputStyle"
                            id="confirmPassword"
                            placeholder="Ingrese de nuevo la contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button className="button1" type="submit">
                    Restablecer Contraseña
                </button>
            </form>
        </div>
    )
}

export default ResetPassword;