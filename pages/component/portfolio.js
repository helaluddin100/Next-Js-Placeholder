import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import Link from "next/link";
function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/portfolio")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPortfolio(result);
      });
  }, []);
  return (
    <div>
      {/* ===============portfolio ================ */}
      <section className="port">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading port__head">
                <p>
                  my <span>portfolio</span>
                </p>
                <h2>Take a look at the Old projects that I have done</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio__slide">
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
                  {portfolio.map((item) => (
                    <SwiperSlide key={item}>
                      <div className="port__card">
                        <div className="portfolio__img">
                          <img src={item.work_img} alt={item.title} />
                        </div>
                        <div className="portfolio__hover">
                          <div className="protfolio__btn">
                            <a className="btn btn__custome" href={item.url}>
                              live preview
                            </a>
                            <a className="btn btn__custome" href="#">
                              view details
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="protfolio__view__more">
                <Link href="/portfolio">
                  <a className="btn btn__custome">
                    <i className="far fa-eye"></i>
                    <span>View more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================portfolio end ================== */}
    </div>
  );
}

export default Portfolio;
