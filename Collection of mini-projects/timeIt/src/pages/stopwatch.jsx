import React from "react";
import { useState, useEffect } from "react";
import "../styles/screen-layout.css";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="page-screen page-stopwatch">
      <div className="screen-top">
        <span className="screen-label">Elapsed time</span>
        <h1 className="screen-title" style={{ fontSize: "2rem" }}>Pro Stopwatch</h1>
      </div>

      <div className="screen-middle">
        <p className="screen-time">{formatTime(time)}</p>
      </div>

      <div className="screen-bottom">
        <div className="screen-actions">
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

export default Stopwatch;
