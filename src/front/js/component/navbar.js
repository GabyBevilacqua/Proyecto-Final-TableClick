import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imagenLogo from "../../img/imagenLogo.png";
import "../../styles/navbar.css";
import { Context } from '../store/appContext';
import { DropNavigation } from "./dropNavigation";

export const Navbar = ({ selectedItems = [] }) => {
    const location = useLocation();
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    const handleSendOrders = () => {
        actions.sendOrderToTable("Mesa 01"); // Enviar los pedidos a Mesa 01
    };

    const renderNavbarContent = () => {
        switch (location.pathname) {
            case "/secLogin":
            case "/menusView":
            case "/editUser":
                return (
                    <>
                        <h1 className="navbar-brand mb-0 d-flex" style={{ color: "white" }}>
                            < DropNavigation />
                            El Cangrejo
                        </h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                    </>
                );
            case "/tableMenu":
                return (
                    <>
                        <h1 className="navbar-brand mb-0 d-flex me-3" style={{ color: "white" }}>
                            < DropNavigation />
                            El Cangrejo
                        </h1>
                        <img src={imagenLogo} alt="Logo" style={{ height: "60px" }} />
                        <div className="ml-auto">
                            <div className="dropdown">
                                <button className="buttonNavbar dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    {store.selectedTable} Cliente-1001 Pedidos 0
                                </button>
                                <div className="dropdown-menu dropdown-menu-end w-auto" aria-labelledby="dropdownMenuButton">
                                    {store.selectedItems.map((item, index) => (
                                        <div key={index} className="dropdown-item">
                                            {item.idProduct} - {item.name} - {item.quantity} - {item.price}
                                        </div>
                                    ))}
                                    <a className="dropdown-item space-between" href="#">
                                        Pedido ------------
                                        <button
                                            className="buttonDropdown"
                                            type="button"
                                            onClick={handleSendOrders}>
                                            Enviar pedido a cocina
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "/menuItems":
                return (
                    <>
                        <h1 className="navbar-brand mb-0 d-flex me-3" style={{ color: "white" }}>
                            < DropNavigation />
                            El Cangrejo
                        </h1>
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
                        <h1 className="navbar-brand mb-0 d-flex me-3" style={{ color: "white" }}>
                            < DropNavigation />
                            El Cangrejo
                        </h1>
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


/*


   <a className="dropdown-item space-between" href="#">
                                        Pedido ------------
                                        <button
                                            className="buttonDropdown"
                                            type="button"
                                            onClick={() => handleSendOrders(store.selectedOrder)}>
                                            Enviar pedido a cocina
                                        </button>
                                    </a>
                                </div>
                                

Juan David González
18:51
https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Usin
https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
Juan David González
19:17
https://flet.dev/
https://reactnative.dev/


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

*/
