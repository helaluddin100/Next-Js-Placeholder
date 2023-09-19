import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =================current page active link=============
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.asPath;

    const cleanPath = currentPath.split("?")[0].split("#")[0];

    const url = cleanPath === "" ? "index.html" : cleanPath;

    document.querySelectorAll(".navbar__item").forEach((item) => {
      const href = item.querySelector("a").getAttribute("href");

      if (url === href) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [router.asPath]);
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
      <nav className={`navbar__part ${isNavbarFixed ? "navbar-fixed" : ""}`}>
        <div className="container">
          <div className="navbar__content">
            <Link href={"/"}>
              <a className="logo">
                <img src="img/logo.png" alt="logo" />
              </a>
            </Link>
            <button className="navbar__toggle" type="button">
              <i className="fas fa-bars"></i>
            </button>
            <div className="navbar__slide">
              <a className="navbar__remove" href="#">
                <i className="fas fa-times"></i>
              </a>
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link href={"/"}>
                    <a className="navbar__link">Home</a>
                  </Link>
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
                      <a
                        className="dropdown__link"
                        href="protfolio-details.html"
                      >
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
                      <a
                        className="dropdown__link"
                        href="blog-grid-leftbar.html"
                      >
                        blog grid leftbar
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown__link"
                        href="blog-grid-rightbar.html"
                      >
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
