import React, {useEffect, useState} from "react";

import iconWhatsAppFooter from '../assets/icons/whatsapp-footer.svg';
import iconTelegramFooter from '../assets/icons/telegram-footer.svg';
import iconFacebookFooter from '../assets/icons/facebook-footer.svg';
import iconInstagramFooter from '../assets/icons/instagram-footer.svg';


import imgSamandehiFooter from '../assets/images/samandehi.png';
import imgEtehadieFooter from '../assets/images/etehadie-keshvari.png';
import imgNamadFooter from '../assets/images/namad.png';
import {getFooterMenu, getFooterSubMenu, getWebInfo} from "../services/Service";




const Footer = ({data}) => {
    const [webinfo, setWebInfo] = useState({});
    const [footerSubMenu, setfooterSubMenu] = useState([]);
    const [footerMenu, setfooterMenu] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: webInfoData} = await getWebInfo();
                const {data: footerMenu} = await getFooterMenu();
                const {data: footerSubMenu} = await getFooterSubMenu();
                setWebInfo(webInfoData)
                setfooterMenu(footerMenu)
                setfooterSubMenu(footerSubMenu)
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return (


        <div className="p-5" style={{backgroundColor: "#023375"}}>


            {/*{footerSubMenu.map(e =>*/}
            {/*        <h1 className="text-light" key={e.id}>{e.id}</h1>*/}
            {/*)*/}
            {/*}            */}


            {/*{*/}
            {/*    footerSubMenu.map(*/}
            {/*        e =>*/}
            {/*            <h1 className={"text-light"}>{e.footerMenu.name}</h1>*/}
            {/*    )*/}
            {/*}*/}

            <div className="flex-row">
                {

                    // let pp = arr.filter( (ele, ind) => ind === arr.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))


                    footerMenu.map(menu => {

                        const uniqueNames = footerSubMenu.filter((val, id, array) => {
                            return array.indexOf(val) === id;
                        });


                        return <h1>{uniqueNames.id}</h1>
                        }
                    )
                }
            </div>

            {/*.filter(user => user.name.includes(value));*/}
            <div className="d-flex">
                {
                    // footerMenu.map(e => <div className="flex-row px-5 text-light">{e.id}
                    //         {
                    //             footerSubMenu.filter(subMenu=>subMenu.id===1).map(sub=> <h1>{sub.id}</h1>)
                    //         }
                    //     </div>
                    // )


                    // [...Array(footerMenu.length)].map((x, i) =>
                    //     <div className="d-flex flex-column align-items-start">
                    //         <span className="text-light fs-6 mx-3">{footerMenu.name}</span>
                    //         <ul className="navbar-nav">
                    //             {/*{[...Array(footerSubMenu.length)].map((x, i) =>*/}
                    //             {/*    <li className="nav-item mx-3">*/}
                    //             {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
                    //             {/*        <a className="link-light link-opacity-50-hover text-decoration-none"*/}
                    //             {/*           style={{fontSize: '0.8rem'}} href={footerMenu.id}>{footerMenu.id}</a>*/}
                    //             {/*    </li>*/}
                    //             {/*)}*/}
                    //         </ul>
                    //     </div>
                    // )

                }
            </div>


            <footer className="text-center m-0 p-0">

                <div className="mx-3 my-3">
                    <div className="d-flex">
                        <span className="text-light">تلفن:</span>
                        <span className="text-light mx-2">{webinfo.tell}</span>
                    </div>

                    <div className="d-flex mt-3">
                        <span className="text-light">ایمیل:</span>
                        <span className="text-light mx-2">{webinfo.email}</span>
                    </div>
                </div>


                <div className="d-flex">
                    {[...Array(6)].map((x, i) =>
                        <div className="d-flex flex-column align-items-start">
                            <span className="text-light fs-6 mx-3">تست عنوان</span>
                            <ul className="navbar-nav">
                                {[...Array(6)].map((x, i) =>
                                    <li className="nav-item mx-3">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="link-light link-opacity-50-hover text-decoration-none"
                                           style={{fontSize: '0.8rem'}} href="#">تست ساب منو</a>
                                    </li>
                                )}
                            </ul>

                        </div>
                    )}
                </div>


                <div className="mx-3 mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column align-items-start">
                                <h5 className="text-white">موبایل گاندی</h5>
                                <span className="text-white">موبایل گاندی واردکننده رسمی تلفن همراه و گوشی هوشمند</span>
                                <p className="text-white fw-light mt-4"
                                   style={{textAlign: "justify", textJustify: "inter-word", fontSize: '14px'}}>
                                    {webinfo.aboutUs}
                                </p>
                            </div>
                        </div>
                        <div className="col text-center">

                            <div className="d-flex flex-column align-items-start">
                                <h5 className="text-white">عضویت در خبرنامه</h5>
                            </div>

                            <div className="d-flex mt-3 flex-column align-items-center">

                                <div className="form-group w-75">
                                    <input type="text" className="form-control text-end" placeholder="sample@mail.com"/>

                                    <input type="text" className="form-control text-end mt-2"
                                           placeholder="09123456789"/>


                                </div>
                            </div>
                            <div className="text-white d-flex flex-row justify-content-center align-items-center mt-3">

                                <a href="#" className="text-decoration-none link-secondary mx-2">
                                    <img src={imgEtehadieFooter} alt="Logo"/>
                                </a>

                                <a href="#" className="text-decoration-none link-secondary mx-2">
                                    <img src={imgSamandehiFooter} alt="Logo"/>
                                </a>

                                <a href="#" className="text-decoration-none link-secondary mx-2">
                                    <img src={imgNamadFooter} alt="Logo"/>
                                </a>
                            </div>


                        </div>
                        <div className="col">

                            <div className="d-flex flex-column align-items-start">
                                <h5 className="text-white">اطلاعات تماس</h5>

                                <ul className="text-white d-flex flex-column align-items-start">

                                    <li style={{fontSize: '14px'}} className="my-1">
                                        <span className="me-2">تلفن:</span>
                                        <span>{webinfo.tell}</span>
                                    </li>

                                    <li style={{fontSize: '14px'}} className="my-1">
                                        <span className="me-2">ایمیل:</span>
                                        <span>{webinfo.email}</span>
                                    </li>

                                    <li style={{fontSize: '14px'}} className="my-1">
                                        <span className="me-2">ساعت کاری:</span>
                                        <span>{webinfo.workTime}</span>
                                    </li>

                                    <li style={{fontSize: '14px'}} className="my-1">
                                        <span className="me-2">ما را در شبکه های اجتماعی دنبال کنید</span>
                                    </li>
                                </ul>

                                <div
                                    className="d-flex flex-row align-items-start justify-content-end align-items-center">

                                    <a href="#" className="text-decoration-none link-secondary mx-2">
                                        <img src={iconWhatsAppFooter} alt="Logo"/>
                                    </a>

                                    <a href="#" className="text-decoration-none link-secondary mx-2">
                                        <img src={iconTelegramFooter} alt="Logo"/>
                                    </a>

                                    <a href="#" className="text-decoration-none link-secondary mx-2">
                                        <img src={iconFacebookFooter} alt="Logo"/>
                                    </a>

                                    <a href="#" className="text-decoration-none link-secondary mx-2">
                                        <img src={iconInstagramFooter} alt="Logo"/>
                                    </a>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
export default Footer;