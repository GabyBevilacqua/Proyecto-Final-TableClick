import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dropNavigation.css";


export const DropNavigation = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user.id

    const navigate = useNavigate();

    const handleLogout = () => {
        // limpiar user data del localStorage
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");

        // success message
        alert("You have successfully logged out.");
        navigate("/");
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


    return (
        <div className="menu ">
            <div className="item">
                <a href="#" className="link mt-2">
                    <span><h1>{formData.nombre_restaurante || "El nombre de tu restaurante"}</h1></span>
                    <svg viewBox="0 0 360 360" xmlSpace="preserve">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            ></path>
                        </g>
                    </svg>
                </a>
                <div className="submenu ">
                    <div className="submenu-item">
                        <Link to="/">
                            <a href="#" className="submenu-link"> Home </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/secLogin">
                            <a href="#" className="submenu-link"> Admin </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/menusView">
                            <a href="#" className="submenu-link"> Menus Creados </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/menuItems">
                            <a href="#" className="submenu-link"> Carta del dia </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/tableMenu">
                            <a href="#" className="submenu-link"> Tablet </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/diningView">
                            <a href="#" className="submenu-link"> Comedor </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to={`/editUser/${userId}`}>
                            <a href="#" className="submenu-link"> Edit user </a>
                        </Link>
                    </div>
                    <div className="submenu-item">
                        <Link to="/">
                            <a href="#"
                                className="submenu-link"
                                onClick={handleLogout}
                            >
                                Cerrar sesion
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    );
}

{/* <div classNameName="dropdown">
<button classNameName="button2 dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span>@</span>
</button>

<ul classNameName="dropdown-menu">
    <Link to="/">
        <li><button classNameName="dropdown-item" type="button">Home</button></li>
    </Link>
    <Link to="/secLogin">
        <li><button classNameName="dropdown-item" type="button">Adim</button></li>
    </Link>
    <Link to={`/editUser/${userId}`}>
    <li><button classNameName="dropdown-item" type="button">Edit user</button></li>
    </Link>
    <Link to="/menusView">
    <li><button classNameName="dropdown-item" type="button">Menus Creados</button></li>
    </Link>
    <Link to="/menuItems">
    <li><button classNameName="dropdown-item" type="button">Carta del dia</button></li>
    </Link>
    <Link to="/tableMenu">
    <li><button classNameName="dropdown-item" type="button">Tablet</button></li>
    </Link>
    <Link to="/diningView">
    <li><button classNameName="dropdown-item" type="button">Comedor</button></li>
    </Link>
    <Link to="/">
    <li><button classNameName="dropdown-item" type="button">Cerrar sesion</button></li>
    </Link>
</ul>
</div> */}