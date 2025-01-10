import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

//la primera vez solo se ve el boton "crear menu" que da acceso al modalMenu.js
//luego se ven los menus creados para acceder o borrar, o crear menu.
//se usa la cardsMenu.js

export const MenusView = () => {

    return (
        <div className="text-center mt-5">
            <h2>
                aqui se crea y se ven los menus creados
            </h2>
            <Link to="/">
                <span className="text  m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/menuItems">
                <span className="text  m-5">
                    Go to menuItems
                </span>
            </Link>
            <Link to="/secLogin">
                <span className="text">
                    Regresar
                </span>
            </Link>
        </div>
    );
};
