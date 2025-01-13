import React from "react";
import { Link } from "react-router-dom";
import { ModalItems } from "../modals/modalItems";
import "../../../styles/home.css";
import "../../../styles/menuItems.css";

export const CardsItem2 = () => {
    const handleCardClick = () => {
        const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
        modal.show();
      };
    return (
        <>
                <div className="container">
                <div className="bodyCardItems row g-2 m-0">
                <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
                        type="button"
                        onClick={() => {
                            const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                            modal.show();
                        }}
                        style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Bebidas:</h2>
                            <button type="button" className="button3 col-4 justify-content-end"
                                onClick={(e) => e.stopPropagation()} 
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5 mt-2">Item 01</h4>
                                <button href="#" className=" button2 col-5"
                                    onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                            </li>
                        </ul>
                    </div> 
                    <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
                        type="button"
                        onClick={() => {
                            const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                            modal.show();
                        }}
                        style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Otro:</h2>
                            <button type="button" className="button3 col-4 justify-content-end"
                                onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush ps-3">
                            <li className="liMenuItems list-group-item border-top border-bottom">An item</li>
                        </ul>
                        </div>
                        </div>
                        </div>      
            <ModalItems/>
        </>
    );};



















      {/* <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Entrantes:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>

                    <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Principales:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>

                    <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Postre:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>*/}