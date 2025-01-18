import React, { useEffect, useState,  useContext } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/tableMenu.css';
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const TabsMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { actions, store } = useContext(Context);
  
  console.log(actions);

  const menuData = {
    Bebidas: [
      { idProduct: "001", name: "Agua", description: "Descripción", price: "4 $", 
        image: "https://tenda.elmasove.com/wp-content/uploads/2020/01/veri.png", quantity: 1 },
      { idProduct: "002", name: "Cerveza", description: "Descripción", price: "4 $", 
        image: "https://yt3.googleusercontent.com/8fMR1gkzE7hf2sugNVo8Kjiykh8IoUZ1ICQ_-T0tZ6OZt9s13l1aLiTVTmJy4oQtumcmORD1=s900-c-k-c0x00ffffff-no-rj", quantity: 1 },
      { idProduct: "003", name: "Fanta", description: "Descripción", price: "4 $", 
        image: "https://www.greekorico.com/wp-content/uploads/sites/652/2022/10/fanta-limon.png", quantity: 1 },
      { idProduct: "004", name: "Acuarius", description: "Descripción", price: "4 $", 
        image: "https://www.lasansi.com/media/items/big/3c2c7-logomarcas-aquarius-naranja.jpg", quantity: 1 },
      { idProduct: "017", name: "Cerveza 0,0", description: "Descripción", price: "4 $", 
        image: "https://yt3.googleusercontent.com/X9psilJdOXeD2-TrXTCBeFKN3In4v-ltfPypUYQst7wZAxM1f7EmQKjmaQLyNe8lRLaFvqlE=s900-c-k-c0x00ffffff-no-rj", quantity: 1 },
      { idProduct: "018", name: "Coca-cola", description: "Descripción", price: "4 $", 
        image: "https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg", quantity: 1 },
    ],
    Entrantes: [
      { idProduct: "005", name: "Bruschetta", description: "Descripción", price: "4 $", 
        image: "https://mandolina.co/wp-content/uploads/2024/08/Bruschetta_de_tomates_cherry_y_mozzarella-1200x675.jpg", quantity: 1 },
      { idProduct: "006", name: "Buñuelos de bacalao", description: "Descripción", price: "4 $", 
        image: "https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/03/Bunuelos-de-bacalao-esponjosos-y-crujientes-por-fuera.-Receta-tradicional.jpg", quantity: 1 },
      { idProduct: "007", name: "Croquetas de jamon", description: "Descripción", price: "4 $", 
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBE9n13yJQjYNE63R2318tlwy31FM1BtfHcDKh9_gjcqOoRaI8DSW1SnfCYYtVUR46OC25SNELEVNq6lduyWA10S-dNOz2wH3cJ7vAQL6OaBmVRL6C86EmjDH1gzsNNnLy9D6QdSVX83mQ/s1600/croquetas+de+jamon+3.JPG", quantity: 1 },
      { idProduct: "008", name: "Cesar salad", description: "Descripción", price: "4 $", 
        image: "https://imag.bonviveur.com/ensalada-cesar-casera.jpg", quantity: 1 },
    ],
    Principales: [
      { idProduct: "009", name: "c-Burguer", description: "Descripción", price: "4 $", 
        image: "https://plazaprincipal.com.co/wp-content/uploads/2021/04/SUPER-HAMBUERGUESA-DE-LA-CASA-X-300-GRS-02.jpeg", quantity: 1 },
      { idProduct: "010", name: "Solomillo a la pimienta", description: "Descripción", price: "4 $", 
        image: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2015/05/solomillo-con-salsa-de-pimienta.jpg", quantity: 1 },
      { idProduct: "011", name: "Risotto trufado", description: "Descripción", price: "4 $", 
        image: "https://content-cocina.lecturas.com/medio/2021/10/19/risotto-de-boletus-con-trufa_c4844e44_1200x1200.jpg", quantity: 1 },
      { idProduct: "012", name: "Bacalao al Pil-Pil", description: "Descripción", price: "4 $", 
        image: "https://i.ytimg.com/vi/tQXLOFzrIKw/maxresdefault.jpg", quantity: 1 },
    ],
    Postres: [
      { idProduct: "013", name: "Cheesecake", description: "Descripción", price: "4 $", 
        image: "https://lacocinademimadre.es/wp-content/uploads/2018/10/tarta-queso.jpg", quantity: 1 },
      { idProduct: "014", name: "Coulant", description: "Descripción", price: "4 $", 
        image: "https://www.cocinatis.com/archivos/202207/CTIS0129-receta-coulant-de-chocolate_large_16x9.jpg", quantity: 1 },
      { idProduct: "015", name: "Tiramisu", description: "Descripción", price: "4 $", 
        image: "https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg", quantity: 1 },
      { idProduct: "016", name: "Flan casero", description: "Descripción", price: "4 $", 
        image: "https://imag.bonviveur.com/flan-de-huevo-listo-para-degustar.jpg", quantity: 1 },
    ],
  };

  const handleAddItem = (item) => {
    actions.addSelectedItems(item);

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
            onChange={(e) => item.quantity = e.target.value}
          />
          <button className="button2" onClick={() => handleAddItem(item)}>Cargar</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="menu-container col-md-9 mx-auto">
      <h1 className="menu-title">Menú seleccionado: {store.selectedMenu}</h1>

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

