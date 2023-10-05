import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    formData.append("message", inputField.message);
    formData.append("subject", inputField.subject);

    axios.post("http://localhost:8000/api/contact", formData).then((res) => {
      if (res.data.status === 200) {
        setShowPopup(true);
        setInputField({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      } else {
        alert(
          "Maybe You not fill all the required fields. Please check again and fill all the required fields (*)."
        );
      }
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };
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
                <h2>I&apos;m always active to my mail account.</h2>
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
                  <a href="tel:+8801792892198" className="contact-info-cta">
                    (+880) 1792892198
                  </a>
                  <a href="tel:+8801904786956" className="contact-info-cta">
                    (+880) 1904786956
                  </a>
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
                    <a
                      href="mailto:freelancerhelaluddin@gmail.com"
                      className="contact-info-cta"
                    >
                      freelancerhelaluddin@gmail.com
                    </a>
                    <a
                      href="mailto:zoomtechit@gmail.com"
                      className="contact-info-cta"
                    >
                      zoomtechit@gmail.com
                    </a>
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
              <form
                className="contact__form"
                id="contactFormTwo"
                onSubmit={allInfoSubmit}
              >
                <div className="input__field">
                  <input
                    type="text"
                    name="name"
                    onChange={inputsHandler}
                    value={inputField.name}
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={inputsHandler}
                    value={inputField.email}
                    placeholder="Email"
                  />
                </div>
                <div className="input__field">
                  <input
                    type="text"
                    name="subject"
                    onChange={inputsHandler}
                    value={inputField.subject}
                    placeholder="Subject"
                  />
                </div>
                <div className="input__field">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    onChange={inputsHandler}
                    value={inputField.message}
                  ></textarea>
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

      <div className={`popup-contact ${showPopup ? "active" : ""}`}>
        <div className="popup__content">
          <div className="popup__close" onClick={closePopup}>
            <i className="fas fa-times"></i>
          </div>
          <div className="popup__text">
            <h2>Thank you Sir</h2>
            <p>
              Thank you for reaching out to us! Your message has been received,
              and we will respond to you as soon as possible. In the meantime,
              feel free to explore more of our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
