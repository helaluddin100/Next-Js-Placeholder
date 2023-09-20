import Link from "next/link";
import React, { useEffect, useState } from "react";
function Resume() {
  const [activeTab, setActiveTab] = useState("about");

  const [home, setHome] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/home")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setHome(result);
      });
  }, []);

  const tabs = [
    { id: "about", title: "About Me", icon: "fas fa-user" },
    { id: "experience", title: "Experience", icon: "fas fa-user-tie" },
    { id: "education", title: "Education", icon: "fas fa-user-graduate" },
    // { id: "reference", title: "Reference", icon: "fas fa-users" },
  ];
  const content = {
    about: (
      <div className="about cate__active">
        {home.about && (
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about__text">
                  <h3>{home.about.name}</h3>
                  <p>{home.about.des}</p>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <h6>Birthday:</h6>
                      <p>{home.about.date_of_barth}</p>
                    </li>
                    <li>
                      <h6>Lives in:</h6>
                      <p>{home.about.live_in}</p>
                    </li>
                    <li>
                      <h6>Website:</h6>
                      <p>{home.about.website}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h6>Phone:</h6>
                      <p>{home.about.phone}</p>
                    </li>
                    <li>
                      <h6>Skype:</h6>
                      <p>{home.about.skype}</p>
                    </li>
                    <li>
                      <h6>Linkedin:</h6>
                      <p>{home.about.linkend}</p>
                    </li>
                  </ul>
                </div>
                <div className="about__button duel__btn">
                  <a
                    className="btn btn__custome"
                    href={home.about.cv_link}
                    download
                  >
                    <i className="fas fa-download"></i>
                    <span>Download CV</span>
                  </a>
                  <Link href="/contact">
                    <a className="btn btn__custome" href="#">
                      <i className="fas fa-headset"></i>
                      <span>contact me</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about__img">
                  <img src={home.about.about_img} alt={home.about.name} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
    experience: (
      <div className="exper__sec cate__active">
        <div className="container">
          <div className="row">
            {home.experience && home.experience.length > 0 ? (
              home.experience.map((item, index) => (
                <div className="col-md-6 col-lg-6" key={index}>
                  <div className="resume__card">
                    <span>
                      <i className="fas fa-certificate"></i>
                    </span>
                    <h4>{item.pass_date}</h4>
                    <ul>
                      <li>
                        <i className="far fa-calendar-alt"></i>
                      </li>
                      <li>
                        <h5>{item.exp_title}</h5>
                        <h6>{item.institute}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>No experience data available.</p>
            )}
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="edu__sec cate__active">
        <div className="container">
          <div className="row">
            {home.education && home.education.length > 0 ? (
              home.education.map((item, index) => (
                <div className="col-md-6 col-lg-6" key={index}>
                  <div className="resume__card">
                    <span>
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    <h4>
                      {item.start_date} - {item.pass_date}
                    </h4>
                    <ul>
                      <li>
                        <i className="far fa-calendar-alt"></i>
                      </li>
                      <li>
                        <h5>{item.deg_title}</h5>
                        <h6>{item.institute_name}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>No experience data available.</p>
            )}
          </div>
        </div>
      </div>
    ),
    // reference: (
    //   <div className="refer__sec cate__active">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-6">
    //           <div className="refer__card">
    //             <div className="refer__img">
    //               <img src="img/helal.svg" alt="refer-1" />
    //             </div>
    //             <div className="refer__details">
    //               <h4>Helal Uddin</h4>
    //               <p>
    //                 Sr. Ux / Ui Designer{" "}
    //                 <span>at Larn Hunter It Institute</span>
    //               </p>
    //               <ul className="refer__social">
    //                 <li>
    //                   <a className="icon social__icon" href="#">
    //                     <i className="fas fa-phone-alt"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a className="icon social__icon" href="#">
    //                     <i className="fas fa-envelope"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-6">
    //           <div className="refer__card">
    //             <div className="refer__img">
    //               <img src="img/sohol.svg" alt="refer-2" />
    //             </div>
    //             <div className="refer__details">
    //               <h4>Afjal Sohol</h4>
    //               <p>
    //                 Deputy Manager <span>at Larn Hunter LTD</span>
    //               </p>
    //               <ul className="refer__social">
    //                 <li>
    //                   <a className="icon social__icon" href="#">
    //                     <i className="fas fa-phone-alt"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a className="icon social__icon" href="#">
    //                     <i className="fas fa-envelope"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // ),
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
