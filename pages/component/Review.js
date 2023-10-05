import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/review")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReview(result);
      });
  }, []);
  return (
    <div>
      <section className="client">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading client__head">
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
                  // spaceBetween={50}
                  slidesPerView={3}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                >
                  {review.map((item) => (
                    <SwiperSlide key={item}>
                      <div className="client__card">
                        <i className="far fa-star"></i>
                        <div className="client__text">
                          <p
                            title={item.message}
                            dangerouslySetInnerHTML={{
                              __html: item.message.substring(0, 100),
                            }}
                          ></p>
                        </div>
                        <div className="client__name">
                          <h5>{item.name}</h5>
                          <p>{item.area}</p>
                          <a>
                            <img
                              src={`http://localhost:8000/${item.image}`}
                              alt={item.name}
                            />
                          </a>
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
