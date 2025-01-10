import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

// aqui usaremos cardsDining.js

export const DiningView = () => {

    return (
        <div className="text-center mt-5">
            <h2>
                aqui se ven las mesas del comedor
            </h2>
            <Link to="/">
                <span className="text  m-5">
                    Return to preLogin
                </span>
            </Link>
            <Link to="/menuItems">
                <span className="text  m-5">
                    Return to menuItems
                </span>
            </Link>
        </div>

    );
};