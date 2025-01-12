import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

//formulario de entrada para admin con su codigo o para las tables

export const SecLogin = () => {

    return (
        <div>
            <div className="text-center m-2">
                <Link to="/">
                    <button type="button" class="btn m-2">Return to preLogin</button>
                </Link>
                <Link to="/menusView">
                    <button type="button" class="btn m-2">Go to menusView</button>
                </Link>
                <Link to="/tableMenu">
                    <button type="button" class="btn m-2">Go to tableMenu</button>
                </Link>
            </div>
            <div className="containerpreLogin">
                <div className="row mt-5 justify-content-center">
                    <div className="col-6 text-center text-white mt-5">
                        <h1>Administración</h1>
                        <input type="text" className="form-control mt-3" placeholder="Código admin" />
                        <Link to="/menusView">
                            <button className="button4 mt-3">Click aquí</button>
                        </Link>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-6 text-center text-white mb-5">
                        <h1>Identificador mesa</h1>
                        <input type="text" className="form-control mt-3" placeholder="Código mesa" />
                        <input type="password" className="form-control mt-3" placeholder="Seleccionar menú" />
                        <Link to="/tableMenu">
                            <button className="button4 mt-3">Click aquí</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};