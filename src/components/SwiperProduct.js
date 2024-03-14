// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

import ProductItem from "../pages/ProductItem";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import imgShegeftangiz from "../assets/images/shegeftangiz.png";
import iconArrowCircleLeft from '../assets/icons/arrow-circle-left.svg';
import iconArrowLeftWhite from '../assets/icons/arrow-left-white.svg';
import {useEffect, useState} from "react";
import {getAllProduct, getAllSlider, getAmazingOffer} from "../services/Service";
import {Link} from "react-router-dom";


export default function SwiperProduct() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataOffer} = await getAmazingOffer();
                setProduct(dataOffer["productCountResponses"])
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (

        <Swiper
            slidesPerView={2}
            spaceBetween={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 1,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 1,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 1,
                },
            }}
            className="rounded-3 shadow bg-light">
            <SwiperSlide>
                <div className="col shadow-sm rounded-0 rounded-start-4 d-flex align-items-center text-center"
                     style={{backgroundColor: "#023375", height: '300px'}}>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-start ps-5">
                            <span className="fw-bold fs-4 text-light">پیشنهاد</span>
                            <span className="fw-bold fs-4 text-light">شگفت انگیر</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={imgShegeftangiz} alt="Shegeftangiz" style={{width: '50%'}}/>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link
                            key={1}
                            to={'/productAll'}
                           className="d-flex justify-content-center align-items-center mt-3 text-decoration-none link-light link-opacity-75-hover">
                            <span className="fs-6 me-2">مشاهده همه</span>
                            <img src={iconArrowLeftWhite} style={{width:'10%'}} alt="ArrowCircleLeft"/>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>


            {
                product.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductItem product={item}/>
                    </SwiperSlide>
                ))
            }


            <SwiperSlide>
                <div className="col shadow-sm rounded-0 rounded-end-4 bg-white d-flex align-items-center text-center"
                     style={{height: '300px'}}>
                    <div className="card-body">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

                        <Link
                            key={1}
                            to={'/productAll'}
                            className="d-flex flex-column align-items-center text-decoration-none">
                            <img src={iconArrowCircleLeft} alt="ArrowCircleLeft" style={{width: '20%'}}/>
                            <span className="text-black mt-3 fw-bold link-dark link-opacity-75-hover">مشاهده همه</span>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}