import React, {useEffect, useState} from "react";
import {addAddress, addProfile, deleteAddress, getAllAddress, getAllProvince, getUserInfo} from "../services/Service";
import {ToastSuccess} from "../utils/utils";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [login] = useState(JSON.parse(localStorage.getItem('isLogin')) || false);

    const [nameInput, setNameInput] = useState();
    const [familyInput, setFamilyInput] = useState();
    const [nationalCodeInput, setNationalCodeInput] = useState();
    const [mobileInput, setMobileInput] = useState();


    const [cityInput, setCityInput] = useState(0);
    const [provinceInput, setProvinceInput] = useState(0);
    const [areaInput, setAreaInput] = useState();
    const [postalCodeInput, setPostalCodeInput] = useState();
    const [addressInput, setAddressInput] = useState();
    const [noInput, setNoInput] = useState();
    const [unitInput, setUnitInput] = useState();


    const [province, setProvince] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (login) {
                    const {data: dataProvince} = await getAllProvince();
                    setProvince(dataProvince)
                    const {data: dataResult} = await getUserInfo();
                    setNameInput(dataResult?.name)
                    setFamilyInput(dataResult?.family)
                    setMobileInput(dataResult?.mobile)
                    setNationalCodeInput(dataResult?.nationalCode)
                }
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataResult} = await getAllAddress();
                setAddress(dataResult)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <div className="container w-50 py-5">

            <div>
                <span className="fw-bold">ثبت نام در موبایل گاندی</span>


                <div className="input-group mt-5">
                    <input type="text" placeholder="نام" className="form-control mx-1"
                           value={nameInput}
                           onChange={(event) => setNameInput(event.target.value)}/>
                    <input type="text" placeholder="نام خانوادگی" className="form-control mx-1"
                           value={familyInput}
                           onChange={(event) => setFamilyInput(event.target.value)}/>
                </div>

                <div className="input-group mt-2">
                    <input type="tel" maxLength="12" placeholder="کد ملی" className="form-control mx-1 text-start"
                           value={nationalCodeInput}
                           onChange={(event) => setNationalCodeInput(event.target.value)}/>

                    <fieldset disabled className="form-control mx-1">
                        <input type="tel" maxLength="12" placeholder="شماره همراه"
                               className="text-start border-0"
                               value={mobileInput}
                               id="disabledTextInput"/>
                    </fieldset>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn col-10 text-white mt-3"
                        onClick={() => {
                            const fetchData = async () => {
                                try {
                                    const {data: dataResult} = await addProfile(
                                        nameInput,
                                        familyInput,
                                        nationalCodeInput,
                                        mobileInput,
                                    );
                                    ToastSuccess('عملیات با موفقیت انجام شد!')
                                } catch (err) {
                                    console.log(err.message())
                                }
                            }
                            fetchData().then(r => r);

                        }
                        } style={{backgroundColor: "#023375"}}>ثبت تغییرات
                </button>
            </div>


            <hr className="my-5"/>

            <div>

                <div className="d-flex flex-row align-items-center">
                    <span className="fw-bold me-3">اضافه کردن آدرس جدید</span>
                    <button type="button" className="btn btn-success" data-toggle="modal"
                            data-target="#AddAddressModal">+
                    </button>
                </div>

                <div className="modal fade" id="AddAddressModal" tabIndex="-1" role="dialog"
                     aria-labelledby="AddressModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="AddressModalLabel">اضافه کردن آدرس جدید</h5>
                                <a type="button"
                                   className="close link-secondary link-opacity-50-hover text-decoration-none"
                                   data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="fa fa-close"/>
                                </a>
                            </div>
                            <div className="modal-body">

                                <span>آدرس گیرنده را وارد کنید</span>


                                <div className="d-flex flex-row my-3">

                                    <select className="form-select mx-1" aria-label="Default select example">
                                        <option selected>استان</option>
                                        {
                                            province.map(item =>
                                                <option value="1">{item.name}</option>
                                            )
                                        }
                                    </select>

                                    <select className="form-select mx-1" aria-label="Default select example">
                                        <option selected>شهر</option>
                                        <option value="1">گرگان</option>
                                        <option value="2">تهران</option>
                                        <option value="3">اهواز</option>
                                    </select>

                                </div>

                                <div className="input-group mt-2">
                                    <input type="text" maxLength="12" placeholder="محله"
                                           className="form-control mx-1 text-start"
                                           value={areaInput}
                                           onChange={(event) => setAreaInput(event.target.value)}/>

                                    <input type="tel" maxLength="12" placeholder="کد پستی"
                                           className="form-control mx-1 text-start"
                                           value={postalCodeInput}
                                           onChange={(event) => setPostalCodeInput(event.target.value)}/>
                                </div>


                                <div className="my-3 mx-1">
                    <textarea className="form-control"
                              placeholder="آدرس پستی"
                              id="exampleFormControlTextarea1" rows="3"
                              value={addressInput}
                              onChange={(event) => setAddressInput(event.target.value)}/>
                                </div>


                                <div className="input-group mt-2">
                                    <input type="tel" maxLength="12" placeholder="پلاک"
                                           className="form-control mx-1 text-start"
                                           value={noInput}
                                           onChange={(event) => setNoInput(event.target.value)}/>

                                    <input type="tel" maxLength="12" placeholder="واحد"
                                           className="form-control mx-1 text-start"
                                           value={unitInput}
                                           onChange={(event) => setUnitInput(event.target.value)}/>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">بستن</button>
                                <button
                                    onClick={() => {
                                        const fetchData = async () => {
                                            try {
                                                const {data: dataResult} = await addAddress(
                                                    1,
                                                    1,
                                                    areaInput,
                                                    postalCodeInput,
                                                    addressInput,
                                                    noInput,
                                                    unitInput,
                                                );
                                                ToastSuccess('عملیات با موفقیت انجام شد!')
                                                window.location.reload()
                                            } catch (err) {}
                                        }
                                        fetchData().then(r => r);

                                    }}
                                    style={{backgroundColor: "#023375"}}
                                    type="button" className="btn btn-primary">ثبت آدرس
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center my-5">


                    {
                        address?.length>0?(                 address.map(item =>


                            <div className="d-flex align-items-center bg-light  shadow-sm rounded-3 my-2">
                                <div className="d-flex flex-column  p-3 col-11">
                                    <div className="d-flex align-items-center my-2">
                                        <h5 style={{fontSize: '14px'}}>آدرس:</h5>
                                        <h5 style={{fontSize: '14px'}} className="ms-2">{item?.address}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mx-5">


                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>کد پستی:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.postalCode}</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>استان:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.province?.name}</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>شهر:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.city?.name}</h5>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mx-5">
                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>منطقه:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.area}</h5>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>پلاک:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.no}</h5>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <h5 style={{fontSize: '14px'}}>واحد:</h5>
                                            <h5 style={{fontSize: '14px'}} className="ms-2">{item?.unit}</h5>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-1 d-flex justify-content-center">
                                    <a style={{cursor:'pointer'}} onClick={async () => {
                                        await deleteAddress(item?.id)
                                        window.location.reload()

                                    }} className="text-decoration-none">
                                        <span className="fa fa-remove"/>
                                    </a>
                                </div>


                            </div>
                        )):(
                            <h5 className="fw-bold" style={{fontSize:'12px'}}>آدرسی یافت نشد</h5>
                        )

                    }
                </div>

            </div>


        </div>
    )
}

export default Profile;