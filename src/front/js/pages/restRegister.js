import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";


// aqui se usaria el modalImg.js para el logo del rest si nos da tiempo de implementarlo

//formulario : Nombre personal, Nombre del rest, direccion, telefono, mail, crear contraseña, crear codigo admin   -- y logo con su modal si nos da tiempo --


export const RestRegister = () => {
    const navigate = useNavigate()

    return (
        <div className="text-center mt-5">
            <h2>
                esta es la pagina con el formulario para registrar el restaurante
            </h2>
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

        </div>

    );

};