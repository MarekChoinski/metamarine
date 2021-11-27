import React from "react";
import styles from "./ShowcaseSection.module.scss";
import p from '../../utils/prefixImages';
import { Timer } from "../../components/Timer/Timer";
import { useVisibility } from "../../utils/useVisibility";
import classnames from "classnames";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

// for file in *.png ; do ffmpeg -i "$file" -vf scale=900:-1 "small-${file}"; done
// for file in small-* ; do ffmpeg -i "$file" -vf  "crop=750:500:30:225" "crop-${file}"; done

// for file in *.png ; do cwebp -lossless "$file" -o "${file%.png}.webp"; done

export interface ShowcaseSectionProps {

}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = () => {

  const [isHeaderVisible, headerVisible] = useVisibility<HTMLDivElement>(3000);

return (
  <section
  className={styles.container}
  id="showcase"
  >

<ScrollAnimation animateIn="fadeIn"  duration={4} animateOnce>
  <h1 className={styles.header}>
    Deep, deep in the dark metaocean...
  </h1>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeIn"  duration={4} delay={1500} animateOnce >
<div className={styles.dual}>
    <div className={styles.text}>
      <h1>
  69,420 handrafted and detailed fishes waiting for you to be caught

      </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus praesentium velit nostrum esse, nam tempora necessitatibus voluptas, provident earum maxime vel nihil exercitationem neque! Numquam odit excepturi delectus atque.
  </p>
</div>
  <div className={styles.fadecycle}>
    {[...Array(10)].map((_,i)=> {
      return (<img src={p(`fishes/crop-small-${i}.png`)} alt=""/>);
    })}
    

    </div>
 
</div>
</ScrollAnimation>

  </section>
)
};

