import React, {useEffect, useState} from "react";
import {getByProductTypeAndBrand, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";

const GroupMenu = () => {

    const [productTypeOne, setproductTypeOne] = useState([]);
    const [productTypeTwo, setproductTypeTwo] = useState([]);
    const [productTypeThree, setproductTypeThree] = useState([]);
    const [productTypeFour, setproductTypeFour] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataPositionOne} = await getByProductTypeAndBrand(6, 5);
                const {data: dataPositionTwo} = await getByProductTypeAndBrand(6, 2);
                const {data: dataPositionThree} = await getByProductTypeAndBrand(6, 3);
                const {data: dataPositionFour} = await getByProductTypeAndBrand(6, 4);
                setproductTypeOne(dataPositionOne["productCountResponses"])
                setproductTypeTwo(dataPositionTwo["productCountResponses"])
                setproductTypeThree(dataPositionThree["productCountResponses"])
                setproductTypeFour(dataPositionFour["productCountResponses"])
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);

    return (

        <div className="container m-0 p-0 my-3">
            <div className="row">

                {
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="my-1">
                            <div className="card p-3">
                                <h6 className="fw-bold">{productTypeOne[0]?.product.brand.name}</h6>
                                <span className="fs-6"> بر اساس بازدیدهای شما</span>
                                <div className="row m-1">
                                    {
                                        productTypeOne.map(result =>
                                            <Link
                                                href="#" className="text-decoration-none col-6 p-3"
                                                key={productTypeOne[0]?.product?.id}
                                                to={'/internal/' + productTypeOne[0]?.product?.id}>
                                                <img
                                                    src={SERVER_URL + 'upload/files/' + result.productImage?.img}
                                                    alt="..." className="figure-img col-12 m-0"/>
                                            </Link>
                                        )
                                    }
                                </div>
                                <a
                                    className="d-flex justify-content-center align-items-center text-decoration-none link-info">
                                    <span className="fs-6 me-2">مشاهده</span>
                                    <span className="fs-6 fa fa-arrow-left"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                }

                {
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="my-1">
                            <div className="card p-3">
                                <h6 className="fw-bold">{productTypeTwo[0]?.product.brand.name}</h6>
                                <span className="fs-6"> بر اساس بازدیدهای شما</span>
                                <div className="row m-1">
                                    {
                                        productTypeTwo?.map(result =>
                                            <Link
                                                href="#" className="text-decoration-none col-6 p-3"
                                                key={productTypeTwo[0]?.product?.id}
                                                to={'/internal/' + productTypeTwo[0]?.product?.id}>
                                                <img
                                                    src={SERVER_URL + 'upload/files/' + result.productImage?.img}
                                                    alt="..." className="figure-img col-12 m-0"/>
                                            </Link>
                                        )
                                    }
                                </div>
                                <a
                                    className="d-flex justify-content-center align-items-center text-decoration-none link-info">
                                    <span className="fs-6 me-2">مشاهده</span>
                                    <span className="fs-6 fa fa-arrow-left"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                }

                {
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="my-1">
                            <div className="card p-3">
                                <h6 className="fw-bold">{productTypeThree[0]?.product.brand.name}</h6>
                                <span className="fs-6"> بر اساس بازدیدهای شما</span>
                                <div className="row m-1">
                                    {
                                        productTypeThree?.map(result =>
                                            <Link
                                                href="#" className="text-decoration-none col-6 p-3"
                                                key={productTypeThree[0]?.product?.id}
                                                to={'/internal/' + productTypeThree[0]?.product?.id}>
                                                <img
                                                    src={SERVER_URL + 'upload/files/' + result.productImage?.img}
                                                    alt="..." className="figure-img col-12 m-0"/>
                                            </Link>
                                        )
                                    }
                                </div>
                                <a
                                    className="d-flex justify-content-center align-items-center text-decoration-none link-info">
                                    <span className="fs-6 me-2">مشاهده</span>
                                    <span className="fs-6 fa fa-arrow-left"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                }

                {
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="my-1">
                            <div className="card p-3">
                                <h6 className="fw-bold">{productTypeFour[0]?.product.brand.name}</h6>
                                <span className="fs-6"> بر اساس بازدیدهای شما</span>
                                <div className="row m-1">
                                    {
                                        productTypeFour?.map(result =>
                                            <Link
                                                href="#" className="text-decoration-none col-6 p-3"
                                                key={productTypeFour[0]?.product?.id}
                                                to={'/internal/' + productTypeFour[0]?.product?.id}>
                                                <img
                                                    src={SERVER_URL + 'upload/files/' + result.productImage?.img}
                                                    alt="..." className="figure-img col-12 m-0"/>
                                            </Link>
                                        )
                                    }
                                </div>
                                <a
                                    className="d-flex justify-content-center align-items-center text-decoration-none link-info">
                                    <span className="fs-6 me-2">مشاهده</span>
                                    <span className="fs-6 fa fa-arrow-left"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

    )

}
export default GroupMenu;