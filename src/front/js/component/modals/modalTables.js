import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/home.css"
import "../../../styles/menuItems.css";

export const ModalTable = () => {
  return (
    <>




            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content cardItems">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">AÑADIR MESA</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">           
              <div className="input-group mb-3">
                <span className="input-group-text inputModalItems" id="inputGroup-sizing-default">Nombre</span>
                <input type="text" className="form-control inputModalItems" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="button4">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
</>
  );};