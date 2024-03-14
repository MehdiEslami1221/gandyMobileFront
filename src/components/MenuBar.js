import {useEffect, useState} from "react";
import {getAllCategory, getAllProductType, getNewProduct, SERVER_URL} from "../services/Service";
import {Link} from "react-router-dom";

const MenuBar=()=>{

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
      // <nav className="navbar navbar-expand-lg navbar-light px-2 d-none d-lg-flex user-select-none">
      //
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //         <ul className="navbar-nav">
      //             {
      //                 category.map(category =>
      //                     <li className="nav-item active">
      //                         <a className="nav-link" href="#">{category.parentId.name}<span className="sr-only">(current)</span></a>
      //                     </li>
      //                 )
      //             }
      //         </ul>
      //     </div>
      // </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-sort-desc"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                      {
                          productType?.map(type =>
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href={'/productTypeProducts/'+type.id}>{type.name}</a>
                              </li>
                          )
                      }


                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default MenuBar;