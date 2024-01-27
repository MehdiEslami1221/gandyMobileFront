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
                                    <span>گوشی ساده و ارزان</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>تا ۵ میلیون</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>تا ۱۵ میلیون</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>تا ۲۰ میلیون</span>
                                </div>
                            </a>


                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>تا ۵۰ میلیون</span>
                                </div>
                            </a>


                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>تا ۷۵ میلیون</span>
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
                                    <span>گیمینگ</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>دوربین</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>5G</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>باتری</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>ضدآب</span>
                                </div>
                            </a>

                            <a href="#" className="col-4 text-decoration-none link-secondary">
                                <div className="p-2 border bg-light rounded text-center bg-white">
                                    <span>شارژ سریع</span>
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