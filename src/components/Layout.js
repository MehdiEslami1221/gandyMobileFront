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
import FeatureFilter from "./FeatureFilter";
import PurchaseInformation from "./PurchaseInformation";
import SwiperProduct from "./SwiperProduct";
import LatestProducts from "./LatestProducts";
import React from "react";


const
    Layout = () => {
        return (

            <div className="container-fluid m-0 p-0">
                <>
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

                </>
            </div>


        )
    };

export default Layout;