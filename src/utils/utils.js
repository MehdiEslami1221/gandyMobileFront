import {Bounce, toast} from "react-toastify";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function ToastError(str){
    toast.error(str, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl:true,
        theme: "light",
        transition: Bounce,
    });
}


export function ToastSuccess(str){
    toast.success(str, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl:true,
        theme: "light",
        transition: Bounce,
    });
}





