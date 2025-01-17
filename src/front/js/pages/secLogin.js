import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/preLogin.css"
import { Link, useNavigate } from "react-router-dom";
import tableClick01 from "../../img/tableClick01.png";

//formulario de entrada para admin con su codigo o para las tables

export const SecLogin = () => {

    return (
        <div>
            <div className="text-center m-2">
                <Link to="/">
                    <button type="button" className="btn m-2">Return to preLogin</button>
                </Link>
                <Link to="/menusView">
                    <button type="button" className="btn m-2">Go to menusView</button>
                </Link>
                <Link to="/tableMenu">
                    <button type="button" className="btn m-2">Go to tableMenu</button>
                </Link>
                <Link to="/editUser">
                    <button type="button" className="btn m-2">edit user</button>
                </Link>
            </div>
            <div className="text-center mt-2">
                <img src={tableClick01} alt="Logoapp" style={{ height: "100px" }} />
            </div>


            <div className="container outer mt-5">

                <div className="dot1"></div>
                <div className="card card2">

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
                        <div className="row mt-5 mb-5 justify-content-center">
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

                    <div className="line topl"></div>
                    <div className="line leftl"></div>
                    <div className="line bottoml"></div>
                    <div className="line rightl"></div>

                </div>
            </div>
        </div>
    );
};