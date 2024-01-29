import React, {useState} from "react";
import DetailsThumb from "./DetailsThumb";
import star from "../assets/images/star-48.png";
import store from "../assets/images/store-48.png";
import ok from "../assets/images/icons-ok.png";

import Checkbox from "rc-checkbox";
import PurchaseInformation from "./PurchaseInformation";






class InternalPage extends React.Component {


  state = {

    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-womens-shoes-Pgb94t.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b3b2602-3a42-42f8-bbe2-3d3946282f67/air-max-270-womens-shoes-Pgb94t.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/86ffc370-2880-486c-967b-c4393b043095/air-max-270-womens-shoes-Pgb94t.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/86ffc370-2880-486c-967b-c4393b043095/air-max-270-womens-shoes-Pgb94t.png",
        ],

        description: "UI/UX designing html css tutorial",
        content: "welcome to out channel",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        ram: ["64GB", "128GB", "256GB"],
        count: 1,
      },
    ],
    index: 0,
    attr: [
      {
        id :1,
        attrName : "اندازه صفحه",
        config : "16.9"
      },
      {
        id :2,
        attrName : "حافظه جانبی",
        config : "64 گیگابایت"
      }

    ],
  };

  myRef = React.createRef();
  myRefColors = React.createRef();
  myRefRam = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className = "";
    }
    images[index].className = "active";
  };

  colorTab = (index) => {
    const button = this.myRefColors.current.children;
    for (let i = 0; i < button.length; i++) {
      button[i].className = button[i].className = "";
    }
    button[index].className = "active";
  };

  selectRam = (index) => {
    const button = this.myRefRam.current.children;
    for (let i = 0; i < button.length; i++) {
      button[i].className = button[i].className = "";
    }
    button[index].className = "active";
  };

  onChange = (e) => {
    console.log("Checkbox checked:", e.target.checked);
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
    this.myRefColors.current.children[index].className = "active";
    this.myRefRam.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app" dir="rtl">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="box">
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>

            <div className="middle">
              <h5 style={{ marginBottom: 20 }}>
                گوشی موبایل اپل مدل iphone 13 CH دو سیم کارت و رم 4 گیگ
              </h5>
              <h6 style={{ color: "#ccc", marginBottom: 20 }}>
                Apple iphone 13 CH Dual Sim 128GB AND 4GB RAM mobile phone{" "}
              </h6>
              <div className="horizontal">
                <img
                  style={{ marginBottom: 20 }}
                  src={star}
                  width={20}
                  alt="logo"
                />
                <span style={{ marginBottom: 20 }}>4.5</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h6>رنگ : سفید</h6>
                <div className="colors" ref={this.myRefColors}>
                  {item.colors.map((color, index) => (
                    <button
                      onClick={() => this.colorTab(index)}
                      style={{
                        background: color,
                        width: 25,
                        height: 25,
                        margin: 5,
                        borderRadius: 20,
                      }}
                    ></button>
                  ))}
                </div>
              </div>
              <h6>گارانتی : گارانتی اصلی</h6>
              <div className="horizontal">
                <span>حافظه :</span>
                <div className="ram" ref={this.myRefRam}>
                  {item.ram.map((ram, index) => (
                    <button onClick={() => this.selectRam(index)}>{ram}</button>
                  ))}
                </div>
              </div>

              <div className="mainAttribute">
                <h6>ویژگی های اصلی</h6>
                <ul>
                  <li>فناوری صفحه نمایش : super retina XDR OLED</li>
                  <li>رزولوشن عکس : 12 مگاپیکسل</li>
                  <li>نسخه سیستم عامل : ios 15</li>
                  <li>اندازه : 6.1</li>
                  <li>مقدار RAM : 8 گیگابایت</li>
                  <li>دوربین اصلی :دارد</li>
                  <li>شبکه 5g : ندارد</li>
                </ul>
              </div>
            </div>


            <div className="cart">
              <div className="row1">
                <div className="horiz">
                  <img src={store} width={30} height={30} alt="" />
                  <h5>موبایل گاندی</h5>
                </div>
                <h6>96.1 درصد رضایت از کالا| عملکرد کالا عالی</h6>
                <hr />
              </div>

              <div className="row1">
                <div className="horiz">
                  <img src={ok} width={30} height={30} alt="" />
                  <h5>بیمه</h5>
                </div>
                <p>
                  <label style={{ marginRight: 35 }}>
                    <Checkbox onChange={(e) => this.onChange} />
                    &nbsp; بیمه تجهیزات دیجیتال - بیمه پارسیان
                  </label>
                  &nbsp;&nbsp;
                </p>
                <h6>قیمت : 520000</h6>
                <hr />
              </div>

              <div className="row1">
                <div className="vertical">
                  <h6>قیمت : 520000 تومان</h6>
                  <button>افزودن به سبد خرید</button>
                  <button>هم اکنون خریداری کنید</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <PurchaseInformation/>


        <div className="attribute">
          <h5>مشخصات فنی</h5>
            {this.state.attr.map((val) => (
          <div className="line-attribute">
          <h5>{val.attrName}</h5>
          <p>{val.config}</p>

              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default InternalPage;
