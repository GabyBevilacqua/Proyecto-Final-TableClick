import React from "react";
import { Link, useLocation } from "react-router-dom";
import imagenLogo from "../../img/imagenLogo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    const location = useLocation();

    const renderNavbarContent = () => {
        switch (location.pathname) {
            case "/secLogin":
            case "/menusView":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>El Cangrejo</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                    </>
                );
            case "/tableMenu":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>El Cangrejo</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                        <div className="ml-auto">
                            <div className="dropdown">
                                <button className="buttonNavbar dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Mesa x Cliente x Pedidos x
                                </button>
                                <div className="dropdown-menu dropdown-menu-end w-auto" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Pedido ---------------Cantidad-----Estatus------Precio</a>
                                    <p className="dropdown-item mb-0">
                                        ----------------------------------------------------<br />
                                        Bebida: Coca-cola---------02-------Servido--------5$<br />
                                        Bebida: Cuba libre--------01-------Servido--------6$<br />
                                        Entrante: Ensalada--------01-------Servido--------12$<br />
                                        Entrante: Patatas---------02-------Servido--------25$
                                    </p>
                                    <a className="dropdown-item" href="#">Pedido 01</a>
                                    <p className="dropdown-item mb-0">
                                        ----------------------------------------------------<br />
                                        Principal: Hamburguesa----02------En cocción-----40$<br />
                                        Principal: Entrecot--------01-----En cocción--------20$
                                    </p>
                                    <a className="dropdown-item" href="#">Pedido 02</a>
                                    <p className="dropdown-item mb-0">
                                        ----------------------------------------------------<br />
                                        Postre: Helado--------01--------En espera--------6$<br />
                                        Postre: Copa---------02---------En espera--------12$
                                    </p>
                                    <a className="dropdown-item space-between" href="#">
                                        Pedido 03
                                        <button className="buttonDropdown" type="button">Enviar pedido a cocina</button>
                                    </a>
                                    <p className="dropdown-item mb-0">
                                        Subtotal -----------------------------------------180$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "/menuItems":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>El Cangrejo</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                        <div className="ml-auto">
                            <Link to="/diningView">
                                <button className="buttonNavbar">Entrada a Comedor</button>
                            </Link>
                        </div>
                    </>
                );
            case "/diningView":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>El Cangrejo</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                        <div className="ml-auto">
                            <Link to="/menuItems">
                                <button className="buttonNavbar">Regresar al Menu</button>
                            </Link>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {location.pathname !== "/preLogin" && location.pathname !== "/restRegister" && (
                <nav className="navbar" style={{ backgroundColor: "#3F617C" }}>
                    <div className="container d-flex justify-content-between align-items-center">
                        {renderNavbarContent()}
                    </div>
                </nav>
            )}
        </>
    );
};
