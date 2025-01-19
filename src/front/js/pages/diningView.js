import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/diningView.css";
import { Link, useNavigate } from "react-router-dom";
import { CardsDining } from "../component/cards/cardsDining";

// aqui usaremos cardsDining.js

export const DiningView = () => {
    const { store, actions } = useContext(Context); // Accede al store global

    const tables = [
        { title: "Mesa 01", content: "Cliente mesa01001", buttonLabel: "Cerrar" },
        { title: "Mesa 02", content: "Cliente mesa02001 abierto\nPedidos: 3\nSubtotal: $45", buttonLabel: "Cerrar" },
        { title: "Mesa 03", content: "Cliente mesa03001 cerrado", buttonLabel: "Cerrar" },
        { title: "Mesa 04", content: "Cliente mesa04001 abierto\nPedidos: 2\nSubtotal: $30", buttonLabel: "Cerrar" },
        { title: "Mesa 05", content: "Cliente mesa05001 cerrado", buttonLabel: "Cerrar" }
    ];

    return (
        <div>
            <div className="container containerDining">

            {tables.map((table, index) => (
                    <CardsDining
                        key={index}
                        title={table.title}
                        content={
                            table.title === "Mesa 01" && store.tablesOrders["Mesa 01"].length > 0 ? (
                                <div>
                                    <p>Cliente mesa01001</p>
                                    <ul>
                                        {store.tablesOrders["Mesa 01"].map((order, idx) => (
                                            <li key={idx}>
                                                {order.idProduct} {order.name} (Cantidad: {order.quantity})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                table.content
                            )
                        }
                        buttonLabel={table.buttonLabel}
                        onButtonClick={() => {
                            if (table.title === "Mesa 01") {
                                actions.clearTableOrders("Mesa 01"); // Limpia los pedidos de Mesa 01
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

/* 


 <div className="container containerDining">
                
                {tables.map((table, index) => (
                    <CardsDining
                        key={index}
                        title={table.title}
                        content={table.content}
                        buttonLabel={table.buttonLabel}
                        onButtonClick={() => console.log(`${table.title} cerrado`)}
                    />
                ))}
            </div>


*/