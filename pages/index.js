import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";

import Head from "next/head";
import Portfolio from "./component/portfolio";
import Review from "./component/Review";
import Contact from "./component/Contact";
function Home() {
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <section className="banner">
        <div className="banner__bg">
          <div className="container">
            <div className="baner__animation__section">
              <div className="animate__1">
                <div className="animation__1"></div>
              </div>
              <div className="animate__2">
                <div className="animation__2"></div>
              </div>
              <div className="animate__3">
                <div className="animation__3"></div>
              </div>
              <div className="animate__4">
                <div className="animation__4"></div>
              </div>
              <div className="animate__5">
                <div className="animation__5"></div>
              </div>
            </div>
            <img
              className="after__animate"
              src="img/circle-shape.png"
              alt="circle-shape"
            />
            <img
              className="after__2"
              src="img/after-1.png"
              alt="circle-shape"
            />
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="banner__img">
                  <img src="img/innovation_.svg" alt="banner-pic" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="banner__text__area">
                  <ul className="banner__social">
                    <li>
                      <a className="icon social__icon" target="_blank" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" target="_blank" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" target="_blank" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" target="_blank" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon social__icon" target="_blank" href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="banner__text">
                    <span>Welcome dear!</span>
                    <h1>Lorem Ipsum is simply dummy text of the printing .</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop
                    </p>
                  </div>
                  <div className="banner__btn duel__btn">
                    <a className="btn btn__custome" href="#">
                      <i className="fas fa-arrows-alt"></i>
                      <span>know more</span>
                    </a>
                    <a className="btn btn__custome_to" href="portfolio.html">
                      <i className="fas fa-boxes"></i>
                      <span>demo work</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========banner end============== */}

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
                <li>
                  <button
                    className="cate__btn active"
                    onclick="filter('about')"
                  >
                    <i className="fas fa-user"></i>
                    <span>about me</span>
                  </button>
                </li>
                <li>
                  <button className="cate__btn" onclick="filter('exper__sec')">
                    <i className="fas fa-user-tie"></i>
                    <span>experience</span>
                  </button>
                </li>
                <li>
                  <button className="cate__btn" onclick="filter('edu__sec')">
                    <i className="fas fa-user-graduate"></i>
                    <span>education</span>
                  </button>
                </li>
                <li>
                  <button className="cate__btn" onclick="filter('refer__sec')">
                    <i className="fas fa-users"></i>
                    <span>reference</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about cate__active">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about__text">
                <h3>I'm Helal Uddin</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
      </section>

      <section className="exper__sec cate__active">
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
      </section>

      <section className="edu__sec cate__active">
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
      </section>
      <section className="refer__sec cate__active">
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
      </section>

      {/* ============resume end================= */}
      {/* =========service start ============== */}
      <section className="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading service__head">
                <p>
                  my <span>services</span>
                </p>
                <h2>I'm very passionate under about this services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="service__card">
                <h3>01</h3>
                <span className="fas fa-laptop"></span>
                <i className="fas fa-laptop"></i>
                <h4>website design</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service__card service__mt">
                <h3>02</h3>
                <span className="fab fa-wordpress"></span>
                <i className="fab fa-wordpress"></i>
                <h4>wordpress customize</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service__card">
                <h3>03</h3>
                <span className="fas fa-ad"></span>
                <i className="fas fa-ad"></i>
                <h4>web banner</h4>
                <p>
                  I have helped a lot of companies and startups designing their
                  advertising campaigns and modern websites.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service__card">
                <h3>04</h3>
                <span className="fas fa-envelope-open-text"></span>
                <i className="fas fa-envelope-open-text"></i>
                <h4>email signature</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority etc.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service__card service__mt">
                <h3>05</h3>
                <span className="fas fa-laptop-code"></span>
                <i className="fas fa-laptop-code"></i>
                <h4>responsive design</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service__card">
                <h3>06</h3>
                <span className="fas fa-code"></span>
                <i className="fas fa-code"></i>
                <h4>Web Development</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="service__button">
                <a className="btn btn__custome" href="#">
                  <i className="far fa-eye"></i>
                  <span>show more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================service end ============= */}

      {/* =============coding start =============== */}
      <section className="coding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading coding__head">
                <p>
                  coding <span>structure</span>
                </p>
                <h2>How do I organize my coding file &amp; coding structure</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="coding__text">
                <h3>
                  Lorem Ipsum is simply dummy text{" "}
                  <span>of the printing and typesetting</span>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <ul className="coding__list">
                <li>
                  <span className="right__aro">
                    <i className="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span className="right__aro">
                    <i className="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span className="right__aro">
                    <i className="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span className="right__aro">
                    <i className="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span className="right__aro">
                    <i className="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="coding__img">
                <img src="img/undraw_Working_oh83.svg" alt="coding" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================coding end =============== */}
      <Portfolio />
      {/* ==============skill =============== */}
      <section className="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading skills__head">
                <p>
                  my <span>skills</span>
                </p>
                <h2>I'm Expert in this web software</h2>
              </div>
            </div>
          </div>
          <div className="row skills__amin">
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/html.png" alt="html" />
                </div>
                <div className="skills__title">
                  <p>html</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/css.png" alt="css" />
                </div>
                <div className="skills__title">
                  <p>css</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/javascript.png" alt="javascript" />
                </div>
                <div className="skills__title">
                  <p>javascript</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/bootstrap.png" alt="bootstrap" />
                </div>
                <div className="skills__title">
                  <p>bootstrap</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/jquery.png" alt="jquery" />
                </div>
                <div className="skills__title">
                  <p>jquery</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/sass.png" alt="sass" />
                </div>
                <div className="skills__title">
                  <p>sass</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/wordpress.png" alt="wordpress" />
                </div>
                <div className="skills__title">
                  <p>wordpress</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/react.png" alt="react" />
                </div>
                <div className="skills__title">
                  <p>react</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/github.png" alt="github" />
                </div>
                <div className="skills__title">
                  <p>github</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/vscode.png" alt="vscode" />
                </div>
                <div className="skills__title">
                  <p>vscode</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/photoshop.png" alt="photoshop" />
                </div>
                <div className="skills__title">
                  <p>photoshop</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/illustrator.png" alt="illustrator" />
                </div>
                <div className="skills__title">
                  <p>illustrator</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/php.png" alt="php" />
                </div>
                <div className="skills__title">
                  <p>PHP</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/laravel.png" alt="laravel" />
                </div>
                <div className="skills__title">
                  <p>Laravel</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/paython.png" alt="paython" />
                </div>
                <div className="skills__title">
                  <p>paython</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/java.png" alt="java" />
                </div>
                <div className="skills__title">
                  <p>java</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/c.png" alt="c" />
                </div>
                <div className="skills__title">
                  <p>c++</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <div className="skills__card">
                <div className="skills__image">
                  <img src="img/sql.png" alt="sql" />
                </div>
                <div className="skills__title">
                  <p>sql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================skill end ================ */}
      {/* =============discussion start ============== */}
      <section className="discuss">
        <div className="container">
          <div className="discuss__main">
            <div className="row discuss__background">
              <div className="col-md-7 col-lg-8">
                <div className="discuss__text">
                  <h3>Let’s discuss your idea</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="discuss__btn">
                  <a className="btn btn__custome" href="#">
                    <i className="fas fa-paper-plane"></i>
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================discussion end ============== */}

      {/* ============counter ============ */}
      <section className="counter">
        <div className="counter__bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="counter__card count-1">
                  <img
                    src="img/project-management.svg"
                    className="counter__img"
                    alt=""
                  />
                  <div className="counter__details">
                    <h3>
                      <span className="counter-number">362</span>+
                    </h3>
                    <p>Project completed</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="counter__card count-2">
                  <img
                    src="img/handshake.svg"
                    className="counter__img"
                    alt=""
                  />
                  <div className="counter__details">
                    <h3>
                      <span className="counter-number">208</span>+
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="counter__card count-3">
                  <img src="img/rating.svg" className="counter__img" alt="" />
                  <div className="counter__details">
                    <h3>
                      <span className="counter-number">97</span>%
                    </h3>
                    <p>Possitive Feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============counter end ============== */}

      {/* ==========package start ============== */}
      <section className="package">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading package__head">
                <p>
                  pricing <span>plan</span>
                </p>
                <h2>This pricing plan will be changeable by discussion</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="package__card">
                <div className="pricing__money">
                  <h3>basic</h3>
                  <h4>$20.00</h4>
                  <p>per project</p>
                </div>
                <ul className="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>Three rivision</li>
                  <li>four section</li>
                </ul>
                <div className="package__btn">
                  <a className="btn btn__custome" href="#">
                    <i className="fas fa-paper-plane"></i>
                    <span>Purchase plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="package__card package__hover    ">
                <div className="pricing__moneyy">
                  <h3>standard</h3>
                  <h4>$50.00</h4>
                  <p>per project</p>
                </div>
                <ul className="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>five rivision</li>
                  <li>six section</li>
                </ul>
                <div className="package__btn">
                  <a className="btn btn__custome" href="#">
                    <i className="fas fa-paper-plane"></i>
                    <span>Purchase plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="package__card">
                <div className="pricing__moneyy">
                  <h3>premium</h3>
                  <h4>$89.00</h4>
                  <p>per project</p>
                </div>
                <ul className="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>eight rivision</li>
                  <li>nine section</li>
                </ul>
                <div className="package__btn">
                  <a className="btn btn__custome" href="#">
                    <i className="fas fa-paper-plane"></i>
                    <span>Purchase plan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============package end ============== */}

      {/* =================faq============ */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading faq__head">
                <p>
                  faq <span>question</span>
                </p>
                <h2>You have to find your question before we work together</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="faq__main">
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="faq__main">
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="faq__content">
                  <div className="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div className="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============faq end ============== */}

      {/* ==============client ============== */}
      <Review />
      {/* =================client end ============== */}

      {/* ==============blog start ============== */}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading blog__head">
                <p>
                  my <span>blogs</span>
                </p>
                <h2>Some article about my activity &amp; experience</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog__card">
                <div className="blog__image">
                  <img src="img/blog/blog-1.jpeg" alt="blog-1" />
                  <div className="blog__top__btn">
                    <p>html, css</p>
                  </div>
                </div>
                <div className="blog__content">
                  <ul className="blog__details">
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      <p>02 feb 2020</p>
                    </li>
                    <li>
                      <i className="fas fa-share-alt"></i>
                      <p>5 share</p>
                    </li>
                  </ul>
                  <div className="blog__title">
                    <h4>
                      <a href="#">
                        Lorem Ipsum is simply dummy text of the printing....
                      </a>
                    </h4>
                  </div>
                  <ul className="blog__view__more">
                    <li>
                      <a className="btn btn__custome" href="#">
                        read more
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <p>13 comments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog__card">
                <div className="blog__image">
                  <img src="img/blog/blog-2.jpg" alt="blog-2" />
                  <div className="blog__top__btn">
                    <p>javascript</p>
                  </div>
                </div>
                <div className="blog__content">
                  <ul className="blog__details">
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      <p>02 feb 2020</p>
                    </li>
                    <li>
                      <i className="fas fa-share-alt"></i>
                      <p>5 share</p>
                    </li>
                  </ul>
                  <div className="blog__title">
                    <h4>
                      <a href="#">
                        Lorem Ipsum is simply dummy text of the printing....
                      </a>
                    </h4>
                  </div>
                  <ul className="blog__view__more">
                    <li>
                      <a className="btn btn__custome" href="#">
                        read more
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <p>13 comments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog__related">
                    <div className="related__img">
                      <a href="#">
                        <img src="img/blog/blog-3.jpg" alt="suggest-1" />
                      </a>
                    </div>
                    <div className="related__content">
                      <div className="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div className="related__date">
                        <i className="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__related">
                    <div className="related__img">
                      <a href="#">
                        <img src="img/blog/blog-4.png" alt="suggest-2" />
                      </a>
                    </div>
                    <div className="related__content">
                      <div className="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div className="related__date">
                        <i className="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__related">
                    <div className="related__img">
                      <a href="#">
                        <img src="img/blog/blog-5.jpg" alt="suggest-3" />
                      </a>
                    </div>
                    <div className="related__content">
                      <div className="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div className="related__date">
                        <i className="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn">
                <a className="btn btn__custome" href="#">
                  <i className="far fa-eye"></i>
                  <span>show more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============blog end ============== */}

      {/* ==============contact ================ */}
      <Contact />

      {/* =================contact end ============== */}
    </>
  );
}
Home.layout = AppLayout;

export default Home;
