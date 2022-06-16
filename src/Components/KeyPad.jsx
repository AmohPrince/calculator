import React from "react";
import "./KeyPad.css";

const KeyPad = ({
  setValue,
  calculate,
  showAnswer,
  setSecondValue,
  setStage,
  setOperator,
}) => {
  const handleChangeValue = (value) => {
    setValue((prevValue) => prevValue.concat(value));
  };

  return (
    <div className="keypad">
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("7");
        }}
      >
        7
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("8");
        }}
      >
        8
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("9");
        }}
      >
        9
      </div>
      <div
        className="del"
        onClick={() => {
          setValue((prevValue) => prevValue.slice(0, -1));
        }}
      >
        DEL
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("4");
        }}
      >
        4
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("5");
        }}
      >
        5
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("6");
        }}
      >
        6
      </div>
      <div
        className="grid-items"
        onClick={() => {
          calculate("add");
        }}
      >
        +
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("1");
        }}
      >
        1
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("2");
        }}
      >
        2
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("3");
        }}
      >
        3
      </div>
      <div className="grid-items">-</div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue(".");
        }}
      >
        .
      </div>
      <div
        className="grid-items"
        onClick={() => {
          handleChangeValue("0");
        }}
      >
        0
      </div>
      <div className="grid-items">/</div>
      <div className="grid-items">*</div>
      <div
        className="reset"
        onClick={() => {
          setValue("");
          setSecondValue(0);
          setStage("");
          setOperator("");
        }}
      >
        RESET
      </div>
      <div className="equals" onClick={() => showAnswer()}>
        =
      </div>
    </div>
  );
};

export default KeyPad;
