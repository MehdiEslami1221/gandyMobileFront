import React, {useEffect, useState} from "react";
import {getNewProduct, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";
import Countdown from "react-countdown";

export default function ShowAllLatestProducts() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getNewProduct(6);
                setProduct(dataSlider)
                console.log(product)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (


        <div className="col-12 col-lg-12 d-flex flex-column">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center my-3">
                <div className="align-items-lg-center">
                    <span className="mx-2 fa fa-sort-amount-asc" style={{fontSize: '12px'}}/>
                    <span className="mx-2 fw-bold" style={{fontSize: '12px'}}>مرتب سازی:</span>
                </div>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none pointer-event mx-2 text-secondary"
                   style={{fontSize: '12px'}}>پرفروش
                    ترین</a>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none mx-2 text-secondary"
                   style={{fontSize: '12px'}}>مرتبط
                    ترین</a>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none mx-2 text-secondary"
                   style={{fontSize: '12px'}}>پربازدیدترین</a>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none mx-2 text-secondary"
                   style={{fontSize: '12px'}}>جدیدترین</a>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none mx-2 text-secondary"
                   style={{fontSize: '12px'}}>ارزان
                    ترین</a>
                <a href="#"
                   className="link-dark my-2 my-lg-0 rounded-3 p-2 bg-light link-opacity-50 text-decoration-none mx-2 text-secondary"
                   style={{fontSize: '12px'}}>گران
                    ترین</a>
            </div>

            <div>
                <div className="py-2">


                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                            {
                                product.map(item =>

                                    <div className="col">
                                        <Link
                                            key={product.id}
                                            to={'/internal/' + item?.product?.id}
                                            className="text-decoration-none link-secondary"
                                            style={{height: '300px'}}>
                                            <div className="card">
                                                <div
                                                    className="card-body d-flex flex-column align-items-start justify-content-end">
                                                    <img
                                                        src={SERVER_URL + 'upload/files/' + item?.productImage['img']}
                                                        alt="Shegeftangiz" className="img-fluid"/>

                                                    <span className="fw-bold my-2" style={{fontSize: '14px'}}>
                                                            {item?.product?.name}
                                                        </span>


                                                    <div className="d-flex flex-row w-100">
                                                        <div
                                                            className="col-2 d-flex align-items-center justify-content-center">
                                                                    <span className="badge bg-danger p-2"
                                                                          style={{fontSize: '12px'}}>%{item['discount']?.discountVal}</span>
                                                        </div>

                                                        <div
                                                            className="col-8 d-flex m-0 pe-lg-1 flex-column align-items-end justify-content-center">
                                                            <span>{item?.finalPrice}</span>
                                                            <s className="text-secondary opacity-50">{item?.price}</s>
                                                        </div>

                                                        <div
                                                            className="col-2 d-flex align-items-center justify-content-center">
                                                                    <span className="text-secondary opacity-75"
                                                                          style={{fontSize: '12px'}}>تومان</span>
                                                        </div>

                                                    </div>
                                                    <div className="d-flex w-100 justify-content-center">
                                                                <span className="text-danger fw-bold mt-2"
                                                                      style={{fontSize: '14px'}}><Countdown
                                                                    date={new Date(item['discount']?.expire_at)}/></span>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }


                        </div>
                    </div>

                    {/*{*/}
                    {/*    product.length > 0 ?*/}
                    {/*        product.map(product =>*/}
                    {/*            <ProductListItem items={product}/>*/}
                    {/*        ) : <div*/}
                    {/*            className="d-flex justify-content-center text-center justify-content-center align-items-center">*/}
                    {/*            <h1 className="fs-5 m-5 text-danger">محصولی یافت نشد!</h1>*/}
                    {/*        </div>*/}
                    {/*}*/}

                </div>

            </div>

        </div>

    )

}