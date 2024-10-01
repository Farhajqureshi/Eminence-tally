import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {

  return (
    <footer className="text-center text-white bg-dark" style={{ backgroundColor: '' }}>
      <div className="container">
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/" className="text-white">Home</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="about" className="text-white">About Us</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="contact" className="text-white">Contect</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="gallery" className="text-white">Gallery</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="teachers" className="text-white">Teachers</Link>
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Eminence Tally Services has on offer one of the finest environments for career development and advancement. We believe in a vibrant, open door approach whilst providing a strong performance driven environment where hierarchies are inconsequential. Eminence Tally Services ensures that career development programs are harmoniously aligned with organizational objectives so as to accomplish growth for both employees and the company.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-5">

          <a href="https://www.facebook.com/eminencetally/" target='_blank' className="text-white me-4 fs-4 ">
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/in/eminence-tally-411019239/?originalSubdomain=in" className="text-white me-4 fs-4" target='_blank'>
            <FaLinkedin />
          </a>

          <a href="https://instagram.com/eminence_tally/" className="text-white me-4 fs-4" target='_blank'>
          <FaInstagramSquare />
          </a>

        </section>

        <div
          className="text-center p-3 w-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2017 Copyright:
          <a className="text-white" href='#'>
            EminenceTally.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;