import React from 'react';
import styles from './styles/Teachers.module.css';

import { teacherObject } from '../store/Teachers';

const Teachers = () => {
    return (
        <div className={styles.ContainerBox}>
            <div className={`container`}>
            <h2 className="text-center mb-4 text-light fw-bold">Our Best Teachers</h2>
            <div className="row">
                 {teacherObject.map((teacher,index)=>(
                                    <div key={index} className="col-md-3 mb-4">
                                    <div className={`card ${styles.card}`}>
                                        <img
                                            src={teacher.image}
                                            className="card-img-top"
                                            alt="Alexa Janathon"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{teacher.Name}</h5>
                                            <p className="card-text">Faculty</p>
                                        </div>
                                    </div>
                                </div>
                 ))}
            </div>
        </div>
        </div>
    );
};

export default Teachers;