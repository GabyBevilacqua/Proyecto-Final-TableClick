import React from "react";
import { Link, useLocation } from "react-router-dom";
import imagenLogo from "../../img/imagenLogo.jpg";
import "../../styles/navbar.css";

export const Navbar = () => {
    const location = useLocation();

    const renderNavbarContent = () => {
        switch (location.pathname) {
            case "/secLogin":
            case "/menusView":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>Nombre del restaurante</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                    </>
                );
            case "/tableMenu":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>Nombre del restaurante</h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                        <div className="ml-auto">
                            <div className="dropdown">
                                <button className="buttonNavbar dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mesa x Cliente x Pedidos x
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "/menuItems":
                return (
                    <>
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>Nombre del restaurante</h1>
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
                        <h1 className="navbar-brand mb-0" style={{ color: "white" }}>Nombre del restaurante</h1>
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