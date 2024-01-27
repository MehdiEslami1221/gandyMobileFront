import {Route, Routes} from "react-router-dom";
import React from "react";
import {ShopContextProvider} from "./context/ShopContext";
import Layout from "./components/Layout";
import  './index.css'


export default function App() {
    return (
        <ShopContextProvider>
            <Routes>
                <Route index element={<Layout/>}/>
            </Routes>
        </ShopContextProvider>

    );
}
