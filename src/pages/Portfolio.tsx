import { FunctionComponent } from "react";
import BiographyCard from "../components/BiographyCard";
import ProjectCard from "../components/ProjectCard";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.hero}>
            <div className={styles.welcome}>Welcome.</div>
          </div>
          <div className={styles.headshot}>
            <div className={styles.welcome}>
              Product, innovation, and venture.
            </div>
          </div>
        </div>
        <BiographyCard />
      </div>
      <ProjectCard />
    </div>
  );
};

export default Portfolio;
