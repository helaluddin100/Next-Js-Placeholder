import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
function Review() {
  return (
    <div>
      {" "}
      <section className="claint">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading claint__head">
                <p>
                  clients <span>qoute</span>
                </p>
                <h2>
                  I&apos;m proud to received fantastic feedback from the clients
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="client__slider">
                <Swiper
                  modules={[Navigation, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                >
                  <SwiperSlide>
                    <div className="client__card">
                      <i className="far fa-star"></i>
                      <div className="client__text">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority .
                        </p>
                      </div>
                      <div className="client__name">
                        <h5>austin houston</h5>
                        <p>new york, usa</p>
                        <a href="#">
                          <img src="img/testi-1.jpg" alt="testi-1" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client__card">
                      <i className="far fa-star"></i>
                      <div className="client__text">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority .
                        </p>
                      </div>
                      <div className="client__name">
                        <h5>devid whigtmore</h5>
                        <p>rome, Italy</p>
                        <a href="#">
                          <img src="img/testi-2.jpg" alt="testi-2" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client__card">
                      <i className="far fa-star"></i>
                      <div className="client__text">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority .
                        </p>
                      </div>
                      <div className="client__name">
                        <h5>sane galonhop</h5>
                        <p>dubai, uae</p>
                        <a href="#">
                          <img src="img/testi-3.jpg" alt="testi-3" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client__card">
                      <i className="far fa-star"></i>
                      <div className="client__text">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority .
                        </p>
                      </div>
                      <div className="client__name">
                        <h5>martin howelling</h5>
                        <p>toronto, canada</p>
                        <a href="#">
                          <img src="img/testi-4.jpg" alt="testi-4" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="drop__btn">
                <a className="btn btn__custome" href="#">
                  <i className="fas fa-tint"></i>
                  <span>drop your quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
