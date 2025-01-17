import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/tableMenu.css';
import "../../styles/home.css";

export const TabsMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

    const menuData = {
        Bebidas: [
            { idProduct: "001", name: "Mojito caribeño", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "002", name: "Cuba Libre", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "003", name: "Daiquiri de fresa", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "004", name: "Coca cola", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Entrantes: [
            { idProduct: "005", name: "Bruschetta", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "006", name: "Buñuelos de bacalao", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "007", name: "Croquetas de jamon", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "008", name: "Cesar salad", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Principales: [
            { idProduct: "009", name: "c-Burguer", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "010", name: "Solomillo a la pimienta", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "011", name: "Risotto trufado", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "012", name: "Bacalao al Pil-Pil", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
        Postres: [
            { idProduct: "013", name: "Cheesecake", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "014", name: "Coulant", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "015", name: "Tiramisu", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
            { idProduct: "016", name: "Flan casero", description: "Descripción", price: "4 $", image: "IMG", quantity: 1 },
        ],
    };

    const handleAddItem = (item, quantity) => {
      setSelectedItems([...selectedItems, { ...item, quantity }]);
  };

    const renderItems = (items) => {
        return items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-info text-white">
            <p className='text-white'>{item.idProduct}</p>
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
                onChange={(e) => item.quantity = e.target.value}
              />
              <button className="button2" onClick={() => handleAddItem(item, item.quantity)}>Cargar</button>
            </div>
          </div>
        ));
      };
    
      return (
        <div className="menu-container col-md-9 mx-auto">
          <h1 className="menu-title">Nombre del menú</h1>
          
          <Tabs defaultActiveKey="Bebidas" id="menu-tabs" className="menu-tabs">
            {Object.keys(menuData).map((category, index) => (
              <Tab eventKey={category} title={category} key={index}>
                <div>{renderItems(menuData[category])}</div>
              </Tab>
            ))}
          </Tabs>
        </div>
    );
};

