import React from "react";

const CardMenu = ({ menu }) => {
    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">{menu.menuName}</h5>
                <p className="card-text">Número de mesas: {menu.tablesCount}</p>
                <p className="card-text">Secciones: {Object.keys(menu.sections).filter(key => menu.sections[key]).join(", ")}</p>
                <p className="card-text">Otros: {menu.otherSection}</p>
            </div>
        </div>
    );
};

export default CardMenu;
