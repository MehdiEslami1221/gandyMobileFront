import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import imgShegeftangiz from "../assets/images/shegeftangiz.png";
import iconArrowCircleLeft from '../assets/icons/arrow-circle-left.svg';
import iconArrowLeft from '../assets/icons/arrow-left.svg';
import {getNewProduct} from "../services/Service";
import ProductItem from "../pages/ProductItem";
import {Link} from "react-router-dom";


const LatestProducts = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getNewProduct(6);
                setProduct(dataSlider['productCountResponses'])
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
                <div className="col shadow-sm rounded-0 rounded-start-4 bg-light d-flex align-items-center text-center"
                     style={{height: '300px'}}>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center">
                            <span className="fw-bold fs-5 text-dark">جدیدترین های</span>
                            <span className="fw-bold fs-5 text-dark">موبایل</span>
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <img src={imgShegeftangiz} alt="Shegeftangiz" style={{width: '50%'}}/>
                        </div>

                        <Link
                            key={1}
                            to={'/latestProducts'}
                            className="d-flex justify-content-center align-items-center mt-3 text-decoration-none link-dark link-opacity-75-hover">
                            <span className="fs-6 me-2">مشاهده همه</span>
                            <img src={iconArrowLeft} style={{width: '10%'}} alt="ArrowCircleLeft"/>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>


            {
                product?.map((item) => (
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
                            to={'/latestProducts'}
                            className="d-flex flex-column align-items-center text-decoration-none">
                            <img src={iconArrowCircleLeft} alt="ArrowCircleLeft" style={{width: '20%'}}/>
                            <span className="text-black mt-3 fw-bold link-dark link-opacity-75-hover">مشاهده همه</span>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}
export default LatestProducts;