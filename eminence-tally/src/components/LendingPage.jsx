import React, { useRef } from "react";
import styles from "./styles/Lending.module.css";
import AnimationImg from "../assets/Animation.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";


function LendingPage() {

  const imgRef = useRef();
  const textRef = useRef()

  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.to(imgRef.current, {
      y: -90,
      duration: 3,
      repeat: -1,
      yoyo: true,
    })

    tl.from(textRef.current,{
      opacity: 0,
      duration: 2,
      y:-100,
      delay: 1,
      stagger:1,
      repeat: -1,
      yoyo: true,
    })
    
  });


  return (
    <div className={styles.contentLending}>
      <div className={styles.boxone}>
        <h1 ref={textRef} className={styles.logoh1}>EminenceTally</h1>
        <h1>Computerised Accounting Solution </h1>
        <p style={{letterSpacing:"2px"}}>
          if you are looking to find job opportunities, make an impact in the
          job market and know its nuances- then we assist you in your journey
          right from certification to specialization and later with various job
          opportunities.
        </p>
        <button type="button" className={`btn btn-secondary fs-6 ${styles.buton}`}><Link to="contact" className="nav-link">Contect Us</Link></button>
      </div>
      <div className={styles.boxtow}>
        <img ref={imgRef} src={AnimationImg} alt="" className={styles.imgAni} />
      </div>
    </div>
  );
}

export default LendingPage;
