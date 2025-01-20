import React, { useState, useContext } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../../store/appContext";
import { ModalItems } from "../modals/modalItems";
import "../../../styles/home.css";
import "../../../styles/menuItems.css";


export const CardsItem3 = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const { store } = useContext(Context);

    // const menuData = {
    //     Bebidas: [
    //         {
    //             idProduct: "001", name: "Agua", description: "1L", price: "2,00€",
    //             image: "https://tenda.elmasove.com/wp-content/uploads/2020/01/veri.png", quantity: 1
    //         },
    //         {
    //             idProduct: "002", name: "Cerveza", description: "33Cl", price: "3,00€",
    //             image: "https://yt3.googleusercontent.com/8fMR1gkzE7hf2sugNVo8Kjiykh8IoUZ1ICQ_-T0tZ6OZt9s13l1aLiTVTmJy4oQtumcmORD1=s900-c-k-c0x00ffffff-no-rj", quantity: 1
    //         },
    //         {
    //             idProduct: "003", name: "Fanta", description: "33Cl", price: "2,50€",
    //             image: "https://www.greekorico.com/wp-content/uploads/sites/652/2022/10/fanta-limon.png", quantity: 1
    //         },
    //         {
    //             idProduct: "004", name: "Acuarius", description: "33Cl", price: "2,50€",
    //             image: "https://www.lasansi.com/media/items/big/3c2c7-logomarcas-aquarius-naranja.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "017", name: "Cerveza 0,0", description: "33Cl", price: "3,00€",
    //             image: "https://yt3.googleusercontent.com/X9psilJdOXeD2-TrXTCBeFKN3In4v-ltfPypUYQst7wZAxM1f7EmQKjmaQLyNe8lRLaFvqlE=s900-c-k-c0x00ffffff-no-rj", quantity: 1
    //         },
    //         {
    //             idProduct: "018", name: "Coca-cola", description: "33Cl", price: "2,80€",
    //             image: "https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg", quantity: 1
    //         },
    //     ],
    //     Entrantes: [
    //         {
    //             idProduct: "005", name: "Bruschetta", description: "Pan asado frotado con ajo y cubierto con AOVE . 2uds", price: "6,50€",
    //             image: "https://mandolina.co/wp-content/uploads/2024/08/Bruschetta_de_tomates_cherry_y_mozzarella-1200x675.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "006", name: "Buñuelos de bacalao", description: "5 uds", price: "9,50€",
    //             image: "https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/03/Bunuelos-de-bacalao-esponjosos-y-crujientes-por-fuera.-Receta-tradicional.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "007", name: "Croquetas de jamon", description: "4uds", price: "8,50€",
    //             image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBE9n13yJQjYNE63R2318tlwy31FM1BtfHcDKh9_gjcqOoRaI8DSW1SnfCYYtVUR46OC25SNELEVNq6lduyWA10S-dNOz2wH3cJ7vAQL6OaBmVRL6C86EmjDH1gzsNNnLy9D6QdSVX83mQ/s1600/croquetas+de+jamon+3.JPG", quantity: 1
    //         },
    //         {
    //             idProduct: "008", name: "Cesar salad", description: "Lechuga, crutones, pollo, parmesano y salsa cremosa.", price: "11,50",
    //             image: "https://imag.bonviveur.com/ensalada-cesar-casera.jpg", quantity: 1
    //         },
    //     ],
    //     Principales: [
    //         {
    //             idProduct: "009", name: "c-Burguer", description: "Lechuga, tomate, 180g de carne queso.", price: "16,00€",
    //             image: "https://plazaprincipal.com.co/wp-content/uploads/2021/04/SUPER-HAMBUERGUESA-DE-LA-CASA-X-300-GRS-02.jpeg", quantity: 1
    //         },
    //         {
    //             idProduct: "010", name: "Solomillo a la pimienta", description: "Solomillo con salsa aromática de pimienta verde", price: "22,50€",
    //             image: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2015/05/solomillo-con-salsa-de-pimienta.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "011", name: "Risotto trufado", description: "Arroz cremoso con parmesano y trufa.", price: "19,50€",
    //             image: "https://content-cocina.lecturas.com/medio/2021/10/19/risotto-de-boletus-con-trufa_c4844e44_1200x1200.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "012", name: "Bacalao al Pil-Pil", description: "Bacalao en emulsión de ajo, guindilla y aceite", price: "20,50€",
    //             image: "https://i.ytimg.com/vi/tQXLOFzrIKw/maxresdefault.jpg", quantity: 1
    //         },
    //     ],
    //     Postres: [
    //         {
    //             idProduct: "013", name: "Cheesecake", description: "Cremoso con mermelada de frutos arandanos.", price: "6,50€",
    //             image: "https://lacocinademimadre.es/wp-content/uploads/2018/10/tarta-queso.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "014", name: "Coulant", description: "Bizcocho con centro fundido y helado.", price: "8,00€",
    //             image: "https://www.cocinatis.com/archivos/202207/CTIS0129-receta-coulant-de-chocolate_large_16x9.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "015", name: "Tiramisu", description: "Mascarpone, café y bizcochos con cacao.", price: "7,50€",
    //             image: "https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg", quantity: 1
    //         },
    //         {
    //             idProduct: "016", name: "Flan casero", description: "Flan cremoso con caramelo líquido.", price: "5,50€",
    //             image: "https://imag.bonviveur.com/flan-de-huevo-listo-para-degustar.jpg", quantity: 1
    //         },
    //     ],
    // };

    const handleAddItem = (item, quantity) => {
        setSelectedItems([...selectedItems, { ...item, quantity }]);
    };

    const renderItems = (items) => {
        return store.items.map((item, index) => (
            <div className="container">
                <div className="bodyCardItems row g-2 m-0">

                    <div key={index} className="card cardItems col-3 me-1 mb-1 rounded-4 p-0"
                        type="button"
                        onClick={() => {
                            const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
                            modal.show();
                        }}
                        style={{ width: "26.72rem" }}
                    >
                        <ul className="ulMenuItems list-group list-group-flush">
                            {store.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="liMenuItems list-group-item p-0 rounded-4"
                                >
                                    <div className="">
                                        {item.image ? (
                                            <img className=' card44 rounded-top-4 rounded-bottom-0 justify-content-center' src={item.image} style={{ width: "259px", height: "120px", objectFit: "cover" }} />
                                        ) : (
                                            <img className='card44 rounded-top-4 rounded-bottom-0 justify-content-center' src="https://www.holoimage.net/images/no-image.jpg" style={{ width: "259px", height: "120px", objectFit: "cover" }} />
                                        )}
                                        </div>
                                    <div className="menu-item-info d-flex mb-0">
                                        <h3 className='card__title44 col-9 ms-2 mt-1 mb-2'>{item.name}</h3> <p className='ms-3 mt-1 mb-2'>#{item.idProduct}</p>
                                    </div>
                                    <p className='card__description44 ms-2 mt-0'>{item.description}</p>
                                    <strong className='ms-2'>{item.price}</strong>
                                </li>
                            ))}

                            <div className="d-flex justify-content-center align-items-center gap-2 mt-2 mb-2">

                                <div className="toggler text-start ms-0 mt-2 me-2 mb-2 col-3"
                                    onClick={(e) => e.stopPropagation()}>
                                    <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                    <label for="toggler-1">
                                        <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                        </svg>
                                        <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                        </svg>
                                    </label>
                                </div>

                                <button className="noselect mx-auto ms-0 me-0 mt-0 col-5"
                                    onClick={(e) => e.stopPropagation()}>
                                    <span className="text">Delete</span>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

                                            </path>
                                        </svg>
                                    </span>
                                </button>



                                <button class="edit-button mt-0"
                                    onClick={(e) => e.stopPropagation()}>
                                    <svg class="edit-svgIcon" viewBox="0 0 512 512">
                                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                    </svg>
                                </button>
                            </div>

                        </ul>
                    </div>


                </div>
            </div>
        ));
    };

    return (
        <>


            <div className="container">
                <div className=" row g-2 m-0">
                    <div className="d-flex flex-wrap justify-content-between ">
                        {Object.keys(store.items).map((category, idx) => (
                            <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" style={{ width: '18rem' }} key={idx}>
                                <div className="card cardItems rounded-4">
                                    <h2 className="card-title text-center">{category}</h2>
                                    <div>{renderItems(store.items)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};






// <div class="card44" style={{ width: "259px", height: "120px", objectFit: "cover" }}>
//                 <img className='rounded-top-4 rounded-bottom-0 justify-content-center' src={item.image}  />
//   <div class="card__content44">
//     <h3 className='card__title44 col-9 ms-2 mt-1 mb-2'>{item.name}</h3> <p className='ms-3 mt-1 mb-2'>#{item.idProduct}</p>
//     <p className='card__description44 ms-2 mt-0'>{item.description}</p>
//     <strong className='card__description44 ms-2'>{item.price}</strong>
//     <div className="d-flex justify-content-center align-items-center gap-2 mt-2 mb-2">

// <div class="toggler text-start ms-0 mt-2 me-2 mb-2 col-3"
//  onClick={(e) => e.stopPropagation()}>
//     <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
//     <label for="toggler-1">
//         <svg class="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
//             <polyline class="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
//         </svg>
//         <svg class="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
//             <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
//             <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
//         </svg>
//     </label>
// </div>

// <button className="noselect mx-auto ms-0 me-0 mt-0 col-4"
//  onClick={(e) => e.stopPropagation()}>
//     <span className="text">Delete</span>
//     <span className="icon">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

//             </path>
//         </svg>
//     </span>
// </button>



// <button class="edit-button mt-0"
//  onClick={(e) => e.stopPropagation()}>
//     <svg class="edit-svgIcon" viewBox="0 0 512 512">
//         <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
//     </svg>
// </button>
// </div>
//   </div>
// </div>