import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

// aqui al dar a cargar el producto se abre el modalItems.js y dentro de este modal al cargar imagen se abre el modalImg.js
// aqui al dar editar nombre de mesa se abre el modalTable.js

// aqui usamos cardsItem.js y cardsTable.js

export const MenuItems = () => {

    return (

        <div className="text-center mt-5">
            <h2>
                esta es la pagina para cargar los productos del menu
            </h2>
            <Link to="/">
                <span className="text m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/menusView">
                <span className="text  m-5">
                    Return to menusView
                </span>
            </Link>
            <Link to="/diningView">
                <span className="text">
                    Go to diningView
                </span>
            </Link>
        </div>

    );
}; 