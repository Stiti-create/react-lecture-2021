import React, { useState, useEffect, useRef } from "react";

const Timer = (props) => {
  const duration = props.duration;

  const [startTimer, setStartTimer] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);
  const [time, setTime] = useState(duration);
  const timeRef = useRef(null);

  const handleClick = () => {
    //   for regulating start stop state
    setStartTimer((startTimer) => !startTimer);
  };
  const handleReset = () => {
    //for handling reset click
    setTimerEnded(false);
    setTime(duration);
    setStartTimer(false);
  };

  useEffect(() => {
    if (!startTimer) {
      // for handling stop button
      clearInterval(timeRef.current);
      setTimerEnded(false);
      return setTime(duration);
    } else if (startTimer) {
      // for handling start button
      timeRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  }, [startTimer, duration]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timeRef.current);
      setTimerEnded(true);
    }
  }, [time]);

  return (
    <section>
      <div className="timer-container">
        <div>Time remaining is {time}</div>
        {!timerEnded && (
          <button type="button" onClick={handleClick}>
            {startTimer ? "Stop" : "Start"}
          </button>
        )}
        {timerEnded && (
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
      {timerEnded && (
        <div className="timer-status">
          <b>Your timer has ended</b>
        </div>
      )}
    </section>
  );
};

export default Timer;
