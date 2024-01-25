const NewsArticles = () => {
    return (
        <div className="my-5" id="news">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold">اخبار و مقالات</h6>
                <div className="d-flex justify-content-end align-items-center">
                    <a href="#" className="d-flex text-decoration-none link-secondary">
                        <h6 className="me-2">مشاهده</h6>
                        <span className="fa fa-arrow-left fs-6"/>
                    </a>

                </div>
            </div>


            <div className="container p-0 m-0 mt-3">
                <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                            <a href="#" className="card text-decoration-none link-secondary">
                                <img src="https://www.digikala.com/mag/wp-content/uploads/2024/01/10.12.jpg"
                                     className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h6 className="card-title text-dark fw-bold">خواندنی‌ها</h6>
                                    <p className="card-text fw-bold text-justify" style={{fontSize:'12px',textAlign:"justify",textJustify:"inter-word"}}>۳ دلیل برای خریدن شیائومی ردمی ۱۳C (و ۳ دلیل برای
                                        نخریدن)</p>
                                </div>
                            </a>
                        </div>


                    <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                        <a href="#" className="card text-decoration-none link-secondary">
                            <img src="https://www.digikala.com/mag/wp-content/uploads/2023/12/10.03-8.jpg"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title text-dark fw-bold">خواندنی‌ها</h6>
                                <p className="card-text fw-bold text-justify" style={{fontSize:'12px',textAlign:"justify",textJustify:"inter-word"}}>بررسی پاوربانک شیائومی PB100DZM؛ بدنه‌ی فلزی و سرعت ۲۲.۵ وات</p>
                            </div>
                        </a>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                        <a href="#" className="card text-decoration-none link-secondary">
                            <img src="https://www.digikala.com/mag/wp-content/uploads/2023/12/09.29-13.jpg"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title text-dark fw-bold">خواندنی‌ها</h6>
                                <p className="card-text fw-bold text-justify" style={{fontSize:'12px',textAlign:"justify",textJustify:"inter-word"}}>
                                    بررسی داک بلکین WIB003vfWH؛ هم استند، هم شارژر
                                <br/>
                                <br/>
                                </p>
                            </div>
                        </a>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                        <a href="#" className="card text-decoration-none link-secondary">
                            <img src="https://www.digikala.com/mag/wp-content/uploads/2023/12/10.03-39.jpg"
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title text-dark fw-bold">خواندنی‌ها</h6>
                                <p className="card-text fw-bold text-justify" style={{fontSize:'12px',textAlign:"justify",textJustify:"inter-word"}}>۳ دلیل برای خریدن شیائومی ردمی ۱۳C (و ۳ دلیل برای
                                    نخریدن)</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NewsArticles;