import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/tableMenu.css';
import "../../styles/home.css";


export const TabsMenu = () => {

    const menuData = {
        Bebidas: [
            { name: "Mojito caribeño", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { name: "Cuba Libre", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { name: "Daiquiri de fresa", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { name: "Coca cola", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Entrantes: [
            { name: "Bruschetta", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Principales: [
            { name: "Pollo al horno", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Postres: [
            { name: "Tarta de chocolate", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
    };

    const renderItems = (items) => {
        return items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info text-white">
              <h5>{item.name}</h5>
              <p className='text-white'>{item.description}</p>
              <p className='text-white'>{item.price}</p>
            </div>
            <div className="menu-item-image">{item.image}</div>
            <div className="menu-item-actions">
              <label className='text-white'>Cantidad</label>
              <input
                type="number"
                min="1"
                defaultValue={item.quantity}
                className="menu-item-quantity"
              />
              <button className="button2">Cargar</button>
            </div>
          </div>
        ));
      };
    
      return (
        <div className="menu-container col-md-9 mx-auto">
          <h1 className="menu-title">Nombre del menú</h1>
          <Tabs defaultActiveKey="Bebidas" id="menu-tabs" className="menu-tabs">
            {Object.keys(menuData).map((category, idx) => (
              <Tab eventKey={category} title={category} key={idx}>
                <div>{renderItems(menuData[category])}</div>
              </Tab>
            ))}
          </Tabs>
        </div>
    );
};