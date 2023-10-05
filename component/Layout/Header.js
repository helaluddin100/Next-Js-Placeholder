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

      {/* <a className="night__mood">
        <img src="img/gear.gif" alt="gear" />
      </a> */}
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
                  <a href="#about" className="navbar__link">
                    About
                  </a>
                </li>
                <li className="navbar__item">
                  <a href="#service" className="navbar__link">
                    services
                  </a>
                </li>

                <li className="navbar__dropdown">
                  <a
                    href="#portfolio"
                    className="navbar__link dropdown__indicator"
                  >
                    portfolio
                  </a>
                </li>

                {/* <li className="navbar__item navbar__dropdown">
                  <a className="navbar__link dropdown__indicator" href="#blog">
                    blogs
                  </a>
                </li> */}
                <li className="navbar__item">
                  <a className="navbar__link" href="#contact">
                    contact
                  </a>
                </li>
              </ul>

              <div className="hire__button">
                <a className="btn btn__custome" href="#contact">
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
