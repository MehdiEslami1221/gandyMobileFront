import {useEffect, useState} from "react";
import {getAllProductType, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";


const CircularMenu = () => {

    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: data} = await getAllProductType();
                setProductType(data)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (

        <div className="container text-center my-3">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                {
                    productType.map(type =>
                        <Link className="text-decoration-none link-secondary link-opacity-25-hover"
                              to={'/productTypeProducts/'+type.id}>
                            <div className="col">
                                <img
                                    src={SERVER_URL + 'upload/files/' + type.image}
                                    alt="..." className="w-50"/>
                                <h6 className="mt-2 fw-bold text-dark"
                                    style={{fontSize: '12px'}}>{type.name}</h6>
                            </div>
                        </Link>
                    )
                }


            </div>
        </div>

    )
}
export default CircularMenu;