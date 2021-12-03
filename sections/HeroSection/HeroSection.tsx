import React from "react";
import styles from "./HeroSection.module.scss";
import p from "../../utils/prefixImages";
import ScrollAnimation from "react-animate-on-scroll";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <img src={p("hero.png")} alt="Hero" />
        <div className={styles.textBox}>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            delay={1000}
            animateOnce
          >
            <p>release date</p>
            <h1>DECEMBER 2021</h1>
          </ScrollAnimation>
        </div>
        {/* <Timer date={Date.now() + 50000}/> */}
      </div>
    </section>
  );
};
