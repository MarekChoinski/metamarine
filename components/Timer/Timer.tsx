import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import styles from "./Timer.module.scss";

export interface TimerProps {
  date: Date | number;
}

const Timer: React.FC<TimerProps> = ({ date }) => {

const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
  return !completed?
        (<span className={styles.time}>{hours}:{minutes}:{seconds}</span>) :
        (<span>You are good to go!</span>);
};

return <Countdown
    date={date}
    renderer={renderer}
  />
};

export default Timer;
