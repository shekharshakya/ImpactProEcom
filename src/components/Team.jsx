import React from "react";
import teamOne from "../img/team/team-1.jpg";
import teamTwo from "../img/team/team-2.jpg";
import teamThree from "../img/team/team-3.jpg";
import teamFour from "../img/team/team-4.jpg";

const Team = () => {
  return (
    <section className="our-team-section section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="des">
          Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
          incidunt dolores placeat sunt id nobis omnis tiledo stran delop
        </p>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-wapper">
              <img src={teamOne} alt="team-1" />
              <h4 className="person-name">Walter White</h4>
              <p className="profile-name">Web Development</p>
              <div className="social-icon">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-wapper">
              <img src={teamTwo} alt="team-1" />
              <h4 className="person-name">Sarah Jhinson</h4>
              <p className="profile-name">Marketing</p>
              <div className="social-icon">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-wapper">
              <img src={teamThree} alt="team-1" />
              <h4 className="person-name">William Anderson</h4>
              <p className="profile-name">Content</p>
              <div className="social-icon">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-wapper">
              <img src={teamFour} alt="team-1" />
              <h4 className="person-name">Amanda Jepson</h4>
              <p className="profile-name">Accountant</p>
              <div className="social-icon">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>{" "}
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
