import iconLogin from "../assets/images/login.png";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import validator from 'validator';
import {setlogin} from "../services/Service";
import {setMobile} from "../utils/utils";


const SendMobile = () => {
    const navigate = useNavigate();
    const [mobileData, setMobileData] = useState("");
    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        setMobileData(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validator?.isMobilePhone(mobileData, 'fa-IR')) {
            setErrors(["شماره وارد شده معتبر نمی باشد"]);
        } else {
            setErrors([""]);
            const {data: response} = await setlogin(mobileData);
            if (response) {
                window.localStorage.setItem("mobile", JSON.stringify(mobileData))
                navigate("/receiveCode");
            } else {
                setErrors(["خطا در برقراری ارتباط"]);
            }
        }
    }


    return (
        <div className="container my-3">
            <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-3">
                    <div className="my-5">

              <span className="fw-bold my-2" style={{fontSize: '14px'}}>
                شماره موبایل را وارد کنید
              </span>

                        <form action="" onSubmit={handleSubmit} className="text-center">
                            <div className="form-group my-3">
                                <input type="tel" className="form-control" placeholder="09123456789" maxLength="20"
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
                                   value="ورود"/>
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
}
export default SendMobile