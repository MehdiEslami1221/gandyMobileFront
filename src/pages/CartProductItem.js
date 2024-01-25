import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";


function CartProductItem({product}) {

    const {cartItems, removeFromCart} = useContext(ShopContext)
    const productQuantity = cartItems?.filter((row) => row.id === product.id)[0]?.count

    return (
        <div>
            <span className="mx-2">{product.id}</span>
            <span className="mx-2">{productQuantity}</span>
            <span className="mx-2">{productQuantity * product.price}</span>
            <button onClick={() => removeFromCart(product.id)}>حذف محصول</button>
        </div>
    )
}

export default CartProductItem;