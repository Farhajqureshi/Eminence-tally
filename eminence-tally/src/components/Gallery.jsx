
import styles from "./styles/Gallery.module.css";
import galleryImg from "../assets/galleryImg/galleryImg3.jpg";
import galleryImg2 from "../assets/galleryImg/galleryImg1.jpg"
import galleryImg3 from "../assets/galleryImg/imgTwo.jpg"
import galleryImg4 from "../assets/galleryImg/mainImg2.jpg"

import galleryImg5 from "../assets/galleryImg/mainImg5.jpeg"
import galleryImg6 from "../assets/galleryImg/imgSix.jpg"


function Gallery() {
    return (
        <div className={styles.mainSection}>
            <div>
                <h1 className="text-center">Our Institute Galary</h1>
            </div>
            <main className={styles.main}>
                <div className={styles.gallery}>
                    <div className={styles.divOne}>
                        <img src={galleryImg} className={styles.img1} />
                    </div>

                    <div className={styles.divTwo}>
                        <img src={galleryImg2} alt="" className={styles.img2} />
                    </div>


                    <div className={styles.divThree}>
                        <img src={galleryImg3} alt="" className={styles.img3} />
                    </div>

                    <div className={styles.divFour}>
                        <img src={galleryImg4} alt="" className={styles.img4} />
                    </div>


                    <div className={styles.divFive}>
                        <img src={galleryImg5} alt="" className={styles.img5} />
                    </div>

                    <div className={styles.divSix}>
                        <img src={galleryImg6} alt="" className={styles.img6} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Gallery;
