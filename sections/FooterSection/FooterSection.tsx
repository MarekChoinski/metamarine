import React from "react";
import styles from "./FooterSection.module.scss";
import p from "../../utils/prefixImages";

export const FooterSection: React.FC = () => {
  return (
    <section className={styles.section} id="footer">
      <div className={styles.container}>
        <div className={styles.dualBox}>
          <div className={styles.logo}>
            <img src={p(`logo.png`)} alt="Logo" />
          </div>
          <div className={styles.linkSection}>
            <h1>Curious if there is going to be a good fishing?</h1>
            <div className={styles.linkContainer}>
              <div className={styles.linkBox}>
                <h2>Follow us</h2>
                <ul className={styles.list}>
                  <li>
                    <a href="#">
                      <img src={p(`icons/twitter.png`)} alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={p(`icons/discord.png`)} alt="Discord" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={p(`icons/instagram.png`)} alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.linkBox}>
                <h2>Contact us</h2>
                <a href="#">contact@metamarine.com</a>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2021 Metamarine. Let's go fishing.</p>
      </div>
    </section>
  );
};
