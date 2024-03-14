import {useEffect, useState} from "react";
import {getCoverByPosition, SERVER_URL} from "../services/Service";

const OffersRow = () => {

    const [cover, setCover] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: data} = await getCoverByPosition(3);
                setCover(data)
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);

    return (
        <div>

            <div className="row my-2">

                {
                    cover.map(cover =>
                        <a href={cover.type} className="col-sm-12 my-2 col-md-6">
                            <img
                                src={SERVER_URL + 'upload/files/' + cover.image}
                                alt="..." className="img-fluid w-100 rounded-3"/>
                        </a>
                    )
                }
            </div>

        </div>
    )
}
export default OffersRow;