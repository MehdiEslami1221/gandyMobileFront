import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";


const ImagesProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>
            <div className="w-50">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg"/>
                    </SwiperSlide>
                </Swiper>

            </div>



                <Swiper
                    onSwiper={setThumbsSwiper}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}>
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{height:'75px',width:'75px'}}/>
                    </SwiperSlide>


                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{height:'75px',width:'75px'}}/>
                    </SwiperSlide>

                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{height:'75px',width:'75px'}}/>
                    </SwiperSlide>
                </Swiper>

        </>
    )
}

export default ImagesProduct