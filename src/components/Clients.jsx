import React from "react";
import clientone from "../img/clients/client-1.png";
import clientTwo from "../img/clients/client-2.png";
import clientThree from "../img/clients/client-3.png";
import clientFour from "../img/clients/client-4.png";
import clientFive from "../img/clients/client-5.png";
import clientSix from "../img/clients/client-6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <section className="clients-section section">
      <div className="container">
        <div className="row responsive">
          <Slider {...settings}>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientone} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientTwo} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientThree} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientFour} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientFive} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientSix} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientFour} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientFive} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="slider-item">
                <img src={clientSix} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
