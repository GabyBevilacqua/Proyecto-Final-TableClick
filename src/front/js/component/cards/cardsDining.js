import React from "react";


export const CardsDining = ({ title, content, buttonLabel, onButtonClick }) => {
    

    

    return (
        <div className="card cardDining">
            <h3>{title}</h3>
            <p>{content}</p>
            <button 
            className="button2"
            onClick={onButtonClick}>{buttonLabel}</button>
        </div>
    );
};