import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";


function CartProductItem({product}) {

    const {cartItems, removeFromCart} = useContext(ShopContext)
    const productQuantity = cartItems?.filter((row) => row.id === product.id)[0]?.count

    return (
        <div className="d-flex justify-content-start align-items-center my-2">
            <img className="img-fluid" style={{width: '30px'}} src={product.image}/>
            <div className="d-flex flex-row">
                <span className="mx-2">تعداد:</span>
                <span>{productQuantity}</span>
                <span>عدد</span>
            </div>

            <div className="d-flex flex-row">
                <span className="mx-2">قیمت:</span>
                <span>{productQuantity * product.price}</span>
                <span>تومان</span>
            </div>


            <button className="btn" onClick={() => removeFromCart(product.id)}><span className="fa fa-close text-danger"/></button>
        </div>
    )
}

export default CartProductItem;