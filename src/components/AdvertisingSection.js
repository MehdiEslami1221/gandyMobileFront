const AdvertisingSection = () => {
    return (
        <div>

            <div className="row p-0 my-3">
                {[...Array(1)].map((x, i) =>
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#" className="col">
                        <img
                            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b23f7cb598f718f5c7a7f558890e7b8e5c8cbd89_1702455312.jpg?x-oss-process=image/quality,q_95/format,webp"
                            alt="..." className="img-fluid w-100 rounded-3"/>
                    </a>
                )}
            </div>

        </div>
    )
}
export default AdvertisingSection;