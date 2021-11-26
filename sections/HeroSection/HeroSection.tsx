import React from "react";
import styles from "./HeroSection.module.scss";
import p from '../../utils/prefixImages';
import { Timer } from "../../components/Timer/Timer";

export interface HeroSectionProps {

}

export const HeroSection: React.FC<HeroSectionProps> = () => {



return (
  <section
  className={styles.container}
  >
    <div className={styles.hero}>
      <img src={p("hero.png")} alt="Hero"/>
      <div className={styles.textBox}>
        <p>release date</p>
        <h1>DECEMBER 2021</h1>
      </div>
      {/* <Timer date={Date.now() + 50000}/> */}
    </div>
  </section>
)
};

