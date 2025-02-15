import React, { useState, useContext, useEffect } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../../store/appContext";
import { ModalItems } from "../modals/modalItems";
import "../../../styles/home.css";
import "../../../styles/menuItems.css";
import "../../../styles/tableMenu.css";


export const CardsItem3 = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const { store } = useContext(Context);
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando
    const [headerText, setHeaderText] = useState("CARTA PRINCIPAL"); // Estado para el contenido del h5

    useEffect(() => {
        if (store.menuData) {
            setSelectedItems(Object.values(store.menuData).flat());
        }
    }, [store.menuData]);

    const handleAddItem = (item, quantity) => {
        setSelectedItems([...selectedItems, { ...item, quantity }]);
    };

    const handleDelete = (index) => {
        const updatedItems = selectedItems.filter((_, itemIndex) => itemIndex !== index);
        setSelectedItems(updatedItems);
        console.log(`Elemento ${index} fue eliminado`);
    };

    const handleEditClick = () => {
        setIsEditing(true); // Cambiar a modo edición
    };

    const handleInputChange = (e) => {
        setHeaderText(e.target.value); // Actualizar el texto del h5
    };

    const handleBlur = () => {
        setIsEditing(false); // Salir del modo edición al perder el foco
    };

    const renderItems = (items) => {
        return (
            <div className="row g-3"> {/* Se asegura la organización en grid */}
                {items.map((item, index) => (
                    <div key={index} className="col-md-4 col-lg-3"> {/* Ajusta el número de columnas en distintas pantallas */}                    
                        <div className="card cardItems h-100 p-0 rounded-4"


                            type="button"
                            onClick={() => {
                                const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
                                modal.show();
                            }}
                        >
                            <ul className="ulMenuItems list-group list-group-flush">
                                <li className="liMenuItems list-group-item p-0 rounded-4 text-white">
                                    <div>
                                        {item.image ? (
                                            <img className='card44 rounded-top-4 rounded-bottom-0 justify-content-center'
                                                src={item.image}
                                                style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        ) : (
                                            <img className='card44 rounded-top-4 rounded-bottom-0 justify-content-center'
                                                src="https://www.holoimage.net/images/no-image.jpg"
                                                style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        )}
                                    </div>
                                    <div className="menu-item-info d-flex mb-0">
                                        <h3 className='card__title44 col-9 ms-2 mt-1 mb-2 text-white'>{item.name}</h3>
                                        <p className='ms-3 mt-1 mb-2 text-white'>#{item.idProduct}</p>
                                    </div>
                                    <p className='card__description44 ms-2 mt-0 text-white'>{item.description}</p>
                                    <strong className='ms-2'>{item.price}</strong>

                                    <div className="d-flex justify-content-center align-items-center gap-2 mt-2 mb-2">
                                        {/* Toggler Switch */}
                                        <div className="toggler text-start ms-0 mt-1 me-2 mb-1 col-3"
                                            onClick={(e) => e.stopPropagation()}>
                                            <input id={`toggler-${index}`} name={`toggler-${index}`} type="checkbox" value="1" />
                                            <label htmlFor={`toggler-${index}`}>
                                                <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                    <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                                </svg>
                                                <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                    <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                                    <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                                </svg>
                                            </label>
                                        </div>

                                        {/* Botón de Eliminar */}
                                        <button className="noselect mx-auto ms-0 me-0 mt-0 col-5"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(index);
                                            }}>
                                            <span className="text">Delete</span>
                                        </button>

                                        {/* Botón de Editar */}
                                        <button className="edit-button mt-0"
                                            onClick={(e) => e.stopPropagation()}>
                                            <svg className="edit-svgIcon" viewBox="0 0 512 512">
                                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // 
    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-12"> {/* Asegura un ancho adecuado */}
                        <Tabs defaultActiveKey="Instrucciones" id="menu-tabs" className="menu-tabs">
                            {/* Tab adicional de bienvenida */}
                            <Tab eventKey="Instrucciones" title="Instrucciones">
                                <div className="info-tab">
                                    <h2 className="texo dancing-script pt-2">Bienvenido a la creación y edición del menu/carta:</h2>
                                    <p>
                                        Puedes editar el nombre de éste menú/carta en el lápiz que está a mano derecha del título que colocaste anteriormente.<br />
                                        Edita las mesas que colocaste, puedes cambiarles el nombre, agregar adicionales, puedes también bloquear las mesas segun tu necesidad.<br />
                                        Navega por las pestañas que seleccionaste y dándode a la imagen del producto se abre el modal para que puedas <br />
                                        cargar un nuevo producto, también puedes editarlo, bloquearlo cuando no este disponible o eliminarlo definitivamente.<br />
                                    </p>
                                </div>
                            </Tab>
                            {Object.keys(store.menuData).map((category, idx) => (
                                <Tab eventKey={idx} title={category} key={idx}>
                                    <div>{renderItems(store.menuData[category])}</div>
                                </Tab>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

