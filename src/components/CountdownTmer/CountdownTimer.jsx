import React from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ countDownData }) => {
  return (
    <>
      {countDownData.message.length <= 0 ? (
        <div>
          <div className="countdown-wrapper">
            <div className="countdown-box">
              {countDownData.days}
              <span className="legend">Days</span>
            </div>
            <div className="countdown-box">
              {countDownData.hours}
              <span className="legend">Hours</span>
            </div>
            <div className="countdown-box">
              {countDownData.minutes}
              <span className="legend">Minutes</span>
            </div>
            <div className="countdown-box">
              {countDownData.seconds}
              <span className="legend">Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="highlight">{countDownData.message}</div>
      )}
    </>
  );
};

export default CountdownTimer;
