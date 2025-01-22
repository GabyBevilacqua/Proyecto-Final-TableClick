import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/preLogin.css"
import { Link, useNavigate } from "react-router-dom";


//formulario de entrada para admin con su codigo o para las tables

export const SecLogin = () => {
    const [menu, setMenu] = useState("");
    const [table, setTable] = useState("");
    const { actions, store } = useContext(Context);
    //console.log(actions);
    const navigate = useNavigate();

    const handleSelectTable = (event) => {
        console.log(event.target.value);
        setTable(event.target.value);
    };

    const handleSelectMenu = (event) => {
        console.log(event.target.value);
        setMenu(event.target.value);
    };

    const handleClick = () => { // Función para añadir la mesa      
        actions.addSelectedMenu(menu);
        navigate("/tableMenu");
    }

    return (
        <div>
            <div className="text-center mt-3">
                <img src="https://i.ibb.co/JkMCt7P/table-Click01.png" alt="Logoapp" style={{ height: "120px" }} />
            </div>


            <div className="container justify-content-center outer mt-5">

                <div className="dot1"></div>
                <div className="card aling-self-center card2">

                    <div className="containerpreLogin">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-6 text-center text-white mt-5">
                                <h1>Administración</h1>
                                <input type="text" className="form-control mt-3" placeholder="Código admin" />
                                <Link to="/menusView">
                                    <button className="button2 mt-3">Click aquí</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5 justify-content-center">
                            <div className="col-6 text-center text-white mb-5">
                                <h1>Identificador mesa</h1>

                                <select className="form-control mt-3" value={table} onChange={handleSelectTable}>
                                    <option value="" disabled>
                                        Seleccionar mesa
                                    </option>
                                    <option>Mesa 1</option>
                                    <option>Mesa 2</option>
                                    <option>Mesa 3</option>
                                    <option>Mesa 4</option>
                                    <option>Mesa 5</option>
                                    </select>
                                <select className="form-control mt-3" value={menu} onChange={handleSelectMenu}>
                                    <option value="" disabled>
                                        Seleccionar menú
                                    </option>
                                    <option>Carta Principal</option>
                                    <option>Menú del día</option>
                                    <option>Carta de Invierno</option>
                                    <option>Carta de Primavera</option>
                                </select>
                                
                                    <button className="button2 mt-3" onClick={handleClick} disabled={!menu}>
                                        Click aquí
                                    </button>
                               
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