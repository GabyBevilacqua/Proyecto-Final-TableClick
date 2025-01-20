import React, { useEffect, useState, useContext } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/tableMenu.css';
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const TabsMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { actions, store } = useContext(Context);

  console.log(actions);


  const handleAddItem = (item) => {
    const itemToAdd = {
      ...item,
      quantity: parseInt(item.quantity) || 1, // Asegúrate de que la cantidad sea un número
    };
    actions.addSelectedItems(itemToAdd);
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
        <div className="menu-item-image">
          <img src={item.image} alt={item.name} style={{ width: "150px", height: "100px" }} />
        </div>
        <div className="menu-item-actions">
          <label className='text-white'>Cantidad</label>
          <input
            type="number"
            min="1"
            defaultValue={item.quantity}
            className="menu-item-quantity"
            onChange={(e) => (item.quantity = parseInt(e.target.value) || 1)}
          />
          <button className="button2" onClick={() => handleAddItem(item)}>Cargar</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="menu-container col-md-7 mx-auto">
      <h1 className="menu-title">
        Menú seleccionado: {store.selectedMenu}
      </h1>
      <Tabs defaultActiveKey="Bebidas" id="menu-tabs" className="menu-tabs">
        {Object.keys(store.menuData).map((category, index) => (
          <Tab eventKey={category} title={category} key={index}>
            <div>{renderItems(store.menuData[category])}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

