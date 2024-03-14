import {useState} from "react";
import {productList} from "../data/items";

export const useCart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('Basket')) || [])

    const addToCart = (ProductItem) => {
        if (!cartItems?.find((item) => item.id === ProductItem.id)) {
            productList.push(ProductItem)
            window.localStorage.setItem("Basket", JSON.stringify(productList))
            setCartItems([...cartItems, {id: ProductItem.id, count: 1}])
        } else
            setCartItems(cartItems.map((item) => {
                if (item.id === ProductItem.id) {
                    window.localStorage.setItem("Basket", JSON.stringify(...productList))
                    return {...item, count: item.count + 1}
                } else return item
            }))
    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId)
                return {...i, count: i.count === 0 ? 0 : i.count - 1}
            else return i;
        }))


    }

    return {cartItems, addToCart, removeFromCart}

}