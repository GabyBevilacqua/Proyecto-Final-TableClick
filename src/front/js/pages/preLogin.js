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
		<div>
			<div className="text-center m-5">
				<h2>Actualmente estas en preLogin</h2>
				<Link to="/restRegister">
					<button type="button" class="btn btn-primary m-2">Go to restaurant register</button>
				</Link>
				<Link to="/secLogin">
					<button type="button" class="btn btn-primary m-2">Go to secLogin </button>
				</Link>
				{/* <div className="alert alert-info">
					{store.message || "Loading message from the backend (make sure your python backend is running)..."}
				</div> */}
				<div className="containerpreLogin">
     				<div className="row mt-5 justify-content-center">
       					<div className="col-12 text-center text-white mt-5">
          					<h1>Da de alta tu restaurante</h1>
         					<button className="btn btn-secondary mt-3">Click aquí</button>
        				</div>
      				</div>
      				<div className="row mt-5 justify-content-center">
        				<div className="col-6 text-center text-white mb-5">
         					<h1>Inicia sesión</h1>
          					<input type="text" className="form-control mt-3" placeholder="Usuario" />
          					<input type="password" className="form-control mt-3" placeholder="Contraseña" />
          					<button className="btn btn-secondary mt-3">Click aquí</button>
        				</div>
     				</div>
   				</div>
			</div>
		</div>
	);
};
