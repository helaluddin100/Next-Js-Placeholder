import React, { useState } from "react";

function Resume() {
  const [activeTab, setActiveTab] = useState("about");

  //   const tabs = [
  //     { id: "about", title: "About Me" },
  //     { id: "experience", title: "Experience" },
  //     { id: "education", title: "Education" },
  //     { id: "reference", title: "Reference" },

  //   ];

  const tabs = [
    { id: "about", title: "About Me", icon: "fas fa-user" },
    { id: "experience", title: "Experience", icon: "fas fa-user-tie" },
    { id: "education", title: "Education", icon: "fas fa-user-graduate" },
    { id: "reference", title: "Reference", icon: "fas fa-users" },
  ];
  const content = {
    about: (
      <div className="about cate__active">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about__text">
                <h3>I&lsquo;m Helal Uddin</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&lsquo;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
              </div>
              <div className="details">
                <ul>
                  <li>
                    <h6>Birthday:</h6>
                    <p>09 Septembar 2000</p>
                  </li>
                  <li>
                    <h6>Lives in:</h6>
                    <p>Natore, Bangladesh</p>
                  </li>
                  <li>
                    <h6>Website:</h6>
                    <p>www.freelancerhelal.com/</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6>Phone:</h6>
                    <p>(+880) 1904786956</p>
                  </li>
                  <li>
                    <h6>Skype:</h6>
                    <p>live:d565b8b2fd5d28f7</p>
                  </li>
                  <li>
                    <h6>Linkedin:</h6>
                    <p>/helaluddin</p>
                  </li>
                </ul>
              </div>
              <div className="about__button duel__btn">
                <a
                  className="btn btn__custome"
                  href="img/miron-cv.pdf"
                  download
                >
                  <i className="fas fa-download"></i>
                  <span>Download CV</span>
                </a>
                <a className="btn btn__custome" href="#">
                  <i className="fas fa-headset"></i>
                  <span>contact me</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about__img">
                <img src="img/coding_.svg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="exper__sec cate__active">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-certificate"></i>
                </span>
                <h4>Feb 2016 - Dec 2017</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Creative-It Institute</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-certificate"></i>
                </span>
                <h4>Feb 2017 - Dec 2018</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Ingenious-hub Team</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-certificate"></i>
                </span>
                <h4>Feb 2018 - Dec 2019</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Icon-Infotech Limited</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-certificate"></i>
                </span>
                <h4>Feb 2019 - Dec 2020</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Xpeedstudio</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="edu__sec cate__active">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-graduation-cap"></i>
                </span>
                <h4>apr 2021 - Running</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Honourse at History of Islam</h5>
                    <h6>BCSS Collage, Natore</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2017 - feb 2019</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Arch / H.S.C - GPA : 4.00</h5>
                    <h6>BCSS Collage, Natore</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2015 - dec 2016</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Vocational / S.S.C - GPA : 4.57</h5>
                    <h6>Gurudaspur Model Heigh School</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="resume__card">
                <span>
                  <i className="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2013 - dec 2014</h4>
                <ul>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>J.D.C / J.S.C - GPA : 5</h5>
                    <h6>Poyalsura Patpara Heigh School</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    reference: (
      <div className="refer__sec cate__active">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="refer__card">
                <div className="refer__img">
                  <img src="img/helal.svg" alt="refer-1" />
                </div>
                <div className="refer__details">
                  <h4>Helal Uddin</h4>
                  <p>
                    Sr. Ux / Ui Designer{" "}
                    <span>at Larn Hunter It Institute</span>
                  </p>
                  <ul className="refer__social">
                    <li>
                      <a className="icon social__icon" href="#">
                        <i className="fas fa-phone-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" href="#">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="refer__card">
                <div className="refer__img">
                  <img src="img/sohol.svg" alt="refer-2" />
                </div>
                <div className="refer__details">
                  <h4>Afjal Sohol</h4>
                  <p>
                    Deputy Manager <span>at Larn Hunter LTD</span>
                  </p>
                  <ul className="refer__social">
                    <li>
                      <a className="icon social__icon" href="#">
                        <i className="fas fa-phone-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" href="#">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <section className="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading resume__heading">
                <p>
                  my <span>resume</span>
                </p>
                <h2>Some basic information about myself</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="resume__btn">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`cate__btn ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      <i className={tab.icon}></i>
                      <span>{tab.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {content[activeTab]}
    </div>
  );
}

export default Resume;
