import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ onCancel, isCountDownActive, handleDateSelect }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDateSelect(date);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input-field"
        required
      />
{!isCountDownActive && (
    <button type="submit" className="button"> Start Timer</button>
)}
{isCountDownActive && (
    <button type="button" className="button" onClick={onCancel}>Cancel Timer</button>
)}
    </form>
  );
};

export default InputForm;
