import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/preLogin.css"
import { Link, useNavigate } from "react-router-dom";
import tableClick01 from "../../img/tableClick01.png";

// boton darse de alta
//formulario para iniciar sesion : usuario, contraseña.

export const PreLogin = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	const handleLogin = async () => {
		const success = await actions.loginUser(username, password);
		if (success) {
			navigate("/secLogin"); // Redirigir a la página de inicio de sesión 
		} else {
			alert("Login failed. Please check your credentials and try again.");
		}
	};

	return (
		<div>
			<div className="text-center mt-2 mb-3">
				<Link to="/restRegister">
					<button type="button" className="btn">Go to restaurant register</button>
				</Link>
				<Link to="/secLogin">
					<button type="button" className="btn m-2">Go to secLogin </button>
				</Link>
			</div>
			<div className="text-center mt-2">
				<img src={tableClick01} alt="Logoapp" style={{ height: "120px" }} />
			</div>


			<div className="container outer mt-5">

				<div className="dot1"></div>
				<div className="card card2">

					<div className="containerLogin">

						<div className="row mt-4 justify-content-center">
							<div className="col-6 text-center text-white mt-5">
								<h1>Da de alta tu restaurante</h1>
								<Link to="/restRegister">
									<button className="button2 mt-3">Click aquí</button>
								</Link>
							</div>
						</div>
						<div className="row mt-5 justify-content-center">
							<div className="col-6 text-center text-white">
								<h1>Inicia sesión</h1>
								<input type="text" className="form-control mt-3" placeholder="Usuario" />
								<input type="password" className="form-control mt-3" placeholder="Contraseña" />
								<Link to="/secLogin">
									<button className="button2 mt-3">Click aquí</button>
								</Link>
							</div>
							<div className="text-center mt-5 mb-3">
								<Link to="/">
									<span className="span text-white text-center">Recuperar contraseña</span>
								</Link>
							</div>
						</div>
					</div>

					<div className="line topl"></div>
					<div className="line leftl"></div>
					<div className="line bottoml"></div>
					<div className="line rightl"></div>
				</div>
			</div>
		</div>
	);
};
