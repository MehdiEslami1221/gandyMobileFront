import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import imgShegeftangiz from "../assets/images/shegeftangiz.png";
import iconArrowCircleLeft from '../assets/icons/arrow-circle-left.svg';
import iconArrowLeft from '../assets/icons/arrow-left.svg';

const textTitle = "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - ویتنام"
// import required modules

const LatestProducts = () => {
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
                        <img src={imgShegeftangiz} alt="Shegeftangiz"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#"
                           className="d-flex justify-content-center align-items-center mt-3 text-decoration-none link-light link-opacity-75-hover">
                            <span className="fs-6 me-2 text-dark">مشاهده همه</span>
                            <img src={iconArrowLeft} alt="ArrowLeft"/>
                        </a>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/7dcffe4a7c034fe735efac4ff712bc5a45863181_1700901853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1690712123.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/9c38ffaf155414b0974c856d21a337b413b60cd1_1643793833.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/ad471d52115052c14a17dbeb99c48ea506c1bb8a_1650959811.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/80f51b575d49725769b045f4a1e1463daceb7f32_1692192934.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
                   style={{height: '300px'}}>
                    <div className="card-body overflow-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/7feb4cb3c37a28289c1bbd7d24f06b1dca5caa4d_1695733063.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                alt="Shegeftangiz" style={{width: '40%'}}/>
                            <dt className="col-10 text-truncate mt-3 text-dark">{textTitle}</dt>
                        </div>

                        <div className="d-flex flex-row align-items-center my-2">
                            <span className="col-2 badge bg-danger">60%</span>
                            <div className="d-flex flex-column col overflow-auto align-items-end">
                                <span className="fw-bold">200000</span>
                                <span className="text-secondary opacity-50"><s>30000</s></span>
                            </div>
                            <span className="col-3 align-items-start">تومان</span>
                        </div>

                        <span className="text-danger fw-bold">20:14:25</span>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide>
                <div className="col shadow-sm rounded-0 rounded-end-4 bg-white d-flex align-items-center text-center"
                     style={{height: '300px'}}>
                    <div className="card-body">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#"
                           className="d-flex flex-column align-items-center text-decoration-none">
                            <img src={iconArrowCircleLeft} alt="ArrowCircleLeft"/>
                            <span className="text-black mt-3 fw-bold link-dark link-opacity-75-hover">مشاهده همه</span>
                        </a>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}
export default LatestProducts;