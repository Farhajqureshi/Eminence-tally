import React from "react";
// import ceoImg from "../assets/teacharsImg/team3.png.webp";
import styles from "./styles/Testimonial.module.css";
import ceoImg from "../assets/ceoImg.jpeg";

function Testimonial() {
  return (
    <div className={`container ${styles.ceoContainer}`} style={{padding:"100px"}}>
      <div className={`row `}>
        <div className={`col-md-6`}>
          <h1>Meet Our CEO</h1>
          <h4>Mr.Asif Qureshi</h4>
          <p className={styles.about}>
          Experienced Co-Founder with a demonstrated history of working in the computer software industry. Skilled in Training Needs Analysis, Customer Relationship Management (CRM), Screening, Management, and Management Information Systems (MIS). Strong business development professional with a Master of Business Administration (MBA) focused in Marketing/Marketing Management, General from Barkatullah Vishwavidyalaya.
          </p>
        </div>
        <div className={`col-md-6 d-flex justify-content-center align-item-center`}>
          <img
            src={ceoImg}
            alt="CEO Image"
            className={`img-fluid ${styles.imgOne}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
