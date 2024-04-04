import React, { useEffect, useState } from "react";
import "./Home.css";
import InputForm from "../InputForm/InputForm";
import CountdownTimer from "../CountdownTmer/CountdownTimer";

const Home = () => {
  const [isCountDownActive, setIsCountDownActive] = useState(false);
  const [countDownData, setCountDownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [intervalId, setIntervalId] = useState(null);

  const startCountDown = (targetDateTime) => {
    clearInterval(intervalId);
    const interval = setInterval(() => {
const now = new Date();
const target = new Date(targetDateTime);

if(target > now) {
    const difference = target - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    console.log('days',days)
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if(days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59){
        setIsCountDownActive(true);
        setCountDownData({days, hours, minutes, seconds, message:""})
    } else {
        setCountDownData({
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
            message: "Selected time is more than 100 days"
        })
    }
} else {
    setIsCountDownActive(false);
    setCountDownData({
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
        message: "The countdown is over. What's next on your Adventure?"
    });
    clearInterval(interval);
}
    }, 1000);
    setIntervalId(interval)
  };

  useEffect(() => {
    //cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleDateSelect = (date) => {
    startCountDown(date);
  };

  const onCancel = () => {
    clearInterval(intervalId);
    setIsCountDownActive(false);
    setCountDownData({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    });
  };
  return (
    <div>
      <h1 className="heading">Countdown <span className="heading-1">Timer</span></h1>
      <InputForm
        isCountDownActive={isCountDownActive}
        onCancel={onCancel}
        handleDateSelect={handleDateSelect}
      />
      <CountdownTimer countDownData={countDownData} />
    </div>
  );
};

export default Home;
