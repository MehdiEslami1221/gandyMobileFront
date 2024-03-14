import {Outlet, Route, Routes} from "react-router-dom";
import React from "react";
import {ShopContextProvider} from "./context/ShopContext";
import Layout from "./components/Layout";
import './index.css'
import TopMenuBar from "./components/TopMenuBar";
import SearchBar from "./components/SearchBar";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import ThumbsGallery from "./components/ThumbsGallery";
import ProductList from "./components/ProductList";
import NoPage from "./components/NoPage";
import ShowAllProducts from "./pages/ShowAllProducts";
import ShowAllLatestProducts from "./pages/ShowAllLatestProducts";
import ShowAllProductsCircularMenu from "./pages/ShowAllProductsCircularMenu";
import SendMobile from "./components/SendMobile";
import ReceiveCode from "./components/ReceiveCode";
import GandiCart from "./components/GandiCart";
import Profile from "./components/Profile";
import {ToastContainer} from "react-toastify";
import OrderAddress from "./components/OrderAddress";
import CategoryMenu from "./components/CategoryMenu";
import Offcanvas from "./components/Offcanvas";

import "./radioStyle.css";
import GandiPayment from "./components/GandiPayment";

export default function App() {


    return (
        <ShopContextProvider>
            <ToastContainer/>
            {/*<TopMenuBar/>*/}
            <Offcanvas/>
            <SearchBar/>
            <CategoryMenu/>
            <Routes>
                <Route index element={<Layout/>}/>
                <Route path="/login" element={<SendMobile />} />
                <Route path="/receiveCode" element={<ReceiveCode />} />
                <Route path="internal/:id" element={<ThumbsGallery/>}/>
                <Route path="product/:productName" element={<ProductList/>}/>
                <Route path="productAll" element={<ShowAllProducts/>}/>
                <Route path="latestProducts" element={<ShowAllLatestProducts/>}/>
                <Route path="productTypeProducts/:id" element={<ShowAllProductsCircularMenu/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="gandiCart" element={<GandiCart/>}/>
                <Route path="orderAddress" element={<OrderAddress/>}/>
                <Route path="gandiPayment" element={<GandiPayment/>}/>
                <Route path="*" element={<NoPage />}/>
            </Routes>
            <Footer/>
            <Outlet/>
        </ShopContextProvider>

    );
}
