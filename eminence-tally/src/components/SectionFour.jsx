import React from "react";
import styles from "./styles/SectionFour.module.css";
import "./styles/SectionFour.module.css";
import { cardObject } from "../store/CardObjec";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function SectionFour() {

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Popular Course</h1>
            <div className="row">
                {cardObject.map((item, index) => (
                    <div key={index} className="col-md-4 mt-4">
                        <div className={`card ${styles.card}`}>
                            <img src={item.cardImg} />
                            <div className="card-body">
                                <h5 className="card-title">{item.cardName}</h5>
                                <div className={styles.rating}>
                                    <div className="d-flex">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className="ml-2">{item.review}</span>

                                </div>
                                <div className={styles.info}>
                                    <i><FaUserAlt /></i>{item.User}
                                    <i><FcLike /></i>{item.Like}
                                </div>
                                <p className="card-text">{item.Duration}</p>
                                <p className="card-text">{item.Fees}</p>
                                <p>Mode Offline</p>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="text-center mt-4">
                <button className="btn btn-dark">Find More Courses</button>
            </div> */}
        </div>
    );
}

export default SectionFour;
