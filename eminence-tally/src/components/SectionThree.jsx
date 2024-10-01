import React from "react";
import LogoAbout from "../assets/LogoAbout.png";
import AboutImg from "../assets/about2.png.webp";
import styles from "./styles/SectionSecond.module.css";
import { GrCertificate } from "react-icons/gr";
import { FaUsersCog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoCreateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function SectionThree() {
    return (
        <div className={`container ${styles.containerBox}`} id='about'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <span>More About Our Institute</span>
                    <h2 className="fw-bold fs-1">Want to know more</h2>
                    <p>
                        Eminence Tally Computerized accounting Solutions is committed to the
                        growth of computerized accounting awareness among the people and is
                        an effective solution provider to various small and middle
                        enterprises, to suit their changing needs in computerized
                        accounting. Featuring.... Master Tally Partner Tally Service Partner
                        (TSP) Authorized Distributors Tally Authorized Service center
                        Authorized Tally Academies Authorized Sales and Promotion Tally
                        Customization Authorized Tally Accounts Training and Support Tally
                        Placement Counseling Accounting Solutions Provider.
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                            <IoCreateSharp /> Creative ideas base
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                            <FaUsersCog /> Experienced Trainers
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                            <GrCertificate /> Certification
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                            <BiSupport /> Job Support
                            </span>
                        </li>
                    </ul>
                    <button className="btn btn-dark  mt-3"><Link to="/contact" className="nav-link">Contect Now</Link></button>
                </div>
                <div className={`col-md-6 ${styles.containerImg}`}>
                    <img
                        src={AboutImg}
                        // style={{ width: "40rem", height: "auto" }}
                        className={styles.containerImgOne}
                        alt="About Company"
                    // className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
