import React, {useContext} from "react";

import iconcard from '../assets/icons/shopping-cart.svg';
import CartProductItem from "../pages/CartProductItem";
import {ShopContext} from "../context/ShopContext";
import {productList} from "../data/items";

const SearchBar = ({data}) => {



    const {cartItems} = useContext(ShopContext)
    const itemCount = cartItems.reduce((prev, current) => {
        return prev + current.count
    }, 0)


    return (
        <nav className="navbar navbar-light justify-content-between mx-3">

            <div className="d-flex col-12 col-md-9 justify-content-start align-items-center">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand d-none d-md-inline mx-0" href="#">
                    <img src={require('../assets/images/logo-gandi.png')} width="50"
                         className="d-inline-block align-top me-4" alt=""/>
                    <span className="mx-1 fs-6 visually-hidden">موبایل گاندی</span>
                </a>

                <form className="form-inline col-12 col-md-5 my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="نام محصول مورد نظر خود را وارد کنید."
                           aria-label="Search">

                    </input>
                </form>


            </div>


            <div className="col-0 col-md-3 d-none d-md-inline-flex justify-content-end align-items-center">

                <div className="d-flex border border-2 rounded-3 border-dark p-1">
                    <a href="#" className="link-dark link-opacity-75-hover text-decoration-none mx-2">ثبت نام</a>
                    <span>|</span>
                    <a href="#" className="link-dark link-opacity-75-hover text-decoration-none mx-2">ورود</a>
                </div>
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
                        itemCount > 0 &&
                        <span className="badge rounded-pill bg-danger text-bg-secondary">{itemCount}</span>
                    }
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
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
                                    itemCount > 0 ? (
                                        <>
                                            {
                                                productList.map((item) => {

                                                    if (cartItems.some((i)=>i.id===item.id && i.count >0))

                                                        return     <CartProductItem key={item.id} product={item}/>
                                                })
                                            }
                                        </>
                                    ) : (
                                        <div>سبد خرید خالی می باشد</div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        data-dismiss="modal">بستن
                                </button>
                                <button type="button" className="btn btn-success">پرداخت</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    )
}
export default SearchBar;