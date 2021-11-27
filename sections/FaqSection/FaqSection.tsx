import React, { useState } from "react";
import styles from "./FaqSection.module.scss";
import p from '../../utils/prefixImages';
import { Timer } from "../../components/Timer/Timer";
import { Collapse } from "react-collapse";
import Plus from "../../components/Plus/Plus";

export interface FaqSectionProps {

}

export const FaqSection: React.FC<FaqSectionProps> = () => {

  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);

return (
  <section
  className={styles.section}
  id="faq"
  >
    <div className={styles.container}>
<h1 className={styles.header}>
  Frequently asked questions
</h1>


<div className={styles.questions}>
  <h4 onClick={()=>setQ1(!q1)}>
    <Plus />Tutaj jest przykładowe pytanie?
  </h4>
  <Collapse isOpened={q1} >
   <p  onClick={()=>setQ1(!q1)}>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?
   </p>
   
  </Collapse>
  <h4 onClick={()=>setQ2(!q2)}>
    <Plus />Tutaj jakies kolejne pytanie?
  </h4>
  <Collapse isOpened={q2}>
<p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?

</p>

  </Collapse>
  <h4 onClick={()=>setQ3(!q3)}>
    <Plus />A tutaj następne?
  </h4>
  <Collapse isOpened={q3}>
    <div className="a">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa temporibus architecto, vero veniam distinctio ad?
    </div>
  </Collapse>
</div>

    </div>




  </section>
)
};

