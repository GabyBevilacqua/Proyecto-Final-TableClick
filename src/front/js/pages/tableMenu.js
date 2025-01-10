import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

// aqui estara el dropdown para hacer los pedidos

export const TableMenu = () => {

    return (

        <div className="text-center mt-5">
            <h2>
                Pagina de los comensales con el menu para pedir
            </h2>
            <Link to="/secLogin">
                <span className="text  m-5">
                    Return to secLogin
                </span>
            </Link>
        </div>

    );
};