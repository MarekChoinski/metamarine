import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import styles from "./Timer.module.scss";

export interface TimerProps {
  date: Date | number;
}

export const Timer: React.FC<TimerProps> = ({ date }) => {
  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed
  }) => {
    return !completed ? (
      <span className={styles.timer}>
        {hours}:{minutes}:{seconds}
      </span>
    ) : (
      <span className={styles.timer}>You are good to go!</span>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};
