import React from "react";
import "./Screen.css";

const Screen = ({ value = "0.00", state, answer, firstValue, theme }) => {
  if (state === "answer") {
    return (
      <div className={`screen ${theme}`}>
        <p className="second-value">{answer}</p>
      </div>
    );
  } else if (state === "calculating") {
    return (
      <div className={`screen ${theme}`}>
        <p className="first-value">{firstValue}</p>
        <p className="second-value">{value}</p>
      </div>
    );
  } else {
    return (
      <div className={`screen ${theme}`}>
        <p className="second-value">{value}</p>
      </div>
    );
  }
};

export default Screen;
