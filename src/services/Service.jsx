import axios from "axios";

export const SERVER_URL = "http://192.168.1.56:8081/api/";


export const getWebInfo = () => {
    const url = `${SERVER_URL}webInfo/getById/1`;
    return axios.get(url)
}


export const getAllSlider = () => {
    const url = `${SERVER_URL}slider/getAll`;
    return axios.get(url)
}

export const getAllProduct = () => {
    const url = `${SERVER_URL}productAccess/getAll`;
    return axios.post(url)
}

export const getFooterMenu = () => {
    const url = `${SERVER_URL}footerMenu/getAll`;
    return axios.get(url)
}

export const getFooterSubMenu = () => {
    const url = `${SERVER_URL}footerSubMenu/getAll`;
    return axios.get(url)
}


export const getByBrand = () => {
    const url = `${SERVER_URL}product/getByBrand/1`;
    return axios.post(url)
}
