import React from "react";

const Contact = () => {
  return (
    <section className="contact-section section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="des">
          Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
          nihil id ratione ea sunt quis dolorem dolore earum
        </p>
        <div className="contact-cover">
          <div className="row">
            <div className="col-lg-4">
              <div className="info-container">
                <div className="info-item">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-mobile"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-clock"></i>
                  <div>
                    <h4>Open Hours:</h4>
                    <p>Mon-Sat: 11AM - 23PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-4">
              <div className="form-container">
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-lg-12 mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-lg-12 mb-4">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="6"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
