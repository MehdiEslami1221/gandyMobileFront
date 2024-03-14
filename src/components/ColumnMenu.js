import {useEffect, useState} from "react";
import {getCoverByPosition, SERVER_URL} from "../services/Service";

const ColumnMenu = () => {

    const [cover, setCover] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: data} = await getCoverByPosition(1);
                setCover(data)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);


    return (
        <div>

            <div className="row p-0 my-3">

                {
                    cover.map(cover =>
                        <a href={cover.url} className="col-12 col-sm-6 col-md-3  mt-3 mt-md-0">
                            <img
                                src={SERVER_URL+'upload/files/'+cover.image}
                                alt="..." className="img-fluid w-100 rounded-3"/>
                        </a>
                    )
                }

            </div>
        </div>
    )
}

export default ColumnMenu;