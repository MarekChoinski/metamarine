import React from "react";
import styles from "./AuthorsSection.module.scss";
import p from "../../utils/prefixImages";
import ScrollAnimation from "react-animate-on-scroll";

export const AuthorsSection: React.FC = () => {
  return (
    <section className={styles.section} id="authors">
      <div className={styles.container}>
        <ScrollAnimation animateIn="fadeIn" duration={4} animateOnce>
          <h1 className={styles.header}>Meet our team</h1>
        </ScrollAnimation>
        <div className={styles.authors}>
          <div className={styles.box}>
            <ScrollAnimation animateIn="fadeIn" duration={4} animateOnce>
              <img
                src={p(`authors/kondzix.png`)}
                alt="Kondzix"
                className={styles.short}
              />
              <h1>Kondzix</h1>
              <h2>Creative director</h2>
              <p>
                Professional designer and artists. Author of Metamarine fishes
                artworks.
              </p>
            </ScrollAnimation>
          </div>
          <div className={styles.box}>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={4}
              delay={500}
              animateOnce
            >
              <img src={p(`authors/antonji.png`)} alt="antonji" />
              <h1>antonji</h1>
              <h2>Smart contracts</h2>
              <p>
                Founder of NFT project and blockchain developer securing
                project.
              </p>
            </ScrollAnimation>
          </div>
          <div className={styles.box}>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={4}
              delay={1000}
              animateOnce
            >
              <img
                src={p(`authors/dak0ta.png`)}
                alt="dak0ta"
                className={styles.short}
              />
              <h1>dak0ta</h1>
              <h2>Utility developer</h2>
              <p>
                Tech leader of utility side od project with many years of
                experience on creating web applications.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
