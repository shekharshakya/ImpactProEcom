import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <p className="des">
          Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur
          est eveniet deleniti fignissimos eos quam
        </p>
        <div className="row testimonial">
          <Slider {...settings}>
            <div className="col-lg-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
