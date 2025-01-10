import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

// boton darse de alta
//formulario para iniciar sesion : usuario, contraseña.

export const PreLogin = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate()

	return (
		<div className="text-center mt-5">
			<h1>Pagina para dar de alta el restaurante o hacer login</h1>
			<Link to="/restRegister">
                <span className="text  m-5">
                    Go to restaurant register
                </span>
            </Link>
			<Link to="/secLogin">
                <span className="text">
                    Go to secLogin 
                </span>
            </Link>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation otra cosa
				</a>
			</p>
		</div>
	);
};
