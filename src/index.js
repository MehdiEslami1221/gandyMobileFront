import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import 'react-popper';
import GandiCart from "./components/GandiCart";
import SendMobile from "./components/SendMobile";
import CategoryMenu from "./components/CategoryMenu";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <div>
            <App/>
        </div>

    </BrowserRouter>
);