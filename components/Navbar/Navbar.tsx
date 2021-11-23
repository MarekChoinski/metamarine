import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import classnames from "classnames";


import styles from "./Navbar.module.scss";

const textLinks = [
  {
    text: "Showcase",
    href: "#showcase"
  },
  {
    text: "Roadmap",
    href: "#roadmap"
  },
  {
    text: "FAQ",
    href: "#faq"
  },
  {
    text: "TEAM",
    href: "#team"
  }
];

const useHideOnScroll = () => {
  const prevScrollY = useRef<number>(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsHidden(isHidden => {
        const scrolledDown = window.scrollY > prevScrollY.current;
        if (scrolledDown && !isHidden) {
          return true;
        } else if (!scrolledDown && isHidden) {
          return false;
        } else {
          prevScrollY.current = window.scrollY;
          return isHidden;
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isHidden;
};

const useCheckTop = () => {
  const [top, setTop] = useState(true);
  const [hideBar, setHideBar] = useState(true);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setTop(top === 0);
    setHideBar(top < 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { top, hideBar };
};

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isHidden = useHideOnScroll();
  const { top, hideBar } = useCheckTop();

  return (
    <nav
      className={classnames(styles.navbar, {
        [styles.top]: top,
        [styles.hidden]: isHidden
      })}
    >

      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a className={styles.logo}>
              Meta<span>Marine</span>
            </a>
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
          >
            <div
              className={classnames(styles.hamburgerIcon, {
                [styles.open]: showMenu
              })}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <ul
          className={classnames(styles.linkList, {
            [styles.showMenu]: showMenu
          })}
        >
          {textLinks.map(textLink => (
            <li key={textLink.text}>
              <Link href={textLink.href}>
                <a className={styles.link}>{textLink.text}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/hire-us">
              <a>
                <button
                  className={styles.aquarium}
                >
                  Your Aquarium
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
