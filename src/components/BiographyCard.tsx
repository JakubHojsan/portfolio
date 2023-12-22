import { FunctionComponent } from "react";
import styles from "./BiographyCard.module.css";

const BiographyCard: FunctionComponent = () => {
  return (
    <div className={styles.biography}>
      <div className={styles.rightBiography}>
        <img className={styles.photo1Icon} alt="" src="/photo1@2x.png" />
        <img className={styles.photo1Icon} alt="" src="/photo2@2x.png" />
        <img className={styles.photo1Icon} alt="" src="/photo3@2x.png" />
      </div>
      <div className={styles.leftBiography}>
        <i className={styles.biography1}>Biography</i>
        <i className={styles.raisedInTheContainer}>
          <p
            className={styles.raisedInThe}
          >{`Raised in the suburbs of Chicago, I embarked on an entrepreneurial journey early on, founding a B2C marketplace that catered to students and local consumer needs. My aspirations then led me to the sunny city of Los Angeles, where I pursued my degree in Computer Science at UCLA, completing it December 2023. `}</p>
          <p className={styles.raisedInThe}>&nbsp;</p>
          <p className={styles.raisedInThe}>
            During my time there, I developed a keen interest in hardware
            products, leading me to delve into the fascinating world of product
            management and innovating existing product. 
          </p>
          <p
            className={styles.raisedInThe}
          >{`My passion for innovation didn't stop at the university gates. I actively engaged in various ventures, contributing to the growth of several companies while completing my education. `}</p>
          <p className={styles.raisedInThe}>&nbsp;</p>
          <p className={styles.raisedInThe}>
            This blend of academic rigor and real-world experience paved the way
            for my next big leap - joining Microsoft as a Product Manager.
          </p>
          <p className={styles.raisedInThe}>&nbsp;</p>
          <p className={styles.raisedInThe}>
            Away from the work realm, I find solace in riding my motorcycle, an
            Indian Chief. Although my move to Seattle led to characteristic
            overcast and rainy weather, it has only slightly dampened my
            enthusiasm for hitting the road on my bike. The journey through
            misty landscapes offers its own unique charm, adding another layer
            to my life's tapestry.
          </p>
          <p className={styles.raisedInThe}>&nbsp;</p>
          <p
            className={styles.raisedInThe}
          >{`I also enjoy travel, and most recently I was able to sail the Caribbean (clearly cosplaying Orlando Bloom in Pirates of the Caribbean) with my journey starting in Antigua and Barbuda. `}</p>
        </i>
      </div>
      <img
        className={styles.bottomBiographyIcon}
        alt=""
        src="/bottombiography@2x.png"
      />
    </div>
  );
};

export default BiographyCard;
