import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../styles/screen-layout.css";
import "./Home.css";

function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-screen page-home">
      <div className="screen-top">
        <span className="screen-label">Precision Timing</span>
        <h1 className="screen-title">Welcome to TimeIt</h1>
      </div>

      <div className="screen-middle">
        <p className="screen-time">{time}</p>
      </div>

      <div className="screen-bottom">
        <div className="screen-actions">
          <Link to="/stop-watch" className="cta-btn cta-primary">
            <i className="fa-solid fa-stopwatch" aria-hidden="true"></i>
            Stopwatch 
          </Link>
          <Link to="/timer" className="cta-btn cta-secondary">
            <i className="fa-solid fa-hourglass-half" aria-hidden="true"></i>
            Timer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
