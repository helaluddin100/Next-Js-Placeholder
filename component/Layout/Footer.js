import React, { useEffect, useState } from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer__logo">
                <a href="#" class="logo">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="footer__social__icon">
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
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="footer__text">
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
