import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RequestPasswordReset = () => {
    const params = useParams();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/request-reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
                Authorization: `Bearer ${params.encoded_token}`, 
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setError(data.message || "Error al enviar el correo.");
            }
        } catch (err) {
            setError("Hubo un problema con la solicitud.");
        }
    };

    return (
        <div>
            <div className="container containerRegister">
                <h2>Recuperar Contraseña</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="button2 btn-primary">
                        Enviar enlace de recuperación
                    </button>
                </form>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
};

export default RequestPasswordReset;
