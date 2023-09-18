import { useState } from "react";
import Link from "next/link";
function Header() {
  return (
    <>
      {/* <div class="spinner__wrapper">
        <img src="img/728.gif" alt="" class="spiner" />
      </div> */}

      <a class="night__mood">
        <img src="img/gear.gif" alt="gear" />
      </a>
      <a class="scroll__top" href="#">
        <i class="fas fa-long-arrow-alt-up"></i>
      </a>
      <nav class="navbar__part">
        <div class="container">
          <div class="navbar__content">
            <a class="logo" href="index.html">
              <img src="img/logo.png" alt="logo" />
            </a>
            <button class="navbar__toggle" type="button">
              <i class="fas fa-bars"></i>
            </button>
            <div class="navbar__slide">
              <a class="navbar__remove" href="#">
                <i class="fas fa-times"></i>
              </a>
              <ul class="navbar__list">
                <li class="navbar__item">
                  <a class="navbar__link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="navbar__item">
                  <a class="navbar__link" href="service.html">
                    services
                  </a>
                </li>
                <li class="navbar__item">
                  <a class="navbar__link" href="resume.html">
                    resume
                  </a>
                </li>
                <li class="navbar__dropdown">
                  <a class="navbar__link dropdown__indicator" href="#">
                    <span>portfolio</span>
                    <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown__list">
                    <li>
                      <a class="dropdown__link" href="protfolio-grid.html">
                        Portfolio Grid
                      </a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="protfolio-details.html">
                        Portfolio Details
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="navbar__item navbar__dropdown">
                  <a class="navbar__link dropdown__indicator" href="#">
                    <span>blogs</span>
                    <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown__list">
                    <li>
                      <a class="dropdown__link" href="blog-grid.html">
                        Blog grid
                      </a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="blog-details.html">
                        blog details
                      </a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="blog-grid-leftbar.html">
                        blog grid leftbar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="blog-grid-rightbar.html">
                        blog grid rightbar
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown__link"
                        href="blog-details-leftbar.html"
                      >
                        blog details leftbar
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown__link"
                        href="blog-details-rightbar.html"
                      >
                        blog details rightbar
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navbar__item">
                  <a class="navbar__link" href="contact.html">
                    contact
                  </a>
                </li>
                <li class="navbar__item">
                  <a class="navbar__link" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
              <form class="navbar__src">
                <input type="text" placeholder="Search for quick..." />
                <a href="#">
                  <i class="fas fa-search"></i>
                </a>
              </form>
              <div class="hire__button">
                <a class="btn btn__custome" href="#">
                  <i class="fas fa-code"></i>
                  <span>hire me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
