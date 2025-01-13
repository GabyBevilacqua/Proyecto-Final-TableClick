import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { TabsMenu } from "../component/tabsMenu";

// aqui estara el dropdown para hacer los pedidos

export const TableMenu = () => {

    return (
        <>
            <div className="text-center">
                <Link to="/secLogin">
                    <button className="btn">
                        Return to secLogin
                    </button>
                </Link>
            </div>
            <div>
                <TabsMenu />
            </div>
        </>
    );
};