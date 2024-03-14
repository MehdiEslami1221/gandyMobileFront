import {numberWithCommas, ToastError} from "../utils/utils";
import React, {useEffect, useState} from "react";
import {deleteAllCart, deleteCart, getAllCart, SERVER_URL, updateCart} from "../services/Service";
import {Link} from "react-router-dom";


const GandiCart = () => {

    const [cartItem, setCart] = useState([]);
    const [price, setPrice] = useState({});





    const getCarts = async () => {
        try {
            const {data: dataCart} = await getAllCart();
            setCart(dataCart['list'])
            setPrice(dataCart)
        } catch (err) {
            ToastError('ارتباط برقرار نشد!')
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        const asyncFn = async () => {
            await getCarts()
        };
        asyncFn().then(r => r);
    }, []);


    const CounterI = (idProductCount, count, cartId) => {
        const fetchData = async () => {
            try {
                await updateCart(idProductCount, count, cartId);
                await getCarts()
            } catch (err) {
                ToastError('ارتباط برقرار نشد!')
            }
        }
        fetchData().then(r => r);

    }




    const CounterD = (idProductCount, count, cartId) => {
        const fetchData = async () => {
            try {
                await updateCart(idProductCount, count, cartId);
                await getCarts()
            } catch (err) {
                ToastError('ارتباط برقرار نشد!')
            }
        }
        fetchData().then(r => r);


    }

    const deleteItem = (cartId) => {
        const fetchData = async () => {
            try {
                await deleteCart(cartId);
                await getCarts()
            } catch (err) {
                ToastError('ارتباط برقرار نشد!')
            }
        }
        fetchData().then(r => r);
    }

    return (

        <div className="container my-5">


            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-9">

                    <div className="d-flex flex-row align-items-center justify-content-between mx-4">

                        <div className="d-flex flex-row">
                            <span className="fw-bold text-dark" style={{fontSize: '16px'}}>سبد خرید شما</span>
                            <div className="d-flex ms-2 align-items-center">
                                <span style={{fontSize: '14px'}} className="text-secondary">{cartItem.length}</span>
                                <span style={{fontSize: '14px'}} className="text-secondary">عدد کالا</span>
                            </div>
                        </div>

                        <span style={{cursor: 'pointer'}}
                              className="d-flex fw-bold text-decoration-none link-secondary link-opacity-100-hover align-items-center">
                            <span className="text-secondary" style={{fontSize: '14px'}}
                                  onClick={() => {
                                      const fetchData = async () => {
                                          try {
                                              await deleteAllCart();
                                              window.location.reload();
                                          } catch (err) {
                                              console.log(err.message())
                                          }
                                      }
                                      fetchData().then(r => r);
                                  }}
                            >حذف کل سبد خرید</span>
                            <span className="fa fa-remove ms-2 text-secondary"/>
                        </span>
                    </div>

                    <div>
                        {
                            cartItem.length > 0 ? (
                                cartItem.map(item => (
                                    <div className="d-flex flex-row my-3 shadow rounded-3 align-items-center">
                                        <div className="col-9 p-3">
                                            <a href={'/internal/' + item["productCountResponse"]?.product?.id}
                                               className="text-decoration-none link-secondary link-opacity-100-hover">
                                            <span
                                                className="fw-bold"
                                                style={{fontSize: '14px'}}>{item["productCountResponse"]?.product?.name}</span>
                                            </a>


                                            <div className="d-flex align-items-center my-3">
                                                <span className="text-secondary"
                                                      style={{fontSize: '14px'}}>رنگ کالا:</span>
                                                <span className="badge rounded-pill mx-2"
                                                      style={{
                                                          width: '15px',
                                                          height: '15px',
                                                          backgroundColor: `${item["productCountResponse"]?.color}`
                                                      }}> </span>
                                            </div>


                                            <div className="d-flex my-3 align-items-center">
                                                    <span style={{fontSize: '14px'}} className="text-secondary">کد محصول:</span>
                                                    <span style={{fontSize: '14px'}}
                                                          className="text-dark mx-2">7826464</span>
                                            </div>


                                                <div className="d-flex my-3">
                                                    <div className="d-flex justify-content-start align-items-center">

                                                        <div
                                                            style={{cursor: 'pointer'}}
                                                            className="border d-flex rounded-3 py-1 px-2 justify-content-center align-items-center">
                                                         <span style={{fontSize: '14px'}}
                                                               className="fa fa-plus text-danger" onClick={() => {
                                                             if (item?.count <= item["productCountResponse"]?.count) {
                                                                 CounterI(
                                                                     item["productCountResponse"]?.id,
                                                                     item?.count + 1,
                                                                     item?.cartId
                                                                 )
                                                             }
                                                         }}/>
                                                            <span style={{fontSize: '14px'}}
                                                                  className="mx-3 fw-bold text-danger">{item?.count}</span>

                                                            {
                                                                item?.count === 1 ? (
                                                                    <span
                                                                        style={{cursor: 'pointer', fontSize: '14px'}}
                                                                        className="fa fa-remove text-danger"
                                                                        onClick={() => {
                                                                            deleteItem(item?.cartId)
                                                                        }}/>
                                                                ) : (
                                                                    <span
                                                                        style={{cursor: 'pointer', fontSize: '14px'}}
                                                                        className="fa fa-minus text-danger"
                                                                        onClick={() => {
                                                                            CounterD(
                                                                                item["productCountResponse"]?.id,
                                                                                item?.count - 1,
                                                                                item?.cartId
                                                                            )
                                                                        }}/>
                                                                )
                                                            }

                                                        </div>

                                                        <div className="ms-3">
                                                            <span className="fw-bold"
                                                                  style={{fontSize: '14px'}}>{numberWithCommas(parseInt(item["productCountResponse"]?.finalPrice))}</span>
                                                            <span className="fw-bold"
                                                                  style={{fontSize: '14px'}}>تومان</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            <div className="d-flex my-2">
                                                <span className="text-secondary"
                                                      style={{fontSize: '14px'}}>گارانتی:</span>
                                                <span className="text-dark mx-2" style={{fontSize: '14px'}}>گارانتی 18 ماهه - گاندی موبایل</span>
                                            </div>


                                        </div>
                                        <div className="col-3 d-flex justify-content-center ">
                                            <img
                                                src={SERVER_URL + 'upload/files/' + item["productCountResponse"]?.productImage?.img}
                                                className="img-fluid"
                                                style={{width: '150px'}}/>

                                            <div className="d-flex flex-row justify-content-end text-decoration-none">
                                            <span style={{cursor: 'pointer'}} onClick={() => {
                                                deleteCart(item["productCountResponse"]?.id);
                                            }} className="fa fa-remove my-2 mx-2 d-none"/>
                                            </div>
                                        </div>
                                    </div>
                                ))) : (
                                <div className="d-flex justify-content-center mt-5">
                                    <h5 className="text-secondary fw-bold">سبد خرید خالی می باشد</h5>
                                </div>
                            )
                        }

                    </div>
                </div>

                <div className="col-12 col-md-3">
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
                              to={'/orderAddress'}>ادامه
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

export default GandiCart;