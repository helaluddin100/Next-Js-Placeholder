import { useState } from "react";
import Link from "next/link";
function Header() {
  return (
    <>
      {/* <div className="spinner__wrapper">
        <img src="img/728.gif" alt="" className="spiner" />
      </div> */}

      <a className="night__mood">
        <img src="img/gear.gif" alt="gear" />
      </a>
      <a className="scroll__top" href="#">
        <i className="fas fa-long-arrow-alt-up"></i>
      </a>
      <nav className="navbar__part">
        <div className="container">
          <div className="navbar__content">
            <a className="logo" href="index.html">
              <img src="img/logo.png" alt="logo" />
            </a>
            <button className="navbar__toggle" type="button">
              <i className="fas fa-bars"></i>
            </button>
            <div className="navbar__slide">
              <a className="navbar__remove" href="#">
                <i className="fas fa-times"></i>
              </a>
              <ul className="navbar__list">
                <li className="navbar__item">
                  <a className="navbar__link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="service.html">
                    services
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="resume.html">
                    resume
                  </a>
                </li>
                <li className="navbar__dropdown">
                  <a className="navbar__link dropdown__indicator" href="#">
                    <span>portfolio</span>
                    <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown__list">
                    <li>
                      <a className="dropdown__link" href="protfolio-grid.html">
                        Portfolio Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="protfolio-details.html">
                        Portfolio Details
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="navbar__item navbar__dropdown">
                  <a className="navbar__link dropdown__indicator" href="#">
                    <span>blogs</span>
                    <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown__list">
                    <li>
                      <a className="dropdown__link" href="blog-grid.html">
                        Blog grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="blog-details.html">
                        blog details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="blog-grid-leftbar.html">
                        blog grid leftbar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="blog-grid-rightbar.html">
                        blog grid rightbar
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown__link"
                        href="blog-details-leftbar.html"
                      >
                        blog details leftbar
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown__link"
                        href="blog-details-rightbar.html"
                      >
                        blog details rightbar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="contact.html">
                    contact
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
              <form className="navbar__src">
                <input type="text" placeholder="Search for quick..." />
                <a href="#">
                  <i className="fas fa-search"></i>
                </a>
              </form>
              <div className="hire__button">
                <a className="btn btn__custome" href="#">
                  <i className="fas fa-code"></i>
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
