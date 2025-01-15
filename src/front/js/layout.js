import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { PreLogin } from "./pages/preLogin";
import { RestRegister } from "./pages/restRegister";
import { MenusView } from "./pages/menusView";
import { MenuItems } from "./pages/menuItems";
import { DiningView } from "./pages/diningView";
import { SecLogin } from "./pages/secLogin";
import { TableMenu } from "./pages/tableMenu";
import { EditUser } from "./pages/editUser";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<PreLogin />} path="/" />
                        <Route element={<RestRegister />} path="/restRegister" />
                        <Route element={<MenusView />} path="/menusView" />
                        <Route element={<MenuItems />} path="/menuItems" />
                        <Route element={<DiningView />} path="/diningView" />
                        <Route element={<SecLogin />} path="/secLogin" />
                        <Route element={<EditUser />} path="/editUser" />
                        <Route element={<TableMenu />} path="/tableMenu" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
