import {useEffect, useState} from "react";
import {getProductSuggestion, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";

export default function App() {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getProductSuggestion();
                setProduct(dataSlider)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <div className="text-center my-3">
            <h5 className="my-4 fw-bold">پیشنهاد موبایل گاندی</h5>
            <div className="container text-center shadow-sm rounded-3">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 rounded-3">


                    {
                        product?.map(item =>
                            <Link
                                href="#" className="text-decoration-none m-0 p-0"
                                key={product.id}
                                to={'/internal/' + item?.productCount?.product?.id}>
                                <div className="card p-3 rounded-0">
                                    <div className="d-flex flex-column justify-content-center align-items-center"
                                         style={{height: '150px'}}>
                                        <img
                                            src={SERVER_URL + 'upload/files/' + item?.productCount?.productImage?.img}
                                            alt="..." style={{width: '75px', height: '75px'}}/>
                                        <span style={{fontSize: '12px'}}
                                              className="mt-3 fw-bold">{item?.productCount?.product?.name}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    }


                </div>
            </div>
        </div>
    );
}