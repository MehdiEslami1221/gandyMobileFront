import React from "react";

const GroupMenu = () => {
    return (

        <div className="container m-0 p-0 my-3">
            <div className="row">

                {[...Array(4)].map((x, i) =>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="my-1">
                            <div className="card p-3">
                                <h6 className="fw-bold">گوشی سامسونگ</h6>
                                <span className="fs-6"> بر اساس بازدیدهای شما</span>
                                <div className="row m-1">
                                    <img
                                        src="https://dkstatics-public.digikala.com/digikala-products/1e32939c603e4c1e1b1b403f0886446a59c2f0ae_1696062786.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                        alt="..." className="figure-img col-6 p-3 m-0"/>
                                    <img
                                        src="https://dkstatics-public.digikala.com/digikala-products/1cd66e6fda5472ae2aa2c3153fad2872d328e2cd_1696071107.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                        alt="..." className="figure-img col-6 p-3 m-0"/>
                                    <img
                                        src="https://dkstatics-public.digikala.com/digikala-products/848235ab5bf0d1e15eb29c95f6ebea3d2c19f5a1_1696079374.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                        alt="..." className="figure-img col-6 p-3 m-0"/>
                                    <img
                                        src="https://dkstatics-public.digikala.com/digikala-products/b36160cee4c65073dc4e09e836138c1ef2454bb3_1696071764.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                        alt="..." className="figure-img col-6 p-3 m-0"/>
                                </div>
                                <a href="#"
                                   className="d-flex justify-content-center align-items-center text-decoration-none link-info">
                                    <span className="fs-6 me-2">مشاهده</span>
                                    <span className="fs-6 fa fa-arrow-left"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )

}
export default GroupMenu;