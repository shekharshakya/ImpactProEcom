import React from "react";
import aboutImg from "../img/about/about.jpg";
import aboutImgTwo from "../img/about/about-2.jpg";

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="des">
          Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
          incidunt dolores placeat sunt id nobis omnis tiledo stran delop
        </p>
        <div className="row">
          <div className="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img src={aboutImg} className="about-img" alt="" />
            <p>
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequatur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <p>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </i>
              </p>
              <ul className="p-0">
                <li className="list-item">
                  <i className="fa-solid fa-check check"></i> Ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="list-item">
                  <i className="fa-solid fa-check check"></i> Duis aute irure
                  dolor in reprehenderit in voluptate velit.
                </li>
                <li className="list-item">
                  <i className="fa-solid fa-check check"></i> Ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <div className="wapper">
                <img src={aboutImgTwo} className="about-img m-0" alt="" />
                <a href="" className="play-btn">
                  <i className="fa-solid fa-circle-play play pulse"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
