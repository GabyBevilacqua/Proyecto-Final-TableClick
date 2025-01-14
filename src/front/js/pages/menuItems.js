import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/menuItems.css";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { CardsItem2 } from "../component/cards/cardsItem2";
import { ModalItems } from "../component/modals/modalItems";
import { CardsTable } from "../component/cards/cardsTables";
import { ModalTable } from "../component/modals/modalTables";

// aqui al dar a cargar el producto se abre el modalItems.js y dentro de este modal al cargar imagen se abre el modalImg.js
// aqui al dar editar nombre de mesa se abre el modalTable.js

// aqui usamos cardsItem.js y cardsTable.js

export const MenuItems = () => {
    // const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => {
    //   setShowModal(true);
    // };
  
    // const handleCloseModal = () => {
    //   setShowModal(false);
    // };  
    return (
        
        <div className="bodyMenuItens">
             <div className="container d-flex justify-content-center">
                <h5 className="tituloNombreMenu  rounded-5 col-2 p-1">NOMBRE DEL MENU </h5>
            </div>
            <CardsItem2/>
            <ModalItems/>
            <CardsTable/>
            <ModalTable/>

            <div className="text-center mt-5">
                <Link to="/">
                    <span className="text m-5">
                        Return to preLogin
                    </span>
                </Link>
                <Link to="/menusView">
                    <span className="text  m-5">
                        Return to menusView
                    </span>
                </Link>
                <Link to="/diningView">
                    <span className="text">
                        Go to diningView
                    </span>
                </Link>
            </div> 
            </div> 
            
    );
}; 