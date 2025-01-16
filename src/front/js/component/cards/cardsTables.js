import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const CardsTable = () => {
    const { store } = useContext(Context); // Acceso al estado del store

    return (
        <div className="container">
            <div className="card cardItems rounded-4 m-0 d-flex justify-content-center">
                <div className="card-header d-flex">
                    <h3 className="title col-10">Mesas:</h3>
                </div>
                


                    <div className="card-body">

                        <blockquote className="blockquote mb-0 d-flex flex-wrap">
                        <div className="mesaItems col-4 border">
                        <h4 className="card-title m-3">Mesa 01</h4>
                        <button type="button" className="button2 col-8 mb-3">
                            Editar
                        </button>
                        <button type="button" className="button4 col-7 mb-3">
                            Block
                        </button>
                        <button type="button" className="button3 col-7 mb-3">
                            Borrar
                        </button>
                    </div>
                    <div className="mesaItems col-4 border">
                        <h4 className="card-title m-3">Mesa 02</h4>
                        <button type="button" className="button2 col-8 mb-3">
                            Editar
                        </button>
                        <button type="button" className="button4 col-7 mb-3">
                            Block
                        </button>
                        <button type="button" className="button3 col-7 mb-3">
                            Borrar
                        </button>
                    </div>
                    <div className="mesaItems col-4 border">
                        <h4 className="card-title m-3">Mesa 03</h4>
                        <button type="button" className="button2 col-8 mb-3">
                            Editar
                        </button>
                        <button type="button" className="button4 col-7 mb-3">
                            Block
                        </button>
                        <button type="button" className="button3 col-7 mb-3">
                            Borrar
                        </button>
                    </div>
                    <div className="mesaItems col-4 border">
                        <h4 className="card-title m-3">Mesa 04</h4>
                        <button type="button" className="button2 col-8 mb-3">
                            Editar
                        </button>
                        <button type="button" className="button4 col-7 mb-3">
                            Block
                        </button>
                        <button type="button" className="button3 col-7 mb-3">
                            Borrar
                        </button>
                    </div>
                            {store.tables.map((table, index) => (
                                
                                <div className="mesaItems col-4 border" key={index}>
                                    <h4 className="card-title m-3">{table}</h4>
                                    <button type="button" className="button2 col-8 mb-3">
                                        Editar
                                    </button>
                                    <button type="button" className="button4 col-7 mb-3">
                                        Block
                                    </button>
                                    <button type="button" className="button3 col-7 mb-3">
                                        Borrar
                                    </button>
                                </div>
                                
                            ))}
                           
                    
                            <span
                                type="button"
                                className="mesaItems border d-flex align-items-center justify-content-center"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                               style={{ height: "260px" }}
                            >
                                <h1>+</h1>
                            </span>
                        </blockquote>
                    </div>
                </div>
            </div>
        
    );
};











{/* <div className="mesaItems col-2 border">
<h4 className="card-title">Mesa 02</h4>
<a href="#" className="btn button2 col-8 mb-1">Editar</a>
<button type="button" className="btn button4  col-7 mb-1">Block</button>
<button type="button" className="btn button3  col-6 ">Borrar</button>
</div>
<div className="mesaItems col-2 border">
<h5 className="card-title">Mesa 03</h5>
<a href="#" className="btn button2 col-8 mb-1">Editar</a>
<button type="button" className="btn button4  col-7 mb-1">Block</button>
<button type="button" className="btn button3  col-6 ">Borrar</button>
</div>
<div className="mesaItems col-2 border">
<h5 className="card-title">Mesa 04</h5>
<a href="#" className="btn button2 col-8 mb-1">Editar</a>
<button type="button" className="btn button4  col-7 mb-1">Block</button>
<button type="button" className="btn button3  col-6 ">Borrar</button>
</div>
<div className="mesaItems col-2 border">
<h5 className="card-title">Mesa 05</h5>
<a href="#" className="btn button2 col-8 mb-1">Editar</a>
<button type="button" className="btn button4  col-7 mb-1">Block</button>
<button type="button" className="btn button3  col-6 ">Borrar</button>
</div> */}
