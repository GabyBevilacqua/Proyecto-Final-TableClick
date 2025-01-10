import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

//formulario de entrada para admin con su codigo o para las tables

export const SecLogin = () => {

    return (
        <div className="text-center mt-5">
            <h2>
                esta donde se da entrada al administrador o a la tablet de la mesa
            </h2>
            <Link to="/">
                <span className="text  m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/menusView">
                <span className="text  m-5">
                    Go to menusView
                </span>
            </Link>
            <Link to="/tableMenu">
                <span className="text">
                    Go to tableMenu
                </span>
            </Link>

        </div>

    );
};