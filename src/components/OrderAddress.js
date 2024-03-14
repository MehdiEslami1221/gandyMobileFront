import {numberWithCommas, ToastError} from "../utils/utils";
import React, {useEffect, useState} from "react";
import {getAllAddress, getAllCart, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";

import iconLocation from '../assets/icons/icon-location.svg';
import iconArrowLeft from "../assets/icons/arrow-left.svg";
import iconDelivery from "../assets/images/shipment_dl.png";
import iconSendToAddress from "../assets/images/sendToAddress.png";


const OrderAddress = () => {
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
                <div className="col-12 pe-3 col-md-9">

                    <div className="d-flex flex-row align-items-center justify-content-between mx-4">

                        <div className="d-flex flex-row my-2">
                            <span className="fw-bold text-dark" style={{fontSize: '16px'}}>آدرس تحویل</span>
                        </div>

                    </div>

                    <div className="d-flex flex-column justify-content-center my-2">


                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                             data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 style={{fontSize: '14px'}} className="modal-title fw-bold text-dark"
                                            id="staticBackdropLabel">انتخاب آدرس</h1>
                                        <button style={{fontSize: '10px'}} type="button" className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {
                                            address.map(item =>
                                                <Link
                                                    data-bs-dismiss="modal"
                                                    to='' onClick={() =>
                                                    setSelectedAddress(item)
                                                }
                                                    className="d-flex align-items-center bg-light text-decoration-none shadow-sm rounded-3 my-2">

                                                    <div className="d-flex flex-column p-3 col">
                                                        <div className="d-flex align-items-center my-2">
                                                            <h5 className="fw-bold"
                                                                style={{fontSize: '14px'}}>آدرس:</h5>
                                                            <h5 style={{fontSize: '14px'}}
                                                                className="ms-2 fw-bold">{item?.address}</h5>
                                                        </div>
                                                        <div className="d-flex justify-content-between mx-5">
                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>استان:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.province?.name}</h5>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>شهر:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.city?.name}</h5>
                                                            </div>

                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>منطقه:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.area}</h5>
                                                            </div>

                                                        </div>
                                                        <div className="d-flex justify-content-between mx-5">

                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>کد پستی:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.postalCode}</h5>
                                                            </div>

                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>پلاک:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.no}</h5>
                                                            </div>

                                                            <div className="d-flex align-items-center">
                                                                <h5 style={{fontSize: '14px'}}>واحد:</h5>
                                                                <h5 style={{fontSize: '14px'}}
                                                                    className="ms-2">{item?.unit}</h5>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </Link>
                                            )
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">بستن
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="d-none d-lg-flex rounded-3 shadow py-4 px-3"
                         style={{backgroundColor: 'rgb(243,243,229)'}}>

                        <div className="d-flex flex-column col-10">
                            <span className="mx-1 fw-bold text-dark"
                                  style={{fontSize: '14px'}}>{selectedAddress['users']?.name + ' ' + selectedAddress['users']?.family}</span>

                            <div className="d-flex align-items-end py-2">
                                <img src={iconLocation} width='25px'/>

                                <div className="d-flex flex-column flex-lg-row ms-2">
                                    <span>{selectedAddress?.province?.name}</span>
                                    <span className="mx-1">،</span>
                                    <span>{selectedAddress?.city?.name}</span>
                                    <span className="mx-1">،</span>
                                    <span>{selectedAddress?.area}</span>
                                    <span className="mx-1">،</span>
                                    <span>{selectedAddress?.address}</span>
                                    <span className="mx-1">،</span>
                                    <div className="d-flex">
                                        <span>کد پستی:</span>
                                        <span>{selectedAddress?.postalCode}</span>
                                    </div>
                                    <span className="mx-1">-</span>
                                    <div className="d-flex">
                                        <span>پلاک:</span>
                                        <span>{selectedAddress?.no}</span>
                                    </div>
                                    <span className="mx-1">-</span>
                                    <div className="d-flex">
                                        <span>واحد:</span>
                                        <span>{selectedAddress?.unit}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <span className="fw-bold text-dark" style={{cursor: 'pointer', fontSize: '14px'}}
                                  data-bs-toggle="modal" data-bs-target="#staticBackdrop">تغییر</span>
                            <img src={iconArrowLeft} style={{width: '10%'}} alt="ArrowCircleLeft"/>
                        </div>
                    </div>


                    <div className="d-flex flex-column d-lg-none rounded-3 shadow py-4 px-3"
                         style={{backgroundColor: 'rgba(243,243,229)'}}>

                        <div className="d-flex flex-column col-12">
                            <div className="d-flex flex-row justify-content-between">
                                <span className="mx-1 fw-bold text-dark"
                                      style={{fontSize: '14px'}}>{selectedAddress['users']?.name + ' ' + selectedAddress['users']?.family}</span>

                                <div className="col-3 d-flex justify-content-end align-items-center">
                                    <span className="fw-bold"
                                          style={{cursor: 'pointer', fontSize: '14px', color: '#02091f'}}
                                          data-bs-toggle="modal" data-bs-target="#staticBackdrop">تغییر</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mt-3 mt-lg-0 py-2">
                                <img src={iconLocation} width='25px'/>
                                <div className="d-flex flex-column justify-content-center flex-lg-row ms-2">
                                    <div className="d-flex">
                                        <span>{selectedAddress?.province?.name} ، {selectedAddress?.city?.name} ، {selectedAddress?.area} ، {selectedAddress?.address}</span>
                                    </div>

                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <span>کد پستی:</span>
                                            <span>{selectedAddress?.postalCode}</span>
                                        </div>
                                        <span className="mx-1">-</span>
                                        <div className="d-flex">
                                            <span>پلاک:</span>
                                            <span>{selectedAddress?.no}</span>
                                        </div>
                                        <span className="mx-1">-</span>
                                        <div className="d-flex">
                                            <span>واحد:</span>
                                            <span>{selectedAddress?.unit}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                    <div>
                        <div className="d-flex flex-row align-items-center mx-4 my-4">
                            <span className="fw-bold text-dark" style={{fontSize: '16px'}}>شیوه دریافت</span>
                        </div>

                        <div
                            className="py-2 mx-2 col-12 col-lg-6 border border-success shadow-sm rounded-3 d-flex justify-content-between align-items-center"
                            style={{backgroundColor: 'rgb(230,243,229)', cursor: 'pointer'}}>
                            <div>

                                <img className="ms-2" src={iconSendToAddress}/>
                                <span className="ms-2 fw-bold">تحویل بـــه آدرس</span>
                            </div>
                            <span className="fa fa-check me-3"/>
                        </div>
                    </div>

                    <div>
                        <div className="d-flex flex-row align-items-center mx-4 my-4">
                            <span className="fw-bold text-dark" style={{fontSize: '16px'}}>سبد خرید شما</span>
                            <span className="fw-bold text-secondary mx-2"
                                  style={{fontSize: '12px'}}>{cartItem.length.toString()} عدد کالا</span>
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
                                                <h5 className="text-secondary fw-bold">سبد خرید خالی می باشد</h5>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border p-3 rounded-3 mt-3 shadow"
                         style={{borderColor: '#d5f6c9', backgroundColor: 'rgb(243,243,229)'}}>
                        <div className="d-flex flex-row align-items-center mx-4">
                            <span className="fw-bold text-dark" style={{fontSize: '16px'}}>شیوه و زمان ارسال را انتخاب کنید</span>
                        </div>

                        <div className="d-flex flex-column p-3">


                            <div className="d-flex flex-row align-items-center bg-light rounded-3 shadow my-3 p-2">
                                <input style={{width: '20px', height: '20px'}} className="ms-2"
                                       type="radio"
                                       name="flexRadioDefault"
                                       id="1"/>
                                <label className="d-flex flex-row col px-2 py-3" htmlFor="1">
                                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12">

                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold mx-2"
                                                  style={{fontSize: '14px'}}>ارسال رایگان گاندی موبایل</span>
                                            <img className="ms-2" src={iconDelivery} width='25'/>
                                        </div>


                                        <div className="d-flex align-items-center mt-2 mt-lg-0">
                                            <span style={{fontSize: '14px'}} className="fw-bold text-secondary me-3">هزینه ارسال:</span>
                                            <div>
                                            <span style={{fontSize: '14px'}}
                                                  className="fw-bold mx-1">{numberWithCommas(0)}</span>
                                                <span style={{fontSize: '14px'}} className="fw-bold">تومان</span>
                                            </div>
                                        </div>

                                    </div>
                                </label>
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
                              to={'/gandipayment'}>ادامه
                            خرید</Link>
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

export default OrderAddress;