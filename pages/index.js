import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";

import Head from "next/head";
function Home() {
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <section class="banner">
        <div class="banner__bg">
          <div class="container">
            <div class="baner__animation__section">
              <div class="animate__1">
                <div class="animation__1"></div>
              </div>
              <div class="animate__2">
                <div class="animation__2"></div>
              </div>
              <div class="animate__3">
                <div class="animation__3"></div>
              </div>
              <div class="animate__4">
                <div class="animation__4"></div>
              </div>
              <div class="animate__5">
                <div class="animation__5"></div>
              </div>
            </div>
            <img
              class="after__animate"
              src="img/circle-shape.png"
              alt="circle-shape"
            />
            <img class="after__2" src="img/after-1.png" alt="circle-shape" />
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="banner__img">
                  <img src="img/innovation_.svg" alt="banner-pic" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="banner__text__area">
                  <ul class="banner__social">
                    <li>
                      <a class="icon social__icon" target="_blank" href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" target="_blank" href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" target="_blank" href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" target="_blank" href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" target="_blank" href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="banner__text">
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
                  <div class="banner__btn duel__btn">
                    <a class="btn btn__custome" href="#">
                      <i class="fas fa-arrows-alt"></i>
                      <span>know more</span>
                    </a>
                    <a class="btn btn__custome_to" href="portfolio.html">
                      <i class="fas fa-boxes"></i>
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

      <section class="resume">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading resume__heading">
                <p>
                  my <span>resume</span>
                </p>
                <h2>Some basic information about myself</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="resume__btn">
                <li>
                  <button class="cate__btn active" onclick="filter('about')">
                    <i class="fas fa-user"></i>
                    <span>about me</span>
                  </button>
                </li>
                <li>
                  <button class="cate__btn" onclick="filter('exper__sec')">
                    <i class="fas fa-user-tie"></i>
                    <span>experience</span>
                  </button>
                </li>
                <li>
                  <button class="cate__btn" onclick="filter('edu__sec')">
                    <i class="fas fa-user-graduate"></i>
                    <span>education</span>
                  </button>
                </li>
                <li>
                  <button class="cate__btn" onclick="filter('refer__sec')">
                    <i class="fas fa-users"></i>
                    <span>reference</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="about cate__active">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="about__text">
                <h3>I'm Helal Uddin</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div class="details">
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
              <div class="about__button duel__btn">
                <a class="btn btn__custome" href="img/miron-cv.pdf" download>
                  <i class="fas fa-download"></i>
                  <span>Download CV</span>
                </a>
                <a class="btn btn__custome" href="#">
                  <i class="fas fa-headset"></i>
                  <span>contact me</span>
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="about__img">
                <img src="img/coding_.svg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="exper__sec cate__active">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-certificate"></i>
                </span>
                <h4>Feb 2016 - Dec 2017</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Creative-It Institute</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-certificate"></i>
                </span>
                <h4>Feb 2017 - Dec 2018</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Ingenious-hub Team</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-certificate"></i>
                </span>
                <h4>Feb 2018 - Dec 2019</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Frontend Developer</h5>
                    <h6>Icon-Infotech Limited</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-certificate"></i>
                </span>
                <h4>Feb 2019 - Dec 2020</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
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

      <section class="edu__sec cate__active">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-graduation-cap"></i>
                </span>
                <h4>apr 2021 - Running</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Honourse at History of Islam</h5>
                    <h6>BCSS Collage, Natore</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2017 - feb 2019</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Arch / H.S.C - GPA : 4.00</h5>
                    <h6>BCSS Collage, Natore</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2015 - dec 2016</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <h5>Vocational / S.S.C - GPA : 4.57</h5>
                    <h6>Gurudaspur Model Heigh School</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="resume__card">
                <span>
                  <i class="fas fa-graduation-cap"></i>
                </span>
                <h4>jan 2013 - dec 2014</h4>
                <ul>
                  <li>
                    <i class="far fa-calendar-alt"></i>
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
      <section class="refer__sec cate__active">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="refer__card">
                <div class="refer__img">
                  <img src="img/helal.svg" alt="refer-1" />
                </div>
                <div class="refer__details">
                  <h4>Helal Uddin</h4>
                  <p>
                    Sr. Ux / Ui Designer{" "}
                    <span>at Larn Hunter It Institute</span>
                  </p>
                  <ul class="refer__social">
                    <li>
                      <a class="icon social__icon" href="#">
                        <i class="fas fa-phone-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" href="#">
                        <i class="fas fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="refer__card">
                <div class="refer__img">
                  <img src="img/sohol.svg" alt="refer-2" />
                </div>
                <div class="refer__details">
                  <h4>Afjal Sohol</h4>
                  <p>
                    Deputy Manager <span>at Larn Hunter LTD</span>
                  </p>
                  <ul class="refer__social">
                    <li>
                      <a class="icon social__icon" href="#">
                        <i class="fas fa-phone-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a class="icon social__icon" href="#">
                        <i class="fas fa-envelope"></i>
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
      <section class="service">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading service__head">
                <p>
                  my <span>services</span>
                </p>
                <h2>I'm very passionate under about this services</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="service__card">
                <h3>01</h3>
                <span class="fas fa-laptop"></span>
                <i class="fas fa-laptop"></i>
                <h4>website design</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="service__card service__mt">
                <h3>02</h3>
                <span class="fab fa-wordpress"></span>
                <i class="fab fa-wordpress"></i>
                <h4>wordpress customize</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="service__card">
                <h3>03</h3>
                <span class="fas fa-ad"></span>
                <i class="fas fa-ad"></i>
                <h4>web banner</h4>
                <p>
                  I have helped a lot of companies and startups designing their
                  advertising campaigns and modern websites.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="service__card">
                <h3>04</h3>
                <span class="fas fa-envelope-open-text"></span>
                <i class="fas fa-envelope-open-text"></i>
                <h4>email signature</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority etc.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="service__card service__mt">
                <h3>05</h3>
                <span class="fas fa-laptop-code"></span>
                <i class="fas fa-laptop-code"></i>
                <h4>responsive design</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="service__card">
                <h3>06</h3>
                <span class="fas fa-code"></span>
                <i class="fas fa-code"></i>
                <h4>Web Development</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="service__button">
                <a class="btn btn__custome" href="#">
                  <i class="far fa-eye"></i>
                  <span>show more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================service end ============= */}

      {/* =============coding start =============== */}
      <section class="coding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading coding__head">
                <p>
                  coding <span>structure</span>
                </p>
                <h2>How do I organize my coding file &amp; coding structure</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="coding__text">
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
              <ul class="coding__list">
                <li>
                  <span class="right__aro">
                    <i class="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span class="right__aro">
                    <i class="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span class="right__aro">
                    <i class="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span class="right__aro">
                    <i class="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
                <li>
                  <span class="right__aro">
                    <i class="fas fa-hand-point-right"></i>
                  </span>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="coding__img">
                <img src="img/undraw_Working_oh83.svg" alt="coding" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================coding end =============== */}

      {/* ===============portfolio ================ */}
      <section class="port">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading port__head">
                <p>
                  my <span>portfolio</span>
                </p>
                <h2>Take a look at the Old projects that I have done</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="portfolio__slide">
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio1.png"
                      alt="port-1"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio-2.png"
                      alt="port-2"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio-3.png"
                      alt="port-3"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio-4.png"
                      alt="port-4"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio-5.png"
                      alt="port-5"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
                <div class="port__card">
                  <div class="portfolio__img">
                    <img
                      src="img/protfolio-image/protfolio-6.png"
                      alt="port-6"
                    />
                  </div>
                  <div class="portfolio__hover">
                    <div class="protfolio__btn">
                      <a class="btn btn__custome" href="#">
                        live preview
                      </a>
                      <a class="btn btn__custome" href="#">
                        view details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="protfolio__view__more">
                <a class="btn btn__custome" href="#">
                  <i class="far fa-eye"></i>
                  <span>View more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================portfolio end ================== */}
      {/* ==============skill =============== */}
      <section class="skills">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading skills__head">
                <p>
                  my <span>skills</span>
                </p>
                <h2>I'm Expert in this web software</h2>
              </div>
            </div>
          </div>
          <div class="row skills__amin">
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/html.png" alt="html" />
                </div>
                <div class="skills__title">
                  <p>html</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/css.png" alt="css" />
                </div>
                <div class="skills__title">
                  <p>css</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/javascript.png" alt="javascript" />
                </div>
                <div class="skills__title">
                  <p>javascript</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/bootstrap.png" alt="bootstrap" />
                </div>
                <div class="skills__title">
                  <p>bootstrap</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/jquery.png" alt="jquery" />
                </div>
                <div class="skills__title">
                  <p>jquery</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/sass.png" alt="sass" />
                </div>
                <div class="skills__title">
                  <p>sass</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/wordpress.png" alt="wordpress" />
                </div>
                <div class="skills__title">
                  <p>wordpress</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/react.png" alt="react" />
                </div>
                <div class="skills__title">
                  <p>react</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/github.png" alt="github" />
                </div>
                <div class="skills__title">
                  <p>github</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/vscode.png" alt="vscode" />
                </div>
                <div class="skills__title">
                  <p>vscode</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/photoshop.png" alt="photoshop" />
                </div>
                <div class="skills__title">
                  <p>photoshop</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/illustrator.png" alt="illustrator" />
                </div>
                <div class="skills__title">
                  <p>illustrator</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/php.png" alt="php" />
                </div>
                <div class="skills__title">
                  <p>PHP</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/laravel.png" alt="laravel" />
                </div>
                <div class="skills__title">
                  <p>Laravel</p>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/paython.png" alt="paython" />
                </div>
                <div class="skills__title">
                  <p>paython</p>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/java.png" alt="java" />
                </div>
                <div class="skills__title">
                  <p>java</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/c.png" alt="c" />
                </div>
                <div class="skills__title">
                  <p>c++</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
              <div class="skills__card">
                <div class="skills__image">
                  <img src="img/sql.png" alt="sql" />
                </div>
                <div class="skills__title">
                  <p>sql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================skill end ================ */}
      {/* =============discussion start ============== */}
      <section class="discuss">
        <div class="container">
          <div class="discuss__main">
            <div class="row discuss__background">
              <div class="col-md-7 col-lg-8">
                <div class="discuss__text">
                  <h3>Let’s discuss your idea</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="col-md-5 col-lg-4">
                <div class="discuss__btn">
                  <a class="btn btn__custome" href="#">
                    <i class="fas fa-paper-plane"></i>
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
      <section class="counter">
        <div class="counter__bg">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-4">
                <div class="counter__card count-1">
                  <img
                    src="img/project-management.svg"
                    class="counter__img"
                    alt=""
                  />
                  <div class="counter__details">
                    <h3>
                      <span class="counter-number">362</span>+
                    </h3>
                    <p>Project completed</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div class="counter__card count-2">
                  <img src="img/handshake.svg" class="counter__img" alt="" />
                  <div class="counter__details">
                    <h3>
                      <span class="counter-number">208</span>+
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div class="counter__card count-3">
                  <img src="img/rating.svg" class="counter__img" alt="" />
                  <div class="counter__details">
                    <h3>
                      <span class="counter-number">97</span>%
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
      <section class="package">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading package__head">
                <p>
                  pricing <span>plan</span>
                </p>
                <h2>This pricing plan will be changeable by discussion</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="package__card">
                <div class="pricing__money">
                  <h3>basic</h3>
                  <h4>$20.00</h4>
                  <p>per project</p>
                </div>
                <ul class="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>Three rivision</li>
                  <li>four section</li>
                </ul>
                <div class="package__btn">
                  <a class="btn btn__custome" href="#">
                    <i class="fas fa-paper-plane"></i>
                    <span>Purchase plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="package__card package__hover    ">
                <div class="pricing__moneyy">
                  <h3>standard</h3>
                  <h4>$50.00</h4>
                  <p>per project</p>
                </div>
                <ul class="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>five rivision</li>
                  <li>six section</li>
                </ul>
                <div class="package__btn">
                  <a class="btn btn__custome" href="#">
                    <i class="fas fa-paper-plane"></i>
                    <span>Purchase plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="package__card">
                <div class="pricing__moneyy">
                  <h3>premium</h3>
                  <h4>$89.00</h4>
                  <p>per project</p>
                </div>
                <ul class="package__list">
                  <li>One landing page</li>
                  <li>With responsive</li>
                  <li>modern design</li>
                  <li>eight rivision</li>
                  <li>nine section</li>
                </ul>
                <div class="package__btn">
                  <a class="btn btn__custome" href="#">
                    <i class="fas fa-paper-plane"></i>
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
      <section class="faq">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading faq__head">
                <p>
                  faq <span>question</span>
                </p>
                <h2>You have to find your question before we work together</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="faq__main">
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="faq__main">
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
                    <p>
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div class="faq__content">
                  <div class="faq__que">
                    <button>
                      Lorem Ipsum is simply dummy text of the printing?
                    </button>
                  </div>
                  <div class="faq__ans">
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
      <section class="claint">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading claint__head">
                <p>
                  clients <span>qoute</span>
                </p>
                <h2>
                  I'm proud to received fantastic feedback from the clients
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="client__slider">
                <div class="client__card">
                  <i class="far fa-star"></i>
                  <div class="client__text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority .
                    </p>
                  </div>
                  <div class="client__name">
                    <h5>austin houston</h5>
                    <p>new york, usa</p>
                    <a href="#">
                      <img src="img/testi-1.jpg" alt="testi-1" />
                    </a>
                  </div>
                </div>
                <div class="client__card">
                  <i class="far fa-star"></i>
                  <div class="client__text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority .
                    </p>
                  </div>
                  <div class="client__name">
                    <h5>devid whigtmore</h5>
                    <p>rome, Italy</p>
                    <a href="#">
                      <img src="img/testi-2.jpg" alt="testi-2" />
                    </a>
                  </div>
                </div>
                <div class="client__card">
                  <i class="far fa-star"></i>
                  <div class="client__text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority .
                    </p>
                  </div>
                  <div class="client__name">
                    <h5>sane galonhop</h5>
                    <p>dubai, uae</p>
                    <a href="#">
                      <img src="img/testi-3.jpg" alt="testi-3" />
                    </a>
                  </div>
                </div>
                <div class="client__card">
                  <i class="far fa-star"></i>
                  <div class="client__text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority .
                    </p>
                  </div>
                  <div class="client__name">
                    <h5>martin howelling</h5>
                    <p>toronto, canada</p>
                    <a href="#">
                      <img src="img/testi-4.jpg" alt="testi-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="drop__btn">
                <a class="btn btn__custome" href="#">
                  <i class="fas fa-tint"></i>
                  <span>drop your quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================client end ============== */}

      {/* ==============blog start ============== */}
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading blog__head">
                <p>
                  my <span>blogs</span>
                </p>
                <h2>Some article about my activity &amp; experience</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="blog__card">
                <div class="blog__image">
                  <img src="img/blog/blog-1.jpeg" alt="blog-1" />
                  <div class="blog__top__btn">
                    <p>html, css</p>
                  </div>
                </div>
                <div class="blog__content">
                  <ul class="blog__details">
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <p>02 feb 2020</p>
                    </li>
                    <li>
                      <i class="fas fa-share-alt"></i>
                      <p>5 share</p>
                    </li>
                  </ul>
                  <div class="blog__title">
                    <h4>
                      <a href="#">
                        Lorem Ipsum is simply dummy text of the printing....
                      </a>
                    </h4>
                  </div>
                  <ul class="blog__view__more">
                    <li>
                      <a class="btn btn__custome" href="#">
                        read more
                      </a>
                    </li>
                    <li>
                      <i class="far fa-comments"></i>
                      <p>13 comments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="blog__card">
                <div class="blog__image">
                  <img src="img/blog/blog-2.jpg" alt="blog-2" />
                  <div class="blog__top__btn">
                    <p>javascript</p>
                  </div>
                </div>
                <div class="blog__content">
                  <ul class="blog__details">
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <p>02 feb 2020</p>
                    </li>
                    <li>
                      <i class="fas fa-share-alt"></i>
                      <p>5 share</p>
                    </li>
                  </ul>
                  <div class="blog__title">
                    <h4>
                      <a href="#">
                        Lorem Ipsum is simply dummy text of the printing....
                      </a>
                    </h4>
                  </div>
                  <ul class="blog__view__more">
                    <li>
                      <a class="btn btn__custome" href="#">
                        read more
                      </a>
                    </li>
                    <li>
                      <i class="far fa-comments"></i>
                      <p>13 comments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="blog__related">
                    <div class="related__img">
                      <a href="#">
                        <img src="img/blog/blog-3.jpg" alt="suggest-1" />
                      </a>
                    </div>
                    <div class="related__content">
                      <div class="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div class="related__date">
                        <i class="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="blog__related">
                    <div class="related__img">
                      <a href="#">
                        <img src="img/blog/blog-4.png" alt="suggest-2" />
                      </a>
                    </div>
                    <div class="related__content">
                      <div class="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div class="related__date">
                        <i class="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="blog__related">
                    <div class="related__img">
                      <a href="#">
                        <img src="img/blog/blog-5.jpg" alt="suggest-3" />
                      </a>
                    </div>
                    <div class="related__content">
                      <div class="related__title">
                        <h6>
                          <a href="#">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h6>
                      </div>
                      <div class="related__date">
                        <i class="fas fa-calendar-alt"></i>
                        <p>02 feb 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="blog-btn">
                <a class="btn btn__custome" href="#">
                  <i class="far fa-eye"></i>
                  <span>show more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============blog end ============== */}

      {/* ==============contact ================ */}
      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__heading contact__head">
                <p>
                  contact <span>me</span>
                </p>
                <h2>I'm always active to my mail account.</h2>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-4 col-lg-4">
              <div class="contact__info">
                <div class="address__icon">
                  <a class="icon social__icon">
                    <i class="fas fa-phone-volume"></i>
                  </a>
                </div>
                <div class="contact__text">
                  <h4>phone</h4>
                  <p>
                    (+880) 1792892198 <span>(+880) 1904786956</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="contact__info">
                <div class="address__icon">
                  <a class="icon social__icon">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
                <div class="contact__text">
                  <h4>email</h4>
                  <p>
                    freelancerhelaluddin@gmail.com{" "}
                    <span>helal96889@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="contact__info">
                <div class="address__icon">
                  <a class="icon social__icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </a>
                </div>
                <div class="contact__text">
                  <h4>location</h4>
                  <p>
                    6440 Gurudaspur <span>Natore, Bangladesh</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-7">
              <form class="contact__form">
                <div class="input__field">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input__field">
                  <input type="text" placeholder="Subject" />
                  <input type="file" />
                </div>
                <div class="input__field">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div class="contact__btn">
                  <button class="btn btn__custome" type="submit">
                    <i class="fas fa-paper-plane"></i>
                    <span>send message</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-6 col-lg-5">
              <div class="my__img">
                <img src="img/undraw_envelope_n8lc.svg" alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================contact end ============== */}
    </>
  );
}
Home.layout = AppLayout;

export default Home;
