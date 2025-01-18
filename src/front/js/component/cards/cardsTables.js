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
                    <div className="mesaItems col-4 border d-flex flex-column justify-content-center align-items-center">
                            <h4 className="card-title mb-4">Mesa 01:</h4>

                            {/* Edit Button */}
                            <button className="edit-button mb-4 d-flex justify-content-center align-items-center text-center" onClick={(e) => e.stopPropagation()}>
                                <svg className="edit-svgIcon" viewBox="0 0 512 512" width="24" height="24">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>

                            {/* Toggler Button */}
                            <div className="toggler mt-2 mb-4" onClick={(e) => e.stopPropagation()}>
                                <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                <label htmlFor="toggler-1">
                                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                    </svg>
                                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                    </svg>
                                </label>
                            </div>                         

                            {/* Delete Button */}
                            <button className="noselect"
                                onClick={(e) => e.stopPropagation()}>
                                <span className="text">Delete</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="mesaItems col-4 border d-flex flex-column justify-content-center align-items-center">
                            <h4 className="card-title mb-4">Mesa 02:</h4>

                            {/* Edit Button */}
                            <button className="edit-button mb-4 d-flex justify-content-center align-items-center text-center" onClick={(e) => e.stopPropagation()}>
                                <svg className="edit-svgIcon" viewBox="0 0 512 512" width="24" height="24">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>

                            {/* Toggler Button */}
                            <div className="toggler mt-2 mb-4" onClick={(e) => e.stopPropagation()}>
                                <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                <label htmlFor="toggler-1">
                                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                    </svg>
                                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                    </svg>
                                </label>
                            </div>                         

                            {/* Delete Button */}
                            <button className="noselect"
                                onClick={(e) => e.stopPropagation()}>
                                <span className="text">Delete</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="mesaItems col-4 border d-flex flex-column justify-content-center align-items-center">
                            <h4 className="card-title mb-4">Mesa 03:</h4>

                            {/* Edit Button */}
                            <button className="edit-button mb-4 d-flex justify-content-center align-items-center text-center" onClick={(e) => e.stopPropagation()}>
                                <svg className="edit-svgIcon" viewBox="0 0 512 512" width="24" height="24">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>

                            {/* Toggler Button */}
                            <div className="toggler mt-2 mb-4" onClick={(e) => e.stopPropagation()}>
                                <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                <label htmlFor="toggler-1">
                                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                    </svg>
                                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                    </svg>
                                </label>
                            </div>                         

                            {/* Delete Button */}
                            <button className="noselect"
                                onClick={(e) => e.stopPropagation()}>
                                <span className="text">Delete</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        
                        <div className="mesaItems col-4 border d-flex flex-column justify-content-center align-items-center">
                            <h4 className="card-title mb-4">Mesa 04:</h4>

                            {/* Edit Button */}
                            <button className="edit-button mb-4 d-flex justify-content-center align-items-center text-center" onClick={(e) => e.stopPropagation()}>
                                <svg className="edit-svgIcon" viewBox="0 0 512 512" width="24" height="24">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>

                            {/* Toggler Button */}
                            <div className="toggler mt-2 mb-4" onClick={(e) => e.stopPropagation()}>
                                <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                <label htmlFor="toggler-1">
                                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                    </svg>
                                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                    </svg>
                                </label>
                            </div>                         

                            {/* Delete Button */}
                            <button className="noselect"
                                onClick={(e) => e.stopPropagation()}>
                                <span className="text">Delete</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        {store.tables.map((table, index) => (

                            <div classNameName="mesaItems col-4 border" key={index}>
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
