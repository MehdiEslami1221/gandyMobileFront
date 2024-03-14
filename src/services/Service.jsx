import axios, {post} from "axios";
import {userInfo} from "../data/userInfo";

export const SERVER_URL = "http://87.107.104.119:8081/api/";


const token = JSON.parse(localStorage.getItem('token'));


export const getWebInfo = () => {
    const url = `${SERVER_URL}webInfo/getById/1`;
    return axios.get(url)
}


export const getAllSlider = () => {
    const url = `${SERVER_URL}slider/getAll`;
    return axios.get(url)
}

export const getAllProduct = () => {
    const url = `${SERVER_URL}pcount/getAll`;
    return axios.post(url)
}

export const getAmazingOffer = () => {
    const url = `${SERVER_URL}pcount/findAmazingOffer`;
    return axios.post(url)
}

export const getImageProduct = (productId) => {
    const url = `${SERVER_URL}productImage/getByProductId/${productId}`;
    return axios.get(url)
}


export const getAllCategory = () => {
    const url = `${SERVER_URL}subcategory/getmain`;
    return axios.post(url,{
        "isMain":1,
        "isActive":1
    })
}

export const setlogin = (mobile) => {
    const url = `${SERVER_URL}auth/signin`;
    return axios.post(url,{
        "mobile":mobile,
    })
}


export const setAuth = (mobile,otp) => {
    const url = `${SERVER_URL}auth/signup`;
    return axios.post(url,{
        "mobile":mobile,
        "otp":otp,
    })
}

export const addCart = (idProductCount) => {
    const url = `${SERVER_URL}cart/add`;
    return axios.post(url,
        {
            "list": [
                {
                    "productCountId": idProductCount
                }
            ]
        },{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}
export const updateCart = (idProductCount,count,cartId) => {
    const url = `${SERVER_URL}cart/editCart`;
    return axios.post(url,
        {
            "list": [
                {
                    "productCountId": idProductCount,
                    "count": count,
                    "cartId": cartId,
                }
            ]
        },{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}
export const getAllCart = () => {
    const url = `${SERVER_URL}cart/getAll`;
    return axios.post(url,{},{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}


export const deleteAllCart = () => {
    const url = `${SERVER_URL}factor/delete`;
    return axios.delete(url,{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}


export const deleteCart = (id) => {
    const url = `${SERVER_URL}cart/delete/`+id;
    return axios.post(url,null,{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}

export const addProfile = (name,family,nationalCode,mobile) => {
    const url = `${SERVER_URL}auth/fillUserInfo`;
    return axios.post(url, {
        "name":name,
        "family":family,
        "nationalCode":nationalCode,
        "mobile":mobile
    },{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}

export const getUserInfo = (name,family,nationalCode,mobile) => {
    const url = `${SERVER_URL}auth/getUserInfo`;
    return axios.post(url, {
        "name":name,
        "family":family,
        "nationalCode":nationalCode,
        "mobile":mobile
    },{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}


export const addAddress = (city,province,area,postalCode,address,no,unit) => {
    const url = `${SERVER_URL}address/add`;
    return axios.post(url, {
        "city":city,
        "province":province,
        "area":area,
        "postalCode":postalCode,
        "address":address,
        "no":no,
        "unit":unit
    },{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}

export const SearchByProductName = (productName) => {
    const url = `${SERVER_URL}pcount/getProductByWords`;
    return axios.post(url,{
        "name":productName
    })
}

export const getAddress = () => {
    const url = `${SERVER_URL}address/getAddress/1`;
    return axios.post(url,null,{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}
export const deleteAddress = (id) => {
    const url = `${SERVER_URL}address/delete/${id}`;
    return axios.delete(url,{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}
export const getAllAddress = () => {
    const url = `${SERVER_URL}address/getAddresses`;
    return axios.post(url,null,{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}


export const getByIdProduct = (id) => {
    const url = `${SERVER_URL}pcount/getByProductId/${id}`;
    return axios.post(url)
}

export const getAllProvince = (token) => {
    const url = `${SERVER_URL}province/all`;
    return axios.post(url,{},{
        headers: {
            'Authorization': 'Bearer '+token
        }})
}
export const getAllProductType = () => {
    const url = `${SERVER_URL}ptype/getAll`;
    return axios.post(url)
}

export const getCoverByPosition = (position) => {
    const url = `${SERVER_URL}cover/getByPosition/${position}`;
    return axios.post(url)
}

export const getByProductTypeAndBrand = (productTypeId,brandId) => {
    const url = `${SERVER_URL}pcount/getByProductType/${productTypeId}/brand/${brandId}`;
    return axios.post(url)
}

export const getByProductType = (productTypeId) => {
    const url = `${SERVER_URL}pcount/getByProductType/${productTypeId}`;
    return axios.post(url)
}

export const getNewProduct = (productTypeId) => {
    const url = `${SERVER_URL}pcount/getNewProduct/${productTypeId}`;
    return axios.post(url)
}

export const getProductConfig = (productId) => {
    const url = `${SERVER_URL}pconfig/getByProductid/${productId}`;
    return axios.post(url)
}

export const getFooterMenu = () => {
    const url = `${SERVER_URL}footerMenu/getAll`;
    return axios.get(url)
}

export const getProductSuggestion = () => {
    const url = `${SERVER_URL}psug/getAll`;
    return axios.post(url)
}


export const getByBrand = () => {
    const url = `${SERVER_URL}product/getByBrand/1`;
    return axios.post(url)
}

export const getMainArticle = () => {
    const url = `${SERVER_URL}article/mainArticle/`;
    return axios.post(url)
}
