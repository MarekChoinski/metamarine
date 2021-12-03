import Slider from "react-slick";

import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { SlickArrow } from "./SlickArrow";
import p from '../../utils/prefixImages';



export const Carousel: React.FC = ({
  children,

}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    nextArrow: (
      <SlickArrow
        src={p("chevron-right.png")}
        alt="next"
        className="slick-next slick-arrow"
      />
    ),
    prevArrow: (
      <SlickArrow
      src={p("chevron-left.png")}
        alt="prev"
        className="slick-prev slick-arrow"
      />
    )
  };

  return (
      <Slider
        {...settings}
      >
        {children}
      </Slider>
  );
};
