import {useEffect, useState} from "react";
import {getMainArticle, SERVER_URL} from "../services/Service";

const NewsArticles = () => {

    const [article, setArticle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: dataSlider} = await getMainArticle();
                setArticle(dataSlider['content'])
            } catch (err) {
                console.log(err.message())
            }
        }
        fetchData().then(r => r);
    }, []);

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

                    {
                        article.map(item =>
                            <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                                <a href="#" className="card text-decoration-none link-secondary">
                                    <img
                                        src={SERVER_URL+'upload/files/'+item.image}
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title text-dark fw-bold">{item.title}</h6>
                                        <p className="card-text fw-bold text-justify"
                                           style={{fontSize: '12px', textAlign: "justify", textJustify: "inter-word"}}>
                                            {item.description}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}
export default NewsArticles;