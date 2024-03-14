import React, {useContext, useEffect, useState} from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './ThumbsGallery.css';


import iconStar from '../assets/icons/icon-star-pages.svg';
import iconShop from '../assets/icons/icon-shop-pages.svg';
import iconArrowDown from '../assets/icons/icon-arrow-down-pages.svg';
import iconShield from '../assets/icons/icon-shield-tick-posts.svg';
import 'react-toastify/dist/ReactToastify.css';

// import required modules
import PurchaseInformation from "./PurchaseInformation";
import LatestProducts from "./LatestProducts";
import {getByIdProduct, getImageProduct, getProductConfig, SERVER_URL} from "../services/Service";
import {useNavigate, useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs, Zoom} from "swiper/modules";

import iconHeart from '../assets/icons/icon-heart-pages.svg';
import iconShare from '../assets/icons/icon-share-pages.svg';
import iconNotif from '../assets/icons/icon-notif-pages.svg';
import iconMoghayese from '../assets/icons/icon-moghayese-pages.svg';
import iconChart from '../assets/icons/icon-chart-pages.svg';
import {ToastError} from "../utils/utils";
import {ShopContext} from "../context/ShopContext";

const colorStr = 'gold';

export default function ThumbsGallery() {
    const navigate = useNavigate();

    const [login] = useState(JSON.parse(localStorage.getItem('isLogin')) || false);


    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)


    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const param = useParams()
    const idProduct = parseInt(param.id)

    const [productItem, setProductItem] = useState([]);
    const [productCon, setProductConfig] = useState([]);
    const [productImages, setProductImages] = useState([]);


     const getProduct = async () => {
        try {
            const {data: dataProduct} = await getByIdProduct(idProduct);
            const {data: dataConfig} = await getProductConfig(idProduct);
            const {data: dataImages} = await getImageProduct(idProduct);
            setProductItem(dataProduct['productCountResponses'])
            setProductConfig(dataConfig)
            setProductImages(dataImages)
            setFilteredArray(dataProduct)
        } catch (err) {
            ToastError('ارتباط برقرار نشد!')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const asyncFn = async () => {
            await getProduct()
        };
        asyncFn().then(r => r);
    }, []);



    const [filteredArray, setFilteredArray] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                setFilteredArray((_) => {
                    return productItem.filter(item => item.color.includes(inputValue));
                });
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, [inputValue, productItem]);


    return (
        <div className="user-select-none container py-4">

            <div className="d-flex justify-content-center flex-column flex-lg-row">

                <div className="col-12 col-lg-4">
                    <div className="d-flex flex-row">
                        <div className="col-2 d-flex flex-column align-items-center">
                            <img className="my-3" style={{width: '30%'}} src={iconHeart}/>
                            <img className="my-3" style={{width: '30%'}} src={iconShare}/>
                            <img className="my-3" style={{width: '30%'}} src={iconNotif}/>
                            <img className="my-3" style={{width: '30%'}} src={iconMoghayese}/>
                            <img className="my-3" style={{width: '30%'}} src={iconChart}/>
                        </div>
                        <div className="col-10">
                            <div className="rounded-3 shadow py-4">
                                <Swiper
                                    spaceBetween={1}
                                    navigation={false}
                                    thumbs={{swiper: thumbsSwiper}}
                                    modules={[FreeMode, Navigation, Thumbs, Zoom]}
                                    className="mySwiper2">
                                    {
                                        productImages.map(item =>
                                            <SwiperSlide>
                                                <img src={SERVER_URL + 'upload/files/' + item.img}/>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>

                            <div className="rounded-3 shadow-sm p-2 my-2">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={1}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper">

                                    {
                                        productImages.map(item =>
                                            <SwiperSlide>
                                                <img src={SERVER_URL + 'upload/files/' + item.img}/>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-lg-5 my-3 px-3 my-lg-0">

                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-secondary">
                                <li className="breadcrumb-item text-secondary">اپل</li>
                                <li className="breadcrumb-item text-secondary active" aria-current="page">گوشی
                                    موبایل

                                    آپل
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="my-1">
                        <h5 className="h5">
                            {filteredArray[0]?.product?.name}
                        </h5>
                    </div>

                    <div>
                        <span className="text-secondary" style={{fontSize: '14px'}}>
                            {filteredArray[0]?.product?.description}
                        </span>
                    </div>

                    <div className="mt-3 mb-2">
                        <img src={iconStar}/>
                        <span className="mx-1">4.5</span>
                        <span className="mx-2">|</span>
                        <span className="mx-1">56 نظرات کاربران</span>
                    </div>

                    <div className="my-2">
                        <span className="">رنگ :</span>
                        <span className="mx-1 text-secondary">{filteredArray[0]?.color}</span>
                    </div>

                    <div className="d-flex flex-row justify-content-center my-3">
                        {
                            productItem?.map((item) => item.color).map(color =>
                                (
                                    productItem.length === 1 ?
                                        <input style={{width: '25px', height: '25px', backgroundColor: `${color}`}}
                                               className="form-check-input mx-2"
                                               type="radio" name="flexRadioDefault"
                                               disabled={true}
                                               onClick={() => {
                                                   setInputValue(color)
                                               }}
                                               id="flexRadioDefault1"/>
                                        : <input style={{width: '25px', height: '25px', backgroundColor: `${color}`}}
                                                 className="form-check-input mx-2"
                                                 type="radio" name="flexRadioDefault"
                                                 onClick={() => {
                                                     setInputValue(color)
                                                 }}
                                                 id="flexRadioDefault1"/>
                                )
                            )
                        }
                    </div>

                    <div className="my-2">
                        <span className="">گارانتی :</span>
                        <span className="mx-1 text-secondary">گارانتی اصلی (سازگار - حامی - آواژنگ)</span>
                    </div>

                    <div className="d-flex my-2">
                        <span className="">حافظه :</span>
                        <span className="mx-1 card px-2 text-secondary">128GB</span>
                    </div>

                    <div className="d-flex flex-column mt-3">
                        <span className="fw-bold mx-1">ویژگی ها</span>
                        <ul>
                            {
                                productCon.slice(0, 5).map(item =>
                                    <li className="my-1"><span>{item.attribute}</span><span
                                        className="mx-1">:</span><span>{item.value}</span></li>
                                )
                            }
                        </ul>
                    </div>

                </div>

                <div className="col-12 col-lg-3 my-3 my-lg-0">


                    <div className="shadow rounded-3 p-3">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={iconShop}/>
                                <span className="fw-bold mx-1">موبایل گاندی</span>
                            </div>

                            <div>
                                <span>سایر فروشندگان</span>
                                <img src={iconArrowDown}/>
                            </div>
                        </div>

                        <div className="my-2">
                            <span>
                                96.1 درصد رضایت از کالا
                            </span>
                            <span className="mx-2">|</span>
                            <span>عملکرد عالی کالا</span>
                        </div>


                        <hr className="bg-secondary"/>


                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={iconShield}/>
                                <span className="fw-bold mx-1">بیمه</span>
                            </div>

                            <div>
                                <span>جزییات</span>
                                <img src={iconArrowDown}/>
                            </div>
                        </div>


                        <div>
                            <ul className="">
                                <li className="list-group-item d-flex flex-row justify-content-start align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value=""
                                           id="firstCheckbox"/>
                                    <label className="form-check-label d-flex flex-column"
                                           htmlFor="firstCheckbox">
                                        <span>بیمه و تجهیزات دیجیتال - بیمه پارسیان</span>
                                        <div className="d-flex flex-row">
                                            <s className="text-secondary opacity-50">400000</s>
                                            <span className="mx-2">350000</span>
                                            <span>تومان</span>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <hr className="bg-secondary"/>

                        <div className="d-flex flex-column">

                            <div className="d-flex flex-row justify-content-end">
                                <s className="text-secondary opacity-50">{filteredArray[0]?.price}</s>
                                <span className="mx-2 fw-bold">{filteredArray[0]?.price}</span>
                                <span>تومان</span>
                            </div>


                            <button type="button"
                                    onClick={() => {
                                        // const fetchData = async () => {
                                        //     try {
                                        //         if (login) {
                                        //             const {data: dataResult} = await addCart(filteredArray[0]?.id);
                                        //             console.log(dataResult)
                                        //             window.location.reload();
                                        //         } else {
                                        //             ToastError('ابتدا وارد حساب کاربری خود شوید!')
                                        //         }
                                        //     } catch (err) {
                                        //         ToastError('ارتباط برقرار نشد!')
                                        //     }
                                        // }
                                        // fetchData().then(r => r);

                                        addToCart(idProduct)

                                    }}
                                    className="btn btn-success my-2">افزودن به سبد خرید
                            </button>
                            <button
                                onClick={() => {
                                    // const fetchData = async () => {
                                    //     try {
                                    //         if (login) {
                                    //             const {data: dataResult} = await addCart(filteredArray[0]?.id);
                                    //             console.log(dataResult)
                                    //             navigate("/gandiCart");
                                    //             window.location.reload();
                                    //         } else {
                                    //             ToastError('ابتدا وارد حساب کاربری خود شوید!')
                                    //         }
                                    //     } catch (err) {
                                    //         ToastError('ارتباط برقرار نشد!')
                                    //     }
                                    // }
                                    // fetchData().then(r => r);


                                    addToCart(idProduct)
                                }}
                                type="button" className="btn btn-success my-2">هم اکنون خریداری کنید
                            </button>

                        </div>
                    </div>


                </div>


            </div>


            <div>
                <PurchaseInformation/>
            </div>

            <div className="mx-lg-5">
                <LatestProducts/>
            </div>


            <div className="mx-5 mt-5">
                <span className="fw-bold">معرفی</span>
                <p>سامسونگ با موفقیت در تجارت لوازم الکترونیکی خود، در سطح جهانی به‌عنوان یک پیشرو صنعت در عرصه فناوری
                    شناخته شده و اکنون به‌عنوان یکی از ۱۰ برند برتر جهانی با پیروی از فلسفه‌ای ساده در کسب و کار،
                    استعداد و فناوری خود را وقف ایجاد خدمات و محصولات برتر برای ایجاد جامعه جهانی بهتر می‌کند</p>
            </div>

            <div className="mx-5">
                <span className="fw-bold">مشخصات فنی</span>

                <div className="d-flex flex-column">
                    {
                        productCon.map(item =>
                            <div className="border px-2 py-1 my-1 rounded-3 bg-light">
                                <span>{item.attribute}</span>
                                <span className="mx-1">:</span><span className="ms-2">{item.value}</span></div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}
