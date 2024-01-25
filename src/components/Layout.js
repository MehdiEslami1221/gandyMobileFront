import {Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import 'react-popper';
import SwiperSlider from "./SwiperSlider";
import CircularMenu from "./CircularMenu";
import ColumnMenu from "./ColumnMenu";
import GroupMenu from "./GroupMenu";
import ProductOffer from "./ProductOffer";
import AdvertisingSection from "./AdvertisingSection";
import OffersRow from "./OffersRow";
import NewsArticles from "./NewsArticles";
import Footer from "./Footer";
import FeatureFilter from "./FeatureFilter";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";
import PurchaseInformation from "./PurchaseInformation";
import SwiperProduct from "./SwiperProduct";
import LatestProducts from "./LatestProducts";
import {getWebInfo} from "../services/Service";
import React, {useEffect, useState} from "react";
import TopMenuBar from "./TopMenuBar";


const Layout = () => {

    const [webinfo, setWebInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {

                const {data: webInfoData} = await getWebInfo();
                setWebInfo(webInfoData)

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);


    return (

        <div className="container-fluid m-0 p-0">
            <>
                <TopMenuBar/>
                <SearchBar data={webinfo}/>
                <MenuBar/>
                <SwiperSlider/>
                <div className="container">
                    <PurchaseInformation/>
                    <CircularMenu/>
                    <SwiperProduct/>
                    <ColumnMenu/>
                    <LatestProducts/>
                    <GroupMenu/>
                    <AdvertisingSection/>
                    <ProductOffer/>
                    <OffersRow/>
                    <FeatureFilter/>
                    <NewsArticles/>
                </div>
                <Footer data={webinfo}/>
                <Outlet/>
            </>
        </div>


    )
};

export default Layout;