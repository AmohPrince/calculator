import React from "react";
import "./Screen.css";

const Screen = ({ value = "0.00", state, answer, firstValue }) => {
  if (state === "answer") {
    return (
      <div className="screen">
        <p className="answer second-value">{answer}</p>
      </div>
    );
  } else if (state === "calculating") {
    return (
      <div className="screen">
        <p className="first-value">{firstValue}</p>
        <p className="second-value">{value}</p>
      </div>
    );
  } else {
    return (
      <div className="screen">
        <p className="second-value">{value}</p>
      </div>
    );
  }
};

export default Screen;
