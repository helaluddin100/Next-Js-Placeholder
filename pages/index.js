import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Portfolio from "./component/portfolio";
import Review from "./component/Review";
import Contact from "./component/Contact";
import Counter from "./component/Counter";
import FaqComponent from "./component/FaqComponent";
import Resume from "./component/Resume";
import Link from "next/link";
import Skill from "./component/Skill";
function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/home")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setHome(result);
      });
  }, []);
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      {home.banner && (
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
                    <img src={home.banner.ban_img} alt={home.banner.sm_title} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="banner__text__area">
                    <ul className="banner__social">
                      <li>
                        <a
                          className="icon social__icon"
                          target="_blank"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon social__icon"
                          target="_blank"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon social__icon"
                          target="_blank"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon social__icon"
                          target="_blank"
                          href="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon social__icon"
                          target="_blank"
                          href="#"
                        >
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="banner__text">
                      <span>{home.banner.sm_title}</span>
                      <h1>{home.banner.ban_title}</h1>
                      <p>{home.banner.ban_des}</p>
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
      )}
      {/* ===========banner end============== */}
      <div id="about">
        <Resume />
      </div>

      {/* ============resume end================= */}
      {/* =========service start ============== */}
      <div id="service">
        {home.banner && (
          <section className="service">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__heading service__head">
                    <p>
                      my <span>services</span>
                    </p>
                    <h2>I&lsquo;m very passionate under about this services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {home.services && home.services.length > 0 ? (
                  home.services.map((item, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div className="service__card">
                        <h3>{index}</h3>
                        <span className={item.icon}></span>
                        <i className={item.icon}></i>
                        <h4>{item.title}</h4>
                        <p>{item.meta_description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No experience data available.</p>
                )}
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
        )}
      </div>
      {/* ================service end ============= */}

      {/* =============coding start =============== */}
      {home.banner && (
        <section className="coding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__heading coding__head">
                  <p>
                    coding <span>structure</span>
                  </p>
                  <h2>
                    How do I organize my coding file &amp; coding structure
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="coding__text">
                  <h3>{home.coding.title}</h3>
                  <p>{home.coding.description}</p>
                </div>
                <ul className="coding__list">
                  <li>
                    <span className="right__aro">
                      <i className="fas fa-hand-point-right"></i>
                    </span>
                    <p>{home.coding.stap_1}</p>
                  </li>
                  <li>
                    <span className="right__aro">
                      <i className="fas fa-hand-point-right"></i>
                    </span>
                    <p>{home.coding.stap_2}</p>
                  </li>
                  <li>
                    <span className="right__aro">
                      <i className="fas fa-hand-point-right"></i>
                    </span>
                    <p>{home.coding.stap_3}</p>
                  </li>
                  <li>
                    <span className="right__aro">
                      <i className="fas fa-hand-point-right"></i>
                    </span>
                    <p>{home.coding.stap_4}</p>
                  </li>
                  <li>
                    <span className="right__aro">
                      <i className="fas fa-hand-point-right"></i>
                    </span>
                    <p>{home.coding.stap_5}</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="coding__img">
                  <img src={home.coding.image} alt={home.coding.title} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================coding end =============== */}
      <div id="portfolio">
        <Portfolio />
      </div>
      {/* ==============skill =============== */}
      <Skill />

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
                  <Link href="/contact">
                    <a className="btn btn__custome">
                      <i className="fas fa-paper-plane"></i>
                      <span>Get in Touch</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================discussion end ============== */}

      {/* ============counter ============ */}
      <Counter />

      {/* ==============counter end ============== */}

      {/* ==========package start ============== */}
      {/* <section className="package">
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
      </section> */}

      {/* =============package end ============== */}

      {/* =================faq============ */}
      <div id="faq">
        <FaqComponent />
      </div>
      {/* ==============faq end ============== */}

      {/* ==============client ============== */}
      <div id="review">
        <Review />
      </div>
      {/* =================client end ============== */}

      {/* ==============blog start ============== */}
      {/* <section className="blog">
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
      </section> */}

      {/* ==============blog end ============== */}

      {/* ==============contact ================ */}
      <div id="contact">
        <Contact />
      </div>

      {/* =================contact end ============== */}
    </>
  );
}
Home.layout = AppLayout;

export default Home;
