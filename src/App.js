import {Route, Routes} from "react-router-dom";
import React from "react";
import {ShopContextProvider} from "./context/ShopContext";
import Layout from "./components/Layout";
import  './index.css'
import InternalPage from "./components/InternalPage";


export default function App() {
    return (
        <ShopContextProvider>
            <Routes>
                <Route index element={<Layout/>}/>
                <Route path="internal" element={<InternalPage />} />
            </Routes>
        </ShopContextProvider>

    );
}
