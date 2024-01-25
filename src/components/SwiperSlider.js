import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Autoplay, Navigation, Pagination} from "swiper/modules";
import React, {useEffect, useState} from "react";
import {getAllSlider} from "../services/Service";


const SwiperSlider = () => {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getAllSlider();
                setSlider(dataSlider)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            centeredSlides={true}
            slidesPerView={1}
            navigation={false}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            dir="rtl"
            pagination={{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {/*{list?.length > 0*/}
            {/*    ? list?.map((item, id) =>*/}
            {/*        <SwiperSlide className="d-flex justify-content-center align-items-center">*/}
            {/*                <img*/}
            {/*                    style={{objectFit: "cover"}}*/}
            {/*                    className="card-img w-100 h-100"*/}
            {/*                    src={item.image}*/}
            {/*                    alt="..."/>*/}

            {/*        </SwiperSlide>*/}
            {/*    )*/}
            {/*    : (*/}
            {/*        <h1>no item</h1>*/}
            {/*    )}*/}


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-flex justify-content-center align-items-center h-100">
                    <img
                        style={{objectFit: "cover"}}
                        className="card-img w-100 h-100"
                        src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4689fe062122ccbc8a4c5c2c3325641283523589_1704107748.jpg?x-oss-process=image/quality,q_95/format,webp"
                        alt="..."/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-flex justify-content-center align-items-center h-100">
                    <img
                        style={{objectFit: "cover"}}
                        className="card-img w-100 h-100"
                        src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1772946ee187760c44ae02400883e4ef73de7a58_1703928825.jpg?x-oss-process=image/quality,q_95/format,webp"
                        alt="..."/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-flex justify-content-center align-items-center h-100">
                    <img
                        style={{objectFit: "cover"}}
                        className="card-img w-100 h-100"
                        src="https://dkstatics-public.digikala.com/digikala-adservice-banners/fab7513437b668b4332c7e14dd9ecaee34b949a6_1704034577.jpg?x-oss-process=image/quality,q_95/format,webp"
                        alt="..."/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-flex justify-content-center align-items-center h-100">
                    <img
                        style={{objectFit: "cover"}}
                        className="card-img w-100 h-100"
                        src="https://dkstatics-public.digikala.com/digikala-adservice-banners/7ffc810ff93f12e70f4b67da0012c5a7d75ec91b_1704112209.jpg?x-oss-process=image/quality,q_95/format,webp"
                        alt="..."/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-flex justify-content-center align-items-center h-100">
                    <img
                        style={{objectFit: "cover"}}
                        className="card-img w-100 h-100"
                        src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5d30f3102e7a09cbfaabd5804903d1707082d842_1703313533.gif?x-oss-process=image?x-oss-process=image/format,webp"
                        alt="..."/>
                </a>
            </SwiperSlide>


        </Swiper>
    );
}


export default SwiperSlider;