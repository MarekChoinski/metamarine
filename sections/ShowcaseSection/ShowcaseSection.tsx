import React from "react";
import styles from "./ShowcaseSection.module.scss";
import p from '../../utils/prefixImages';
import { Timer } from "../../components/Timer/Timer";

export interface ShowcaseSectionProps {

}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = () => {



return (
  <section
  className={styles.container}
  >

<h1 className={styles.header}>
  Deep, deep in the dark metaocean...
</h1>

<div className={styles.dual}>
    <div className={styles.text}>
      <h1>
  69,420 handrafted and detailed fishes waiting for you to be caught

      </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus praesentium velit nostrum esse, nam tempora necessitatibus voluptas, provident earum maxime vel nihil exercitationem neque! Numquam odit excepturi delectus atque.
  </p>
</div>
  <div className={styles.fish}>
    <img src="/fishes/1.png" alt="" />
    </div>

</div>

  </section>
)
};

