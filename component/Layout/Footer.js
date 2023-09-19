import React, { useEffect, useState } from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__logo">
                <a href="#" className="logo">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="footer__social__icon">
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="footer__text">
                <li>
                  <h6>
                    &copy; Copyright <span>2021</span>
                  </h6>
                </li>
                <li>
                  <h6>
                    All rights reserved by <a href="#">LH Technology</a>
                  </h6>
                </li>
                <li>
                  <h6>
                    Type of version <span>v1.0.0</span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
