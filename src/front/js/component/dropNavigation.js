import React from 'react';
import { Link } from "react-router-dom";


export const DropNavigation = () => {
    return (
        <div className="dropdown">
            <button className="button2 dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>@</span>
            </button>
            <ul className="dropdown-menu">
                <Link to="/">
                    <li><button className="dropdown-item" type="button">Home</button></li>
                </Link>
                <Link to="/secLogin">
                    <li><button className="dropdown-item" type="button">Adim</button></li>
                </Link>
                <Link to="/editUser">
                <li><button className="dropdown-item" type="button">Edit user</button></li>
                </Link>
                <Link to="/menusView">
                <li><button className="dropdown-item" type="button">Menus Creados</button></li>
                </Link>
                <Link to="/menuItems">
                <li><button className="dropdown-item" type="button">Carta del dia</button></li>
                </Link>
                <Link to="/tableMenu">
                <li><button className="dropdown-item" type="button">Tablet</button></li>
                </Link>
                <Link to="/diningView">
                <li><button className="dropdown-item" type="button">Comedor</button></li>
                </Link>
            </ul>
        </div>
    );
}

