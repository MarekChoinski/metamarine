import React, { useState } from "react";
import styles from "./FooterSection.module.scss";
import { Collapse } from "react-collapse";
import Plus from "../../components/Plus/Plus";

export const FooterSection: React.FC = () => {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h1 className={styles.header}>Frequently asked questions</h1>

        <div className={styles.questions}>
          <h4 onClick={() => setQ1(!q1)}>
            <Plus />
            Tutaj jest przykładowe pytanie?
          </h4>
          <Collapse isOpened={q1}>
            <p onClick={() => setQ1(!q1)}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
              fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet.
              Amet deleniti sit voluptatem nobis ipsa temporibus architecto,
              vero veniam distinctio ad?
            </p>
          </Collapse>
          <h4 onClick={() => setQ2(!q2)}>
            <Plus />
            Tutaj jakies kolejne pytanie?
          </h4>
          <Collapse isOpened={q2}>
            <p onClick={() => setQ2(!q2)}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
              fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet.
              Amet deleniti sit voluptatem nobis ipsa temporibus architecto,
              vero veniam distinctio ad? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. At, fugiat fugit excepturi debitis suscipit
              ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa
              temporibus architecto, vero veniam distinctio ad? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. At, fugiat fugit
              excepturi debitis suscipit ipsam sit asperiores amet. Amet
              deleniti sit voluptatem nobis ipsa temporibus architecto, vero
              veniam distinctio ad? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. At, fugiat fugit excepturi debitis suscipit
              ipsam sit asperiores amet. Amet deleniti sit voluptatem nobis ipsa
              temporibus architecto, vero veniam distinctio ad?
            </p>
          </Collapse>
          <h4 onClick={() => setQ3(!q3)}>
            <Plus />A tutaj następne?
          </h4>
          <Collapse isOpened={q3}>
            <p onClick={() => setQ3(!q3)}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
              fugiat fugit excepturi debitis suscipit ipsam sit asperiores amet.
              Amet deleniti sit voluptatem nobis ipsa temporibus architecto,
              vero veniam distinctio ad?
            </p>
          </Collapse>
        </div>
      </div>
    </section>
  );
};
