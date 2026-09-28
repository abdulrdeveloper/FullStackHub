import React from "react";
import { useState, useEffect } from "react";
import "../styles/screen-layout.css";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="page-screen page-timer">
      <div className="screen-top">
        <span className="screen-label">Countdown</span>
        <h1 className="screen-title" style={{ fontSize: "2rem" }}>Precision Timer</h1>
      </div>

      <div className="screen-middle">
        <p className="screen-time">{formatTime(time)}</p>
        <input
          className="timer-input"
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Number in Seconds"
        />
      </div>

      <div className="screen-bottom">
        <div className="screen-actions timer-actions">
          <button type="button" onClick={() => setTime(Number(userInput) || 0)}>
            Set
          </button>
          <button type="button" onClick={() => setIsRunning(true)}>
            Start
          </button>
          <button type="button" onClick={() => setIsRunning(false)}>
            Pause
          </button>
          <button
            type="button"
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
