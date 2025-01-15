import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { ModalItems } from "../modals/modalItems";
import "../../../styles/home.css";
import "../../../styles/menuItems.css";

export const CardsItem2 = () => {
  const { store } = useContext(Context); // Acceder al estado global

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
              <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button>
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
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
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
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                                </div>
                  </div>
                </li>
              ))}
              
            </ul>
          </div>
          
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
              <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button>
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
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
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
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                                </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
              <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button>
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
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
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
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                                </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
            
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
              <h2 className="card-title col-8 m-0">Postre:</h2>
              <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button>
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
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
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
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                                </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
      <ModalItems />
    </>
  );
};
{/* <>
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
              <button
                type="button"
                className="button3 col-4 justify-content-end"
                onClick={(e) => e.stopPropagation()}
              >
                Borrar
              </button>
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
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
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
                                <button type="button" className="btn-close button33 col-2" data-bs-dismiss="modal"
                                    onClick={(e) => e.stopPropagation()}
                                ></button>
                                </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ModalItems />
    </> */}
















      {/* <div className="card cardItems col-4 me-1 mb-1 rounded-4 p-0" 
                    type="button" 
                    onClick={() => {
                        // Abrir el modal manualmente
                        const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                        modal.show();
                      }}
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