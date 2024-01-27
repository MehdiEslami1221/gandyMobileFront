import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

function ProductItem({product}) {


    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)


    const productQuantity = cartItems?.filter((row) => row.id === product.id)[0]?.count

    return (
        <a
            className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
            style={{height: '300px'}}>
            <div className="card-body overflow-auto">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={product.image}
                        alt="Shegeftangiz" style={{width: '40%'}}/>
                    <dt className="col-10 text-truncate mt-3 text-dark">{product.title}</dt>
                </div>

                <div className="d-flex flex-row align-items-center my-2">
                    <span className="col-2 badge bg-danger">60%</span>
                    <div className="d-flex flex-column col overflow-auto align-items-end">
                        <span className="fw-bold">200000</span>
                        <span className="text-secondary opacity-50"><s>{product.price}</s></span>
                    </div>
                    <span className="col-3 align-items-start">تومان</span>
                </div>

                <span className="text-danger fw-bold">20:14:25</span>

                <div className="d-flex flex-row align-items-center my-2">
                    {productQuantity > 0 ? (
                        <>
                            <div
                                className="d-flex flex-row justify-content-center align-content-center align-items-center">

                                <button className="btn btn-secondary my-2 mx-2"
                                        onClick={() => removeFromCart(product.id)}>-
                                </button>
                                <button className="btn btn-secondary my-2 mx-2"
                                        onClick={() => addToCart(product.id)}>+
                                </button>

                                <div className="my-2 mx-2">
                                    <span>تعداد:</span>
                                    <span>{productQuantity}</span>
                                </div>

                            </div>
                        </>
                    ) : (
                        <div className="text-center col">
                            <button
                                className="border border-success rounded-3"
                                onClick={
                                    () => addToCart(product.id)
                                }>افزودن به سبد خرید
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </a>
    )
}

export default ProductItem;