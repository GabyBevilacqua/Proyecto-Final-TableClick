import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from '../store/appContext';
import { DropNavigation } from "./dropNavigation";

export const Navbar = ({ selectedItems = [] }) => {
    const location = useLocation();
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user?.id || null

    const handleSendOrders = () => {
        actions.sendOrderToTable("Mesa 01");
    };

    const [formData, setFormData] = useState({
        nombre_personal: "",
        username: "",
        nombre_restaurante: "",
        direccion: "",
        telefono: "",
        email: "",
        password: "",
        codigo_admin: ""
    });

    useEffect(() => {
        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setFormData((prevState) => ({
                ...prevState,
                ...user // Merge user data into formData
            }));
        }
    }, []);

    const deleteDropdownItem = (index) => {
        const updatedItems = [...store.selectedItems];
        updatedItems.splice(index, 1);
        actions.setSelectedItems(updatedItems);
    };

    const renderNavbarContent = () => {
        switch (location.pathname) {
            case "/secLogin":
            case "/menusView":
            case `/editUser/${userId}`:
                return (
                    <>
                        < DropNavigation />
                        <img
                            src={store.user?.image || "https://i.ibb.co/Lg48MjM/imagen-Logo.png"}
                            alt="Logo"
                            style={{ height: "60px" }} />
                    </>
                );
            case "/tableMenu":
                return (
                    <>
                        < DropNavigation />
                        <img src="https://i.ibb.co/Lg48MjM/imagen-Logo.png" alt="Logo" style={{ height: "60px" }} />
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
                                <ul className="dropdown-menu dropdown-menu-end w-auto" aria-labelledby="dropdownMenuButton">
                                    {store.selectedItems.length > 0 ? (
                                        store.selectedItems.map((item, index) => (
                                            <li key={index} className="dropdown-item d-flex">
                                                <p className="col-10 ps-1 mt-1 me-1"> {item.idProduct} - {item.name} - {item.quantity} - {item.price} </p>
                                                <button
                                                    className="bin-button" onClick={() => deleteDropdownItem(index)}>
                                                    {/* Aquí va el contenido SVG */}
                                                    <svg
                                                        className="bin-top"
                                                        viewBox="0 0 39 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <line
                                                            y1="5"
                                                            x2="39"
                                                            y2="5"
                                                            stroke="white"
                                                            strokeWidth="4"
                                                        ></line>
                                                        <line
                                                            x1="12"
                                                            y1="1.5"
                                                            x2="26.0357"
                                                            y2="1.5"
                                                            stroke="white"
                                                            strokeWidth="3"
                                                        ></line>
                                                    </svg>
                                                    <svg
                                                        className="bin-bottom"
                                                        viewBox="0 0 33 39"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <mask id="path-1-inside-1_8_19" fill="white">
                                                            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                                                        </mask>
                                                        <path
                                                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                            fill="white"
                                                            mask="url(#path-1-inside-1_8_19)"
                                                        ></path>
                                                        <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                                                        <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                                                    </svg>
                                                </button>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="dropdown-item">No hay elementos seleccionados</li>
                                    )}
                                    <li className="dropdown-divider"></li>
                                    <li className="dropdown-item ">
                                        <button className="buttonDropdown ms-5"
                                            onClick={handleSendOrders}
                                        >
                                            Enviar pedido
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                );
            case "/menuItems":
                return (
                    <>
                        < DropNavigation />
                        <img src="https://i.ibb.co/Lg48MjM/imagen-Logo.png" alt="Logo" style={{ height: "60px" }} />
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
                        < DropNavigation />
                        <img src="https://i.ibb.co/Lg48MjM/imagen-Logo.png" alt="Logo" style={{ height: "60px" }} />
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
https://reactnative.dev/ */