import React, {useEffect, useState} from "react";

import iconSms from '../assets/icons/sms.svg';
import iconWhatsApp from '../assets/icons/whatsapp.svg';
import iconTelegram from '../assets/icons/telegram.svg';
import iconHeadphone from '../assets/icons/headphone.svg';
import {getWebInfo} from "../services/Service";

const TopMenuBar = () => {


    const [webinfo, setWebInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {

                const {data: webInfoData} = await getWebInfo();
                setWebInfo(webInfoData)

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light px-3 user-select-none">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#">راهنمای خرید<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#">قیمت لحظه ای</a>
                    </li>
                    <li className="nav-item">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#">مقایسه گوشی</a>
                    </li>

                    <li className="nav-item">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#">پیگیری سفارشات</a>
                    </li>

                    <li className="nav-item">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#news">مجله موبایل گاندی</a>
                    </li>
                </ul>
                <div>
                    <div className="d-flex justify-content-end align-items-center ">
                        <a href={webinfo.mobile} className="text-decoration-none link-secondary mx-2">
                            <img src={iconSms} alt="Logo"/>
                        </a>
                        <a href={webinfo.whatsApp} className="text-decoration-none link-secondary mx-2">
                            <img src={iconWhatsApp} alt="Logo"/>
                        </a>
                        <a href={webinfo.telegram} className="text-decoration-none link-secondary mx-2">
                            <img src={iconTelegram} alt="Logo"/>
                        </a>
                        <a href={webinfo.tell} className="text-decoration-none link-secondary mx-2"><span
                            className="fw-bold mx-1">{webinfo.tell}</span>
                            <img src={iconHeadphone} alt="Logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>)
}
export default TopMenuBar;