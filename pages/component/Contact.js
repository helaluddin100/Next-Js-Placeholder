import React from "react";

function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading contact__head">
                <p>
                  contact <span>me</span>
                </p>
                <h2>I'm always active to my mail account.</h2>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-lg-4">
              <div className="contact__info">
                <div className="address__icon">
                  <a className="icon social__icon">
                    <i className="fas fa-phone-volume"></i>
                  </a>
                </div>
                <div className="contact__text">
                  <h4>phone</h4>
                  <p>
                    (+880) 1792892198 <span>(+880) 1904786956</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="contact__info">
                <div className="address__icon">
                  <a className="icon social__icon">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
                <div className="contact__text">
                  <h4>email</h4>
                  <p>
                    freelancerhelaluddin@gmail.com{" "}
                    <span>helal96889@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="contact__info">
                <div className="address__icon">
                  <a className="icon social__icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
                <div className="contact__text">
                  <h4>location</h4>
                  <p>
                    6440 Gurudaspur <span>Natore, Bangladesh</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <form className="contact__form">
                <div className="input__field">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input__field">
                  <input type="text" placeholder="Subject" />
                  <input type="file" />
                </div>
                <div className="input__field">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="contact__btn">
                  <button className="btn btn__custome" type="submit">
                    <i className="fas fa-paper-plane"></i>
                    <span>send message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="my__img">
                <img src="img/undraw_envelope_n8lc.svg" alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
