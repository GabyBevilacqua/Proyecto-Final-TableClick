import React, { useEffect, useState, useContext } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/tableMenu.css';
import "../../styles/home.css";
import '/workspaces/Proyecto-final-G-J-C-F/src/front/styles/modalProduct.css';
import { Context } from '../store/appContext';
import { ModalProduct } from './modals/modalProduct';
import { gsap } from "gsap";

export const TabsMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { actions, store } = useContext(Context);
  const [modalShow, setModalShow] = useState(false);

  console.log(actions);


  const handleAddItem = (item) => {
    const itemToAdd = {
      ...item,
      quantity: parseInt(item.quantity) || 1, // Asegúrate de que la cantidad sea un número
    };
    actions.addSelectedItems(itemToAdd);

    // Crear animación
    const imgElement = document.querySelector(".menu-item-image img");
    const navbarButton = document.querySelector(".navbar-button"); // Selector del botón del navbar

    if (imgElement && navbarButton) {
      const imgRect = imgElement.getBoundingClientRect();
      const navbarRect = navbarButton.getBoundingClientRect();

      const clone = imgElement.cloneNode(true); // Clona la imagen
      document.body.appendChild(clone);

      gsap.set(clone, {
        position: "absolute",
        top: imgRect.top,
        left: imgRect.left,
        width: imgRect.width,
        height: imgRect.height,
        zIndex: 1000,
      });

      gsap.to(clone, {
        top: navbarRect.top + navbarRect.height / 2,
        left: navbarRect.left + navbarRect.width / 2,
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          document.body.removeChild(clone); // Elimina la imagen clonada después de la animación
        },
      });
    }

  };

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  const handleClick = () => {
    alert("¡Camarero en camino!");
  };


  const renderItems = (items) => {
    return (
      <div className="product-grid">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-image " onClick={() => handleImageClick(item)}>
              <img  src={item.image} alt={item.name} style={{ width: "174px", height: "150px" }} />
            </div>
            <div className="menu-item-info text-white mt-2">
              <h5>{item.name}</h5>
              <p className='text-white'>{item.description}</p>
              <p className='text-white'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderCarouselItems = () => {
    const allItems = Object.values(store.menuData).flat();
    return allItems.map((item, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={item.image}
          alt={item.name}
        />
        <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="menu-container mx-auto">
      <h1 className="menu-title">
        Menú seleccionado: {store.selectedMenu}
      </h1>
      <Tabs defaultActiveKey="Bienvenida" id="menu-tabs" className="menu-tabs">
        {/* Tab adicional de bienvenida */}
        <Tab eventKey="Bienvenida" title="Bienvenida">
          <div className="welcome-tab">
            <h2 className="texo dancing-script pt-2">Bienvenidos a esta Experiencia Culinaria</h2>
            <p>
              Disfruta de nuestra variedad de platos y bebidas.<br />
              Navega por las pestañas y veras todos los productos.<br />
              Pincha en la imagen pon cantidad "Cargar".<br />
              Puedes ver lo seleccionado en el boton de arriba a la derecha "Mesa Cliente".<br />
              Cuando estes seguro de tu seleccion pincha en el boton "Enviar Pedido".<br />
              Y lo recibiremos en la cocina para preparar tu pedido.<br />
            </p>
            <Carousel>
              {renderCarouselItems()}
            </Carousel>
            <p>
              Si tienes alguna duda, puedes llamar al camarero en el boton de abajo "Camarero". <br />
              ¡Buen provecho!
            </p>
            <button className="button2" onClick={handleClick}>Camarero</button>
          </div>
        </Tab>
        {/* Tabs dinámicos para las categorías */}
        {Object.keys(store.menuData).map((category, index) => (
          <Tab eventKey={category} title={category} key={index}>
            <div>{renderItems(store.menuData[category])}</div>
          </Tab>
        ))}
      </Tabs>
      {selectedItem && (
        <ModalProduct
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={selectedItem}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

