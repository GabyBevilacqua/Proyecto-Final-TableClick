import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const RestRegister = () => {
    const navigate = useNavigate()

    return (
        <div className="text-center mt-5">
            <h2>
                esta es la pagina para registrar el restaurante
            </h2>
            <Link to="/">
                <span className="text  m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/menuRegister">
                <span className="text">
                    Go to menuRegister
                </span>
            </Link>

        </div>

    );

};