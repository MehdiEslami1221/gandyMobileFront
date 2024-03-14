import {SERVER_URL} from "../services/Service";
import React from "react";


const ProductListItem=({items})=>{
console.log(items.productImage['img'])
    return (

        <div className="p-3">
            <img
                src={SERVER_URL + 'upload/files/' + items?.productImage['img']}
                alt="Shegeftangiz" style={{width: '40%'}}/>

        </div>


    )
}

export default ProductListItem;