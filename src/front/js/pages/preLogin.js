import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/preLogin.css"
import { Link, useNavigate } from "react-router-dom";


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
			<div className="text-center mt-5">
				<img src="https://i.ibb.co/JkMCt7P/table-Click01.png" alt="Logoapp" style={{ height: "120px" }} />
			</div>
			<div className="container outer mt-5">

				<div className="dot1"></div>
				<div className="card2">

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
								<input type="text" className="form-control mt-3" onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
								<input type="password" className="form-control mt-3" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />

								<button className="button2 mt-3" onClick={handleLogin}>Click aquí</button>

							</div>
							<div className="text-center mt-5 mb-3">
								<Link to="/request-reset-password">
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
