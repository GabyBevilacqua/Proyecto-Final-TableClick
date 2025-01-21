import React from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const params = useParams()
    console.log(params)

    return (
        <div className="container text-white d-flex flex-column align-items-center justify-content-center">
            <h1>restableciendo contraseña</h1>
            <form className="d-flex flex-column align-items-center justify-content-center">
                <div className="row mb-3 align-items-center">
                    <label htmlFor="password" className="col-md-4 col-form-label text-end">
                        Contraseña:
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control inputStyle"
                            id="password"
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                    <label htmlFor="password" className="col-md-4 col-form-label text-end">
                        Repetir contraseña:
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control inputStyle"
                            id="confirm-password"
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                </div>
                <button className="button1">
                    Restablecer Contraseña
                </button>
            </form>
        </div>
    )
}

export default ResetPassword;