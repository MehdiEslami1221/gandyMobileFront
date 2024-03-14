const FeatureFilter = () => {
    return (

        <div>

            <div className="row my-2">
                <div className="col-sm-12 my-2 col-md-6">
                    <div className="flex-column rounded-3 bg-light p-3 m-1">
                        <span>گوشی بر اساس قیمت</span>
                        <div className="row g-2 my-3">
                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}> گوشی ارزان</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>تا ۵ میلیون</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>تا ۱۵ میلیون</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>تا ۲۰ میلیون</span>
                                </div>
                            </a>


                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>تا ۵۰ میلیون</span>
                                </div>
                            </a>


                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>تا ۷۵ میلیون</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 my-2 col-md-6">
                    <div className="flex-column rounded-3 bg-light p-3 m-1">
                        <span>گوشی بر اساس ویژگی</span>
                        <div className="row g-2 my-3">

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>گیمینگ</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>دوربین</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>5G</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>باتری</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>ضدآب</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span className="fw-bold" style={{fontSize:'12px'}}>شارژ سریع</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeatureFilter;