import React from "react";
import {Link} from "react-router-dom";
import {SERVER_URL} from "../services/Service";

function ProductItem({product}) {

    return (
        <Link
            key={product.id}
            to="internal"
            className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
            style={{height: '300px'}}>
            <div className="card-body overflow-auto">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={SERVER_URL + 'upload/files/' + product.productImage['img']}
                        alt="Shegeftangiz" style={{width: '40%'}}/>
                    <dt className="col-10 text-truncate mt-3 text-dark">{product.title}</dt>
                </div>

                <div className="d-flex flex-row align-items-center my-2">
                    <span className="col-2 badge bg-danger">%{product['discount'].discountVal}</span>
                    <div className="d-flex flex-column col overflow-auto align-items-end">
                        <span
                            className="fw-bold">{((product['discount'].productCount['price'] * product['discount'].discountVal) / 100) - (product['discount'].productCount['price'])}</span>
                        <span
                            className="text-secondary opacity-50"><s>{product['discount'].productCount['price']}</s></span>
                    </div>
                    <span className="col-3 align-items-start">تومان</span>
                </div>

                <span className="text-danger fw-bold">20:14:25</span>

                <div className="d-flex flex-row align-items-center my-2">
                    {/*{productQuantity > 0 ? (*/}
                    {/*    <>*/}
                    {/*        <div*/}
                    {/*            className="d-flex flex-row justify-content-center align-content-center align-items-center">*/}

                    {/*            <button className="btn btn-secondary my-2 mx-2"*/}
                    {/*                    onClick={() => removeFromCart(product.id)}>-*/}
                    {/*            </button>*/}
                    {/*            <button className="btn btn-secondary my-2 mx-2"*/}
                    {/*                    onClick={() => addToCart(product.id)}>+*/}
                    {/*            </button>*/}

                    {/*            <div className="my-2 mx-2">*/}
                    {/*                <span>تعداد:</span>*/}
                    {/*                <span>{productQuantity}</span>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </>*/}
                    {/*) : (*/}
                    {/*    <div className="text-center col">*/}
                    {/*        <button*/}
                    {/*            className="border border-success rounded-3"*/}
                    {/*            onClick={*/}
                    {/*                () => addToCart(product.id)*/}
                    {/*            }>افزودن به سبد خرید*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>

            </div>
        </Link>
    )
}

export default ProductItem;