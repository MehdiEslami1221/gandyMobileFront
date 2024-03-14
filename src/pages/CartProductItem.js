import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import {SERVER_URL} from "../services/Service";
import {NumericFormat} from "react-number-format";
import {numberWithCommas} from "../utils/utils";
import {Link} from "react-router-dom";



function CartProductItem({product}) {

    return (
        <a href={'/internal/'+product["productCountResponse"]?.product?.id} className="d-flex text-decoration-none flex-row justify-content-center align-items-center bg-light rounded-3 my-2 py-2 px-2">
            <div className="col-3 d-flex justify-content-center">
                <img className="img-thumbnail" style={{width: '80px'}}
                     src={SERVER_URL + 'upload/files/' + product["productCountResponse"]?.productImage?.img}
                     alt={product["productCountResponse"]?.product?.name}/>
            </div>
            <div className="d-flex flex-column col-8">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                        <span style={{fontSize: '12px'}} className="fw-bold text-dark">محصول:</span>
                        <span style={{fontSize: '12px'}} className="fw-bold text-secondary">{product["productCountResponse"]?.product?.name}</span>
                    </div>

                    <div className="d-flex flex-row justify-content-center my-2">
                        <div className="d-flex flex-row text-dark">
                            <span className="">تعداد:</span>
                            <span className="mx-1">{product?.count}</span>
                            <span>عدد</span>
                        </div>

                        <div className="d-flex flex-row ms-5">
                            <span className="">قیمت:</span>
                            <span className="mx-1">{numberWithCommas(product["productCountResponse"]?.price)}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-1 d-flex justify-content-center">
                <button className="btn btn-link mx-2 d-none"><span
                    className="fa fa-close text-danger"/></button>
            </div>

        </a>
    )
}

export default CartProductItem;