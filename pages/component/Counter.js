import Link from "next/link";
import React, { useEffect, useState } from "react";

import CountUp from "react-countup";

function Counter() {
  return (
    <div>
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
                      <CountUp end={362} duration={5} separator="," />
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
                      <CountUp end={208} duration={5} separator="," />
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
                      <CountUp end={97} duration={5} suffix="%" />
                    </h3>
                    <p>Positive Feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;
