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
      <img src={p("hero.jpg")} alt="Hero"/>
      <Timer date={Date.now() + 50000}/>
    </div>
  </section>
)
};

