import React from "react";
import styles from "./styles/Navbar.module.css";
import Logo from "../assets/LogoNav.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  shadow mb-5 bg-body-tertiary position-static top-0 start-0 w-100 rounded">
      <div className="container-fluid">
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="courses"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Courses</Link>
              <ul className={`dropdown-menu ${styles.ulindex}`}>
                <li>
                  <Link to="courses" className="dropdown-item">Computer</Link>
                </li>
                <li>
                  <Link to="/courses" className="dropdown-item">
                    Tally
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="courses" className="dropdown-item">
                    English Speaking
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="teachers" className="nav-link">Teachers</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              type="button"
              className={`btn btn-dark fs-6 ${styles.buton}`}
            >
              <a href="https://eminencetally.com/Backend/index.php#" className="nav-link" target="_blank"> Login</a>
            </button>

            <button
              type="button"
              className={`btn btn-dark fs-6 ${styles.buton}`}
            >
              <Link to="contact" className="nav-link">Contect Us</Link>
            </button>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
