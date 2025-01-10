import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

//formulario de entrada para admin con su codigo o para las tables

export const SecLogin = () => {

    return (
        <div>
            <div className="text-center mt-5">
                <h2>
                    Esta donde se da entrada al administrador o a la tablet de la mesa
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
            <div className="containerpreLogin">
     			<div className="row mt-5 justify-content-center">
       				<div className="col-6 text-center text-white mt-5">
          				<h1>Administración</h1>
                        <input type="text" className="form-control mt-3" placeholder="Código admin" />
         				<button className="btn btn-secondary mt-3">Click aquí</button>
        			</div>
      			</div>
      			<div className="row mt-5 justify-content-center">
        			<div className="col-6 text-center text-white mb-5">
         				<h1>Identificador mesa</h1>
          				<input type="text" className="form-control mt-3" placeholder="Código mesa" />
          				<input type="password" className="form-control mt-3" placeholder="Seleccionar menú" />
          				<button className="btn btn-secondary mt-3">Click aquí</button>
        			</div>
     			</div>
   			</div>
        </div>

    );
};