import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "./Images/my-profile.jpg";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const offcanvasRef = useRef(null);
  const location = useLocation();

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close offcanvas properly on route change
  useEffect(() => {
    if (offcanvasRef.current) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasRef.current);
      bsOffcanvas?.hide(); 
    }
  }, [location]);

  const navbarStyle = {
    transition: "background-color 0.3s ease-in-out",
    position: "fixed",
    width: "20%",
    height: "100%",
    top: 0,
    zIndex: 1,
    display: "block",
    padding: "20px 0 0 0",
    overflow: "auto",
  };

  const offcanvasStyle = {
    backgroundColor: "rgb(0 0 0 / 80%)",
    color: "white",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    background: "#55041f",
    color: "#ffffff",
  };

  const profileImg = {
    width: "200px",
    borderRadius: "100%",
    border: "7px solid #ffffff",
  };

  return (
    <nav className="navbar navbar-expand-lg border-body" style={navbarStyle}>
      {/* Brand/Profile */}
      <Link className="navbar-brand text-light" to="/">
        <div className="text-center d-lg-block d-none">
          <img style={profileImg} src={profile} alt="profile img" />
        </div>
      </Link>

      {/* Hamburger for small screens */}
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Regular navbar links for large screens */}
      <div className="collapse navbar-collapse">
        <ul
          className="navbar-nav"
          style={{ display: "block", fontSize: "18px", width: "100%", textAlign: "center" }}
        >
          <li className="nav-item mx-3">
            <Link
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
              style={location.pathname === "/" ? activeLinkStyle : linkStyle}
            >
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              to="/about"
              style={location.pathname === "/about" ? activeLinkStyle : linkStyle}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}
              to="/education"
              style={location.pathname === "/education" ? activeLinkStyle : linkStyle}
            >
              Education & Experience
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              to="/projects"
              style={location.pathname === "/projects" ? activeLinkStyle : linkStyle}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              to="/contact"
              style={location.pathname === "/contact" ? activeLinkStyle : linkStyle}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Offcanvas for small screens */}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={offcanvasStyle}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="navbar-nav" style={{ fontSize: "20px", fontFamily: "cursive" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                Education & Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>

          <hr />

          <div className="contact-details pt-3 pb-4 ps-5">
            <a href="mailto:kanikadob@gmail.com">
              <i className="fa fa-envelope"></i> kanikadob@gmail.com
            </a>
            <br />
            <a href="#">
              <i className="fa fa-map-marker"></i> Dehradun, Uttarakhand, India (248001)
            </a>
          </div>

          <div className="social-icons ps-5">
            <a href="https://www.linkedin.com/in/kanika-dobliyal-aa3b90228/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/KanikaDobliyal">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="copyright-text">
            <p>© 2025 Kanika Dobliyal</p>
          </div>
        </div>
      </div>

      {/* Large screen contact/social/copyright remains unchanged */}
      <div className="contact-details pt-3 pb-4 ps-5 d-lg-block d-none">
        <a href="mailto:kanikadob@gmail.com">
          <i className="fa fa-envelope"></i> kanikadob@gmail.com
        </a>
        <br />
        <a href="#">
          <i className="fa fa-map-marker"></i> Dehradun, Uttarakhand, India (248001)
        </a>
      </div>

      <div className="social-icons ps-5 d-lg-block d-none">
        <a href="https://www.linkedin.com/in/kanika-dobliyal-aa3b90228/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/KanikaDobliyal">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className="copyright-text d-lg-block d-none">
        <p>© 2025 Kanika Dobliyal</p>
      </div>
    </nav>
  );
};

export default NavBar;
