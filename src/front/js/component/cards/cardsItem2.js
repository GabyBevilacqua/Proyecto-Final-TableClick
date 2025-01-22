import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { ModalItems } from "../modals/modalItems";
import "../../../styles/home.css";
import "../../../styles/menuItems.css";

export const CardsItem2 = () => {
  const { store } = useContext(Context);

  return (
    <>
      <div className="container">
     

        <div className="bodyCardItems row g-2 m-0">
          <div
            className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
            type="button"
            onClick={() => {
              const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
              modal.show();
            }}
            style={{ width: "26.72rem" }}
          >
            <div className="card-body d-flex">
              <h2 className="card-title col-8 m-0">Bebidas:</h2>
            </div>
            <ul className="ulMenuItems list-group list-group-flush">
              {store.items.map((item, index) => (
                <li
                  key={index}
                  className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1"
                >
                  <div className="col-3 d-flex justify-content-center">
                    {item.image ? (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No Img
                      </div>
                    )}
                  </div>
                  <div className="col-9">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-1 text-muted">{item.description || "Sin descripción"}</p>
                    <strong>{item.price} €</strong>
                    <div className="d-flex justify-content-end">
                      <button href="#" className=" button2 col-5"
                        onClick={(e) => e.stopPropagation()}
                      >Editar</button>
                      <div>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://tenda.elmasove.com/wp-content/uploads/2020/01/veri.png"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">AGUA</h4>
                  <p className="mb-1 text-muted"> 1L </p>
                  <strong>3,00€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://yt3.googleusercontent.com/8fMR1gkzE7hf2sugNVo8Kjiykh8IoUZ1ICQ_-T0tZ6OZt9s13l1aLiTVTmJy4oQtumcmORD1=s900-c-k-c0x00ffffff-no-rj"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">CERVEZA</h4>
                  <p className="mb-1 text-muted"> 33Cl </p>
                  <strong>3,00€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://www.greekorico.com/wp-content/uploads/sites/652/2022/10/fanta-limon.png"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1 col-11">FANTA</h4>
                  <p className="mb-1 text-muted"> 50cl </p>
                  <strong>2,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://www.lasansi.com/media/items/big/3c2c7-logomarcas-aquarius-naranja.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1 col-11">AQUARIUS</h4>
                  <p className="mb-1 text-muted"> 33cl </p>
                  <strong>2,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://yt3.googleusercontent.com/X9psilJdOXeD2-TrXTCBeFKN3In4v-ltfPypUYQst7wZAxM1f7EmQKjmaQLyNe8lRLaFvqlE=s900-c-k-c0x00ffffff-no-rj"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1 col-11">CERVEZA 0,0</h5>
                  <p className="mb-1 text-muted"> 33cl </p>
                  <strong>2,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">COCA COLA</h4>
                  <p className="mb-1 text-muted"> 33cl </p>
                  <strong>2,80€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div
            className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
            type="button"
            onClick={() => {
              const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
              modal.show();
            }}
            style={{ width: "26.72rem" }}
          >
            <div className="card-body d-flex">
              <h2 className="card-title col-8 m-0">Entrantes:</h2>
              {/* <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button> */}
            </div>
            <ul className="ulMenuItems list-group list-group-flush">
              {store.items.map((item, index) => (
                <li
                  key={index}
                  className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1"
                >
                  <div className="col-3 d-flex justify-content-center">
                    {item.image ? (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No Img
                      </div>
                    )}
                  </div>
                  <div className="col-9">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-1 text-muted">{item.description || "Sin descripción"}</p>
                    <strong>{item.price} €</strong>
                    <div className="d-flex justify-content-end">
                      <button href="#" className=" button2 col-5"
                        onClick={(e) => e.stopPropagation()}
                      >Editar</button>
                      <div>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4" >
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://mandolina.co/wp-content/uploads/2024/08/Bruschetta_de_tomates_cherry_y_mozzarella-1200x675.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5" >
                  <h5 className="mb-1" >BRUSHETA</h5>
                  <p className="mb-1 text-muted" style={{ width: "195px" }} > Pan asado frotado con ajo y cubierto con AOVE . 2uds</p>
                  <strong>6,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/03/Bunuelos-de-bacalao-esponjosos-y-crujientes-por-fuera.-Receta-tradicional.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">BUÑUELOS DE BACALAO</h5>
                  <p className="mb-1 text-muted"> 5 uds </p>
                  <strong>9,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBE9n13yJQjYNE63R2318tlwy31FM1BtfHcDKh9_gjcqOoRaI8DSW1SnfCYYtVUR46OC25SNELEVNq6lduyWA10S-dNOz2wH3cJ7vAQL6OaBmVRL6C86EmjDH1gzsNNnLy9D6QdSVX83mQ/s1600/croquetas+de+jamon+3.JPG"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">CROQUETAS DE JAMON</h5>
                  <p className="mb-1 text-muted"> 4uds </p>
                  <strong>8,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://imag.bonviveur.com/ensalada-cesar-casera.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">CESAR SALAD</h5>
                  <p className="mb-1 text-muted" style={{ width: "195px" }}>Lechuga, crutones, pollo, parmesano y salsa cremosa. </p>
                  <strong>11,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}

                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://tartardesalmon.com/img/elaboracion-tartar-de-salmo-n-ahumado-con-aguacate-769.webp"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">TARTAR DE SALMON</h5>
                  <p className="mb-1 text-muted">Con aguacate y soja </p>
                  <strong>14,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div
            className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
            type="button"
            onClick={() => {
              const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
              modal.show();
            }}
            style={{ width: "26.72rem" }}
          >
            <div className="card-body d-flex">
              <h2 className="card-title col-8 m-0">Principales:</h2>
              {/* <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button> */}
            </div>
            <ul className="ulMenuItems list-group list-group-flush">
              {store.items.map((item, index) => (
                <li
                  key={index}
                  className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1"
                >
                  <div className="col-3 d-flex justify-content-center">
                    {item.image ? (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No Img
                      </div>
                    )}
                  </div>
                  <div className="col-9">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-1 text-muted">{item.description || "Sin descripción"}</p>
                    <strong>{item.price} €</strong>
                    <div className="d-flex justify-content-end">
                      <button href="#" className=" button2 col-5"
                        onClick={(e) => e.stopPropagation()}
                      >Editar</button>
                      <div>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://plazaprincipal.com.co/wp-content/uploads/2021/04/SUPER-HAMBUERGUESA-DE-LA-CASA-X-300-GRS-02.jpeg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">C-BURGUER</h5>
                  <p className="mb-1 text-muted" style={{ width: "195px" }}> Lechuga, tomate, 180g de carne queso </p>
                  <strong>16,00€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2015/05/solomillo-con-salsa-de-pimienta.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">SOLOMILLO A LA PIMIENTA</h5>
                  <p className="mb-1 text-muted"> Solomillo con salsa aromática de pimienta verde </p>
                  <strong>22,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://content-cocina.lecturas.com/medio/2021/10/19/risotto-de-boletus-con-trufa_c4844e44_1200x1200.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">RISOTTO TRUFADO</h5>
                  <p className="mb-1 text-muted">  Arroz cremoso con parmesano y trufa. </p>
                  <strong>19,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://i.ytimg.com/vi/tQXLOFzrIKw/maxresdefault.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">BACALAO AL PIL-PIL</h5>
                  <p className="mb-1 text-muted">  Bacalao en emulsión de ajo, guindilla y aceite </p>
                  <strong>20,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


          <div
            className="card cardItems col-4 me-1 mb-1 rounded-4 p-0"
            type="button"
            onClick={() => {
              const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
              modal.show();
            }}
            style={{ width: "26.72rem" }}
          >
            <div className="card-body d-flex">
              <h2 className="card-title col-8 m-0"> Postre:</h2>
              {/* <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button> */}
            </div>
            <ul className="ulMenuItems list-group list-group-flush">
              {store.items.map((item, index) => (
                <li
                  key={index}
                  className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1"
                >
                  <div className="col-3 d-flex justify-content-center">
                    {item.image ? (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No Img
                      </div>
                    )}
                  </div>
                  <div className="col-9">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-1 text-muted">{item.description || "Sin descripción"}</p>
                    <strong>{item.price} €</strong>
                    <div className="d-flex justify-content-end">
                      <button href="#" className=" button2 col-5"
                        onClick={(e) => e.stopPropagation()}
                      >Editar</button>
                      <div>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                        <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                          onClick={(e) => e.stopPropagation()}
                        ></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://lacocinademimadre.es/wp-content/uploads/2018/10/tarta-queso.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">CHEESECAKE</h4>
                  <p className="mb-1 text-muted"> Cremosa con mermelada de frutos arandanos.</p>
                  <strong>6,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://www.cocinatis.com/archivos/202207/CTIS0129-receta-coulant-de-chocolate_large_16x9.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">COULANT</h4>
                  <p className="mb-1 text-muted"> Bizcocho con centro fundido y helado. </p>
                  <strong>8,00€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">TIRAMISÚ</h4>
                  <p className="mb-1 text-muted"> Mascarpone, café y bizcochos con cacao </p>
                  <strong>7,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
              <li className="liMenuItems list-group-item row d-flex align-items-flex-start p-0 ms-1 rounded-4">
                <div className="col-3 d-flex justify-content-center">
                  <img
                    src="https://imag.bonviveur.com/flan-de-huevo-listo-para-degustar.jpg"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", marginTop: "5px", marginBottom: "5px" }}
                  />
                </div>

                <div className="col-5">
                  <h4 className="mb-1">FLAN CASERO</h4>
                  <p className="mb-1 text-muted"> Flan cremoso con caramelo líquido. </p>
                  <strong>5,50€</strong>
                </div>
                <div className="d-flex justify-content-end col-4">
                  <button href="#" className=" button2 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >Editar</button>
                  <div>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                    <button type="button" className="btn-close button33" data-bs-dismiss="modal"
                      onClick={(e) => e.stopPropagation()}
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <ModalItems />
    </>
  );
};






















{/* <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 

                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Entrantes:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>

                    <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Principales:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>

                    <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
                    style={{ width: '26.72rem' }}>
                        <div className="card-body d-flex" >
                            <h2 className="card-title col-8 m-0">Postre:</h2>
                            <button type="button" className="btn button3  btn-sm rounded-0 col-4 justify-content-end"
                            onClick={(e) => e.stopPropagation()} // Evitar que propague el clic al div
                            >Borrar</button>
                        </div>
                        <ul className="ulMenuItemslist-group list-group-flush">
                            <li className="liMenuItems list-group-item border-top border-bottom row d-flex justify-content-center">
                                <h4 className="col-5">Item 01</h4>
                                <button  href="#" className="btn button2 col-5"
                                onClick={(e) => e.stopPropagation()}
                                >Editar</button>
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                onClick={(e) => e.stopPropagation()}
                                ></button>
                                </li>
                        </ul>
                    </div>*/}
