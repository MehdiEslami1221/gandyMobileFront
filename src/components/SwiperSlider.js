import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Autoplay, Navigation, Pagination} from "swiper/modules";
import React, {useEffect, useState} from "react";
import {getAllSlider, SERVER_URL} from "../services/Service";


const SwiperSlider = () => {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getAllSlider();
                setSlider(dataSlider)
                console.log(slider)
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

            {slider?.length > 0
                ? slider?.map((item, id) =>
                    <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <img
                                style={{objectFit: "cover"}}
                                className="card-img w-100 h-100"
                                src={SERVER_URL+'upload/files/'+item.image}
                                alt="..."/>

                    </SwiperSlide>
                )
                : (
                    <h1>no item</h1>
                )}


        </Swiper>
    );
}


export default SwiperSlider;