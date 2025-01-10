import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Nombre del restaurante</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">dropdown pedidos o boton</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
