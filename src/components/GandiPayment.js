import {Link} from "react-router-dom";
import {getAllAddress, getAllCart, SERVER_URL} from "../services/Service";
import {numberWithCommas, ToastError} from "../utils/utils";
import React, {useEffect, useState} from "react";


import iconPaymentMellat from "../assets/images/paymentmellat.png";
import iconDelivery from "../assets/images/shipment_dl.png";

import iconShopingBag from '../assets/icons/shopping-bag.svg';

const GandiPayment = () => {


    const [login] = useState(JSON.parse(localStorage.getItem('isLogin')) || false);
    const [address, setAddress] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState({});

    const [cartItem, setCart] = useState([]);
    const [price, setPrice] = useState({});


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                if (login) {
                    const {data: dataResult} = await getAllAddress();
                    setAddress(dataResult)

                    setSelectedAddress(dataResult[0])

                    const {data: dataCart} = await getAllCart();
                    setCart(dataCart['list'])
                    setPrice(dataCart)
                }
            } catch (err) {
                ToastError('ارتباط برقرار نشد!')
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <div className="container my-5 user-select-none">
            <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 pe-lg-3 col-md-9">


                    <div className="">


                        <div className="d-flex flex-row">
                            <span className="fw-bold text-dark my-3"
                                  style={{fontSize: '16px'}}>انتخاب شیوه پرداخت</span>
                        </div>

                        <div className="d-flex align-items-center col rounded-3 shadow-sm p-2"
                             style={{
                                 borderColor: '#d5f6c9',
                                 backgroundColor: 'rgba(239,149,149,0.17)',
                                 cursor: 'pointer'
                             }}>

                            <input style={{width: '20px', height: '20px'}} className="ms-2"
                                   type="radio"
                                   name="flexRadioDefault"
                                   id="1"/>

                            <label className="d-flex flex-row align-items-center col" htmlFor="1"
                                   style={{cursor: 'pointer'}}>
                                <img src={iconPaymentMellat} width='80px'/>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold text-dark">پرداخت آنلاین ( درگاه بانک ملت )</span>
                                    <span style={{fontSize: '12px'}} className="fw-bold text-secondary mt-2">پرداخت آنلاین از طریق کلیه کارت‌های عضو شتاب</span>
                                </div>
                            </label>

                        </div>


                    </div>


                    <div className="mt-5">


                        <div className="d-flex flex-column flex-lg-row align-items-lg-center  justify-content-lg-between shadow rounded-3 px-3"
                             style={{
                                 borderColor: '#d5f6c9',
                                 backgroundColor: 'rgba(175,239,149,0.17)',
                                 cursor: 'pointer'
                             }}>
                            <span className="fw-bold text-dark my-3" style={{fontSize: '16px'}}>سفارش در یک نگاه</span>

                            <div className="mt-2 mt-lg-0">
                                <span className="fw-bold text-secondary">(</span>
                                <span className="fw-bold text-secondary"
                                      style={{fontSize: '14px'}}>{cartItem.length.toString()} عدد کالا</span>
                                <span className="fw-bold text-secondary">)</span>
                            </div>

                            <div className="mt-2 mt-lg-0">
                                <img className="me-2" src={iconDelivery} width='25'/>
                                <span className="fw-bold text-dark" style={{fontSize:'14px'}}>ارسال رایگان گاندی موبایل</span>
                            </div>

                            <div className="d-flex flex-row align-items-center mt-2 mt-lg-0 mb-3 mb-lg-0">
                                <img src={iconShopingBag} className="me-2"/>
                                <span className="fw-bold text-dark" style={{fontSize:'14px'}}>مجموع مبلغ محصولات :</span>
                                <span className="fw-bold text-dark mx-1" style={{fontSize:'14px'}}>{numberWithCommas(parseInt(price?.totalMainPrice))}</span>
                                <span className="fw-bold text-dark">تومان</span>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-start my-2 shadow-sm rounded-3 px-2 py-4 border"
                             style={{borderColor: '#d5f6c9'}}>
                            <div className="container text-center">
                                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                    {
                                        cartItem.length > 0 ? (
                                            cartItem.map(item => (
                                                <div className="col">
                                                    <div className="d-flex flex-column mx-2">
                                                        <img
                                                            src={SERVER_URL + 'upload/files/' + item["productCountResponse"]?.productImage?.img}
                                                            className="img-fluid"
                                                            style={{width: '150px'}}/>

                                                        <div className="d-flex flex-row justify-content-center my-3">
                                                            <span
                                                                className="rounded-3 border px-2 py-1">{item?.count}</span>

                                                            <div
                                                                className="d-flex justify-content-center align-items-center rounded-3 border px-2 py-1 ms-2">
                                                                     <span className="badge rounded-pill mx-2"
                                                                           style={{
                                                                               width: '15px',
                                                                               height: '15px',
                                                                               backgroundColor: `${item["productCountResponse"]?.color}`
                                                                           }}> </span>

                                                                <span>مشکی</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="d-flex justify-content-center mt-5">
                                                <h5 className="text-secondary fw-bold" style={{fontSize:'12px'}}>سبد خرید خالی می باشد</h5>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-12 col-md-3 my-3 my-md-0">
                    <h1 className="fw-bold mx-4" style={{fontSize: '14px'}}>صورتحساب</h1>


                    <div className="d-flex flex-column shadow rounded-3 my-3 mx-2 py-3">
                        <div className="d-flex flex-row justify-content-between px-4 my-2">
                            <span className="text-secondary" style={{fontSize: '14px'}}>قیمت محصولات</span>
                            <div>
                                <span className="text-secondary mx-1"
                                      style={{fontSize: '14px'}}>{numberWithCommas(parseInt(price?.totalMainPrice))}</span>
                                <span className="text-secondary" style={{fontSize: '14px'}}>تومان</span>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between px-4 my-2">
                            <span className="text-secondary" style={{fontSize: '14px'}}>سود شما از خرید</span>
                            <div>
                                <span className="text-secondary mx-1"
                                      style={{fontSize: '14px'}}>{numberWithCommas(parseInt(price?.totalDiscount))}</span>
                                <span className="text-secondary" style={{fontSize: '14px'}}>تومان</span>
                            </div>
                        </div>


                        <div className="d-flex flex-row justify-content-between px-4 my-2">
                            <span className="text-secondary" style={{fontSize: '14px'}}>هزینه ارسال</span>
                            <div>
                                <span className="text-secondary mx-1"
                                      style={{fontSize: '14px'}}>{numberWithCommas(parseInt('0'))}</span>
                                <span className="text-secondary" style={{fontSize: '14px'}}>تومان</span>
                            </div>
                        </div>


                        <div className="d-flex flex-row justify-content-between px-4 my-2">
                            <span className="fw-bold text-dark" style={{fontSize: '14px'}}>جمع کل</span>
                            <div>
                                <span className="fw-bold text-dark mx-1"
                                      style={{fontSize: '14px'}}>{numberWithCommas(parseInt(price?.finalPrice))}</span>
                                <span className="fw-bold text-dark" style={{fontSize: '14px'}}>تومان</span>
                            </div>
                        </div>

                        <Link className="btn btn-success text-white m-2" style={{fontSize: '14px'}}
                              to={''}>پرداخت</Link>
                    </div>

                    <div className="d-flex border border-warning rounded-3 my-3 mx-2 py-2"
                         style={{backgroundColor: 'rgba(246,231,126,0.23)'}}>

                        <div className="d-flex flex-column ms-1">
                            <span className="fa fa-warning text-warning"/>
                        </div>

                        <div className="d-flex flex-column mx-2">
                        <span style={{textAlign: 'justify', textJustify: 'inter-word', fontSize: '12px'}}>در صورتی که کالایی در سبد خرید ، <span
                            className="fw-bold">ناموجود</span> یا <span className="fw-bold">غیر فعال</span> شده است، با ادامه دادن به خرید ، کالا به صورت خودکار از سبد خرید شما حذف می‌شود.</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default GandiPayment