import React, {useContext, useEffect, useState} from "react";

import iconcard from '../assets/icons/shopping-cart.svg';


import LogoGandiMobile from '../assets/images/logo-gandi.png';
import iconUser from '../assets/icons/user-login.svg';
import iconLogout from '../assets/icons/logout.svg';
import iconComment from '../assets/icons/comment.svg';
import iconNotif from '../assets/icons/notification.svg';
import iconShopingBag from '../assets/icons/shopping-bag.svg';


import {Link, useNavigate} from "react-router-dom";
import {getAllCart, SearchByProductName, SERVER_URL} from "../services/Service";
import {ToastError} from "../utils/utils";
import {productList} from "../data/items";
import {ShopContext} from "../context/ShopContext";

const SearchBar = () => {
    const navigate = useNavigate();
    const [login] = useState(JSON.parse(localStorage.getItem('isLogin')) || false);
    const [cartItem, setCart] = useState([]);
    const [product, setProduct] = useState([]);


    const {cartItems, addToCart, removeFromCart}=useContext(ShopContext)

    console.log(cartItems)

    const id=0

    const handleChange = (event) => {
        // setName(event.target.value)
        const fetchData = async () => {
            try {
                const {data: dataSearch} = await SearchByProductName(event.target.value);
                setProduct(dataSearch['productCountResponses'])
                console.log(dataSearch['productCountResponses'].map(item => item))
            } catch (err) {
            }
        }
        fetchData().then(r => r);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (login) {
                    const {data: dataCart} = await getAllCart();
                    setCart(dataCart['list'])
                }
            } catch (err) {
                ToastError('ارتباط برقرار نشد!')
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <nav className="navbar navbar-light justify-content-between mx-3 user-select-none">
            <div className="d-flex col-12  col-md-12 col-lg-8  justify-content-start align-items-center">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand col-md-1 d-none d-md-inline mx-3" href="/">
                    <img src={LogoGandiMobile} width="80"
                         className="d-inline-block align-top me-4" alt=""/>
                    <span className="mx-1 fs-6 visually-hidden">موبایل گاندی</span>
                </a>


                <div className="form-inline d-flex align-items-center col-12 col-md-8 my-2 my-lg-0">
                    <div className="col-12 position-relative">
                        <input
                            className="d-flex rounded-3 border border-secondary border-1 col-12 py-2 px-2"
                            placeholder="نام محصول مورد نظر خود را وارد کنید."
                            onChange={handleChange}
                        />
                        {
                            product?.length > 0 ? (
                                <div className="position-absolute col-12 mt-2" style={{zIndex: '999999'}}>
                                    <div className="rounded-3 col-12 border"
                                         style={{backgroundColor: "rgba(171,167,167,0.8)"}}>
                                        {
                                            product?.slice(0, 5).map(item => (
                                                <a className="text-decoration-none text-dark"
                                                   href={'/internal/' + item.product?.id}>
                                                    <div
                                                        className="d-flex bg-light p-2 m-2 rounded-2 flex-row align-items-center my-2">
                                                        <img
                                                            style={{width: '40px', height: '40px'}}
                                                            className="img-fluid"
                                                            src={SERVER_URL + 'upload/files/' + item?.productImage?.img}
                                                            alt="..."/>
                                                        <h5 className="fw-bold mx-2"
                                                            style={{fontSize: '14px'}}>{item?.product?.name}</h5>
                                                    </div>
                                                </a>

                                            ))
                                        }
                                    </div>
                                </div>
                            ) : (
                                <span className="d-none"/>
                            )
                        }

                    </div>
                </div>
            </div>


            <div
                className="d-flex col-12 col-md-12 col-lg-4 d-md-inline-flex justify-content-lg-end justify-content-center align-items-center">
                {
                    !login ? (
                        <div className="d-flex border  rounded-3 border-dark p-1">
                            <Link to={'/login'} className="link-dark link-opacity-75-hover text-decoration-none mx-2">ثبت
                                نام</Link>
                            <span>|</span>
                            <Link to={'/login'} className="link-dark link-opacity-75-hover text-decoration-none mx-2">ورود
                            </Link>
                        </div>
                    ) : (
                        <div className="dropdown">
                            <a href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="true">
                                <img src={iconUser}/>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li><Link className="dropdown-item" href="#" to={'/profile'}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold" style={{fontSize: '14px'}}>ناحیه کاربری</span>
                                        <img src={iconUser} style={{width: '20px'}}/>
                                    </div>
                                </Link></li>

                                <hr className="mx-3"/>

                                <li><Link to={'/gandiCart'} className="dropdown-item my-2" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src={iconShopingBag}/>
                                        <span style={{fontSize: '12px'}} className="ms-2 fw-bold">سفارش ها</span>
                                    </div>
                                </Link></li>

                                <li><a className="dropdown-item my-2" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src={iconComment}/>
                                        <span style={{fontSize: '12px'}} className="ms-2 fw-bold">دیدگاه ها</span>
                                    </div>
                                </a></li>


                                <li><a className="dropdown-item my-2" href="#">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src={iconNotif}/>
                                            <span style={{fontSize: '12px'}}
                                                  className="ms-2 fw-bold">پیغام ها</span>
                                        </div>

                                        <span className="badge text-light text-bg-danger">0</span>

                                    </div>
                                </a></li>

                                <li><a className="dropdown-item my-2" href="#">
                                    <div className="d-flex align-items-center">
                                        <img src={iconLogout}/>
                                        <span style={{fontSize: '12px'}}
                                              className="ms-2 fw-bold"
                                              onClick={() => {
                                                  window.localStorage.removeItem("token")
                                                  window.localStorage.removeItem("isLogin")
                                                  navigate("/");
                                                  window.location.reload();
                                              }}
                                        >خروج از حساب کاربری</span>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    )
                }


                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    data-toggle="modal" data-target="#exampleModal"
                    href="#" className="text-decoration-none link-secondary">
                </a>


                <button type="button" className="btn btn-light ms-2 p-1"
                        data-toggle="modal" data-target="#exampleModal">
                    سبد خرید
                    <img className="mx-2 " src={iconcard} alt="Logo"/>
                    {
                        // cartItem.length > 0 &&
                        // <span className="badge rounded-pill bg-danger text-bg-secondary">{cartItem.length}</span>

                        cartItems.length > 0 &&
                        <span className="badge rounded-pill bg-danger text-bg-secondary">{cartItems.length}</span>
                    }
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">سبد خرید</h5>
                                <a type="button"
                                   className="close link-secondary link-opacity-50-hover text-decoration-none"
                                   data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="fa fa-close"/>
                                </a>
                            </div>
                            <div className="modal-body">
                                {
                                    // cartItem.length > 0 ? (
                                    //     <>
                                    //         {
                                    //             cartItem.map(item => (
                                    //                 <CartProductItem key={item.id} product={item}/>
                                    //             ))
                                    //         }
                                    //     </>
                                    // ) : (
                                    //     <div>سبد خرید خالی می باشد</div>
                                    // )

                                    productList.map((item) => (
                                        <h5>{item.name}</h5>
                                    ))
                                }
                            </div>
                            <div className="modal-footer">
                                {
                                    cartItem.length > 0 &&
                                    (
                                        login === true ? (
                                            <a href={'/gandiCart'} type="button" className="btn btn-success text-white">سبد
                                                خرید</a>
                                        ) : (
                                            <a href={'/gandiCart'} type="button" className="btn btn-success text-white">ورود
                                                و ثبت
                                                سفارش</a>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div>


                </div>


            </div>


        </nav>
    )
}
export default SearchBar;