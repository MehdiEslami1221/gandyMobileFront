import {createContext, useEffect, useState} from "react";

import {getProductData} from "../data/items";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {
    },
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    deleteFromCart: () => {
    },
    getTotalAmount: () => {
    }
})

export function CartProvider({children}) {
    const [cardProducts, setCartProducts] = useState([])


    function getProductQuantity(id) {
        const quantity = cardProducts.find((item) => item.id === id)?.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 0) {
            setCartProducts([...cardProducts, {id: id, quantity: 1}])
        } else {
            setCartProducts(
                cardProducts.map((item) =>
                    item.id === id ? {...item, quantity: item.quantity + 1} : item)
            )
        }
    }

    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cardProducts.map((item) => item.id === id ? {
                    ...item, quantity: item.quantity - 1
                } : item)
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts((cardProducts) =>
            cardProducts.filter((item) => {
                return item.id !== id
            }))
    }

    function getTotalAmount() {
        let totalAmount = 0
        cardProducts.map((item) => {
            const productData = getProductData(item.id)
            totalAmount += productData.price * item.quantity
        })
        return totalAmount;
    }

    const ContextValue = {
        items: cardProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }
    return (
        <CartContext.Provider value={ContextValue}>
            {children}
        </CartContext.Provider>
    )
}