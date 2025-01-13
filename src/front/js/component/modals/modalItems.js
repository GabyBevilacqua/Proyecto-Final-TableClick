import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/home.css"
import "../../../styles/menuItems.css";

export const ModalItems = () => {
  return (
    <>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content cardItems">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Bebidas:</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"  ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text inputModalItems" id="inputGroup-sizing-default">Nombre</span>
                <input type="text" className="form-control inputModalItems" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                <textarea className="form-control inputModalItems" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text inputModalItems">Precio:</span>
                <input type="number" className="form-control inputModalItems" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text inputModalItems">€</span>
              </div>
              <h6> Cargar imagen:</h6>
              <div className="input-group inputModalItems rounded-4">
                <input type="file" className="form-control inputModalItems" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

              </div> 
            </div>
            <div className="modal-footer">
              <button className="button4 inputModalItems" type="button" id="inputGroupFileAddon04">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                         <div className="modal-dialog">
//                             <div className="modal-content cardItems">
//                                 <div className="modal-header">
//                                     <h1 className="modal-title fs-5" id="staticBackdropLabel">Bebidas:</h1>
//                                     <button type="button" className="btn-close" data-bs-dismiss="modal"  ></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <div className="input-group mb-3">
//                                         <span className="input-group-text inputModalItems" id="inputGroup-sizing-default">Nombre</span>
//                                         <input type="text" className="form-control inputModalItems" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label for="exampleFormControlTextarea1" className="form-label">Descripción:</label>
//                                         <textarea className="form-control inputModalItems" id="exampleFormControlTextarea1" rows="3"></textarea>
//                                     </div>
//                                     <div className="input-group mb-3">
//                                         <span className="input-group-text inputModalItems">Precio:</span>
//                                         <input type="number" className="form-control inputModalItems" aria-label="Dollar amount (with dot and two decimal places)" />
//                                         <span className="input-group-text inputModalItems">€</span>
//                                     </div>
//                                     <h6> Cargar imagen:</h6>
//                                     <div className="input-group inputModalItems rounded-4">
//                                         <input type="file" className="form-control inputModalItems" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

//                                     </div>
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button className="btn button4 inputModalItems" type="button" id="inputGroupFileAddon04">Guardar</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>