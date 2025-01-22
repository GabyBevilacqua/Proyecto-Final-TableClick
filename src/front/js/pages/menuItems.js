import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/menuItems.css";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { CardsItem2 } from "../component/cards/cardsItem2";
import { CardsItem3 } from "../component/cards/cardsItem3";
import { ModalItems } from "../component/modals/modalItems";
import { CardsTable } from "../component/cards/cardsTables";
import { ModalTable } from "../component/modals/modalTables";


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
                <h5 className="tituloNombreMenu  rounded-5 m-3 p-3">CARTA PRINCIPAL </h5>
            </div>

            <CardsItem3 />
            {/* <CardsItem2/> */}
            <ModalItems />
            <CardsTable />
            <ModalTable />


        </div>

    );
}; 