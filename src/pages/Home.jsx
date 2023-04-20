import React from "react";
import Clients from "../components/Clients";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import heroImg from "../img/home/hero-img.svg";
import heroImgTwo from "../img/home/stats-img.svg";
import { GlobalProductContextHook } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { isLoading, featureProducts } = GlobalProductContextHook();
  console.log(featureProducts)
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-cover">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center align-items-center order-lg-0 order-1">
                <div className="hero-text">
                  <h1>Welcome to Impact</h1>
                  <p>
                    Sed autem laudantium dolores. Voluptatem itaque ea
                    consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>
                  <div className="hero-btn">
                    <a href="" className="get-start-btn">
                      Get Started
                    </a>
                    <a href="" className="btn-watch-video">
                      <i className="fa-solid fa-circle-play"></i>
                      <span>Watch Video</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 order-0">
                <div className="hero-img">
                  <img src={heroImg} width="100%" alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <section className="stats-counter section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="stats-img">
                <img src={heroImgTwo} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="stats-item">
                <span>232</span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae diredo para
                  mesta
                </p>
              </div>
              <div className="stats-item">
                <span>521</span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
              <div className="stats-item">
                <span>453</span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-sec section">
        <div className="container">
          <div className="row justify-content-center">
            <h2 class="section-title">Feature Product</h2>
            {
              featureProducts.map((curEle, index) => {
                return (
                  <div className="col-lg-3">
                    <ProductCard key={index} product={curEle} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="call-to-action section">
        <div className="container">
          <a href="">
            <i className="fa-solid fa-circle-play play pulse"></i>
          </a>
          <h3>Call To Action</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a href="" className="get-start-btn">
            Call to Action
          </a>
        </div>
      </section>
      <Team />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
