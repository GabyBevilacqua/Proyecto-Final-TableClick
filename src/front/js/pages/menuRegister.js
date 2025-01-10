import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const MenuRegister = () => {


    return (

        <div className="text-center mt-5">
            <h2>
                esta es la pagina para crear el menu
            </h2>
            <Link to="/">
                <span className="text m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/restRegister">
                <span className="text">
                    Return to restaurant register
                </span>
            </Link>

        </div>

    );
};