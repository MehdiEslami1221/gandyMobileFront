import React from "react";
import {SERVER_URL} from "../services/Service";
import Countdown from "react-countdown";

function ProductItem({product}) {
    return (
        <a
            key={product?.product?.id}
            href={'/internal/' + product?.product?.id}
            className="col shadow-sm bg-white d-flex align-items-center text-center px-2 text-decoration-none link-secondary"
            style={{height: '300px'}}>
            <div className="card-body overflow-auto">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={SERVER_URL + 'upload/files/' + product?.productImage['img']}
                        alt="Shegeftangiz" style={{width: '40%'}}/>
                    <dt className="col-10 text-truncate mt-3 text-dark">{product?.title}</dt>
                </div>

                <div className="d-flex justify-content-start fw-bold">
                    <span className="text-dark" style={{fontSize: '12px'}}>{product?.product?.name}</span>
                </div>
                <div className="d-flex flex-row align-items-center my-2">
                    <span style={{fontSize: '10px'}}
                          className="col-2 badge fw-bold bg-danger">%{product['discount']?.discountVal}</span>
                    <div className="d-flex flex-column col overflow-auto align-items-end">
                        <span
                            style={{fontSize: '14px'}}
                            className="fw-bold">{product?.finalPrice}</span>
                        <span
                            style={{fontSize: '14px'}}
                            className="text-secondary opacity-50"><s>{product?.price}</s></span>
                    </div>
                    <span style={{fontSize: '12px'}} className="col-3 fw-bold align-items-start">تومان</span>
                </div>

                <span className="text-danger fw-bold" style={{fontSize: '14px'}}><Countdown
                    date={new Date(product['discount'].expire_at)}/></span>

            </div>
        </a>
    )
}

export default ProductItem;