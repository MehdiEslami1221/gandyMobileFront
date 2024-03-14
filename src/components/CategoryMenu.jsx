import React, {useState} from 'react';

import '../navStyle.css';
import styles from '../navStyle.module.css';

import smartwhatchIcon from '../assets/icons/smartWatch.svg';
import airpods from '../assets/icons/airpods-test.svg';
import phone from '../assets/icons/phone-test.svg';
import phoneParts from '../assets/icons/phoneParts-test.svg';


const  categoryList = [
    {
        id: 1,
        name: 'گوشی موبایل',
        'subType': [
            {
                id: 1,
                typeId:1,
                name: 'موبایل',

            },
            {
                id: 2,
                typeId:1,
                name: 'لوازم جانبی موبایل',

            },
            {
                id: 3,
                typeId:1,
                name: 'قطعات موبایل',
            },
            {
                id: 4,
                typeId:1,
                name: 'گوشی براساس حافظه',
            },
            {
                id: 5,
                typeId:1,
                name: 'گوشی براساس قیمت',
            }
        ]
    },


    {
        id: 2,
        name: 'لپ تاپ و تبلت',
        'subType': [
            {
                id: 1,
                typeId:2,
                name: 'لپ‌تاپ‌ها',

            },
            {
                id: 2,
                typeId:2,
                name: 'لپ تاپ براساس کاربرد',

            },
            {
                id: 2,
                typeId:2,
                name: 'تبلت',

            }
        ]
    },


    {
        id: 3,
        name: 'هدفون و هندزفری',
        'subType': [
            {
                id: 1,
                typeId:3,
                name: 'هندزفری',

            },
            {
                id: 2,
                typeId:3,
                name: 'هدفون و هدست',

            },
            {
                id: 3,
                typeId:3,
                name: 'لوازم جانبی هندزفری',
            },
            {
                id: 4,
                typeId:3,
                name: 'هندزفری بر اساس کاربرد',
            }
        ]
    },


    {
        id: 4,
        name: 'ساعت و بند هوشمند',
        'subType': [
            {
                id: 1,
                typeId:4,
                name: 'ساعت هوشمند',

            },
            {
                id: 2,
                typeId:4,
                name: 'ساعت مچی',

            },
            {
                id: 3,
                typeId:4,
                name: 'لوازم جانبی ساعت هوشمند',
            },
            {
                id: 3,
                typeId:4,
                name: 'ساعت بر اساس قیمت',
            }
        ]
    },


    {
        id: 5,
        name: 'شبکه و تجهیزات ذخیره سازی',
        'subType': [
            {
                id: 1,
                typeId:5,
                name: 'ساعت هوشمند',

            },
            {
                id: 2,
                typeId:5,
                name: 'ساعت مچی',

            },
            {
                id: 3,
                typeId:5,
                name: 'لوازم جانبی ساعت هوشمند',
            }
        ]
    },

    {
        id: 6,
        name: 'گیمینگ',
        'subType': [
            {
                id: 1,
                typeId:6,
                name: 'کنسول‌های بازی',

            },
            {
                id: 2,
                typeId:6,
                name: 'دسته‌های بازی',

            },
            {
                id: 3,
                typeId:6,
                name: 'تجهیزات و لوازم گیمینگ',
            },
            {
                id: 4,
                typeId:6,
                name: 'لوازم جانبی کنسول بازی',
            }
        ]
    },

];





function CategoryMenu() {



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-flex">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">



                    {
                        categoryList.map(item =>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {item.name}
                                </a>
                                <div className="dropdown-menu p-0 border-0 rounded-3 shadow"
                                     aria-labelledby="navbarDropdownMenuLink">
                                    <div className="d-flex flex-row p-0 border-0 rounded-3 shadow">
                                        <div className="d-flex flex-row m-0 p-0 align-items-center">


                                            <div className="d-flex col-10 flex-column rounded-start-3 h-100"
                                                 style={{width: '300px', backgroundColor: '#ffffff'}}>
                                                {
                                                    item['subType'].map(subType =>

                                                        <div
                                                                className="d-flex flex-row align-items-center link-dark my-4 mx-3">
                                                                <img src={phone} style={{width: '30px'}}/>

                                                                <span className={styles.IconDiv} style={{
                                                                    fontSize: '16px',
                                                                    marginLeft: '10px',
                                                                    marginRight: '10px',
                                                                    width: '90%'
                                                                }}>
                                                <span className="fw-bold">{subType.name}</span>
                                            </span>
                                                                <div className={styles.hide}>
                                                <span style={{fontSize: '14px', width: '20px'}}
                                                      className="fa fa-arrow-left text-dark"/>
                                                                </div>
                                                            </div>

                                                    )
                                                }
                                            </div>


                                            <div
                                                className="d-flex flex-column justify-content-start rounded-end-3 h-100"
                                                style={{backgroundColor: '#ecf0f3'}}>


                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره یک</span>
                                                </a>


                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره دو</span>
                                                </a>

                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره سه</span>
                                                </a>

                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره چهار</span>
                                                </a>

                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره پنج</span>
                                                </a>

                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره شش</span>
                                                </a>

                                                <a className="d-flex flex-row text-decoration-none my-3 mx-2"
                                                   style={{cursor: 'pointer', minWidth: '200px', maxWidth: '500px'}}>
                                                    <span className="fw-bold" style={{fontSize: '12px'}}>تست محصول شماره هفت</span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </nav>

    );
}

export default CategoryMenu;


// onMouseEnter={changeBackground}
// onMouseLeave={changeBackgroundBlack}>