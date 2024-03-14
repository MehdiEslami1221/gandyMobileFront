import React, {useState} from "react";
import iconLogin from "../assets/images/login.png";
import {useNavigate} from "react-router-dom";
import {setAuth} from "../services/Service";
import {ToastError} from "../utils/utils";


const ReceiveCode = (data) => {
    const [mobile] = useState(JSON.parse(localStorage.getItem('mobile')) || "0");
    const navigate = useNavigate();
    const [codeData, setCodeData] = useState("");
    const [errors, setErrors] = useState([]);


    const handleChange = (event) => {
        setCodeData(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (codeData < 4) {
            setErrors(["کد وارد شده معتبر نمی باشد"]);
        } else {
            setErrors([""]);
            const {data: response} = await setAuth(mobile, codeData);
            if(response?.token===undefined){
                ToastError("کد وارد شده اشتباه می باشد!")
            }else {
                window.localStorage.setItem("token", JSON.stringify(response?.token))
                window.localStorage.setItem("isLogin", JSON.stringify(true))
                console.log(response?.token)
                navigate("/");
                window.location.reload();
            }
        }
    }


    return (
        <div className="container my-3">
            <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-3">

                    <div className="my-5">

                        <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="fw-bold my-2" style={{fontSize: '14px'}}>
                کد تایید را وارد کنید
              </span>

                            <span className="fw-bold" style={{fontSize: '14px'}}>
          کد تایید برای شماره {mobile} ارسال شد
        </span>
                        </div>

                        <form action="" onSubmit={handleSubmit}>

                            <div className="form-group my-3">
                                <input type="tel" className="form-control text-center fw-bold"
                                       maxLength="20"
                                       onChange={handleChange}
                                />
                            </div>


                            {errors.map((error, index) => {
                                if (error === "") {
                                    return (<span key={index} className="d-none"/>)
                                } else {
                                    return (<div key={index} className="alert alert-danger" role="alert">
                                        <span>{error}</span>
                                    </div>)
                                }
                            })}


                            <input className="btn text-white w-100" style={{backgroundColor: "#023375"}} type="submit"
                                   value="تایید"/>

                        </form>


                        <div className="text-center my-2">
                            <span className="mt-2 text-dark fw-light" style={{fontSize: '12px'}}>
          ثبت نام شما به معنای پذیرش قوانین موبایل گاندی است
        </span>
                        </div>

                    </div>
                </div>

                <div className="col-9 d-none d-lg-flex justify-content-center">

                    <img src={iconLogin} className="w-50" alt="login"/>
                </div>
            </div>

        </div>
    );
};

export default ReceiveCode;
