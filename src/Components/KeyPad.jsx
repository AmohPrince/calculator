import React from "react";
import "./KeyPad.css";

const KeyPad = ({
  setValue,
  calculate,
  showAnswer,
  setSecondValue,
  setStage,
  setOperator,
  setAnswer,
  theme,
}) => {
  const handleChangeValue = (value) => {
    setValue((prevValue) => prevValue.concat(value));
  };

  return (
    <div className={`keypad ${theme}`}>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("7");
        }}
      >
        7
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("8");
        }}
      >
        8
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("9");
        }}
      >
        9
      </div>
      <div
        className={`del ${theme}`}
        onClick={() => {
          setValue((prevValue) => prevValue.slice(0, -1));
        }}
      >
        DEL
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("4");
        }}
      >
        4
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("5");
        }}
      >
        5
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("6");
        }}
      >
        6
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          calculate("add");
        }}
      >
        +
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("1");
        }}
      >
        1
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("2");
        }}
      >
        2
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("3");
        }}
      >
        3
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          calculate("subtract");
        }}
      >
        -
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue(".");
        }}
      >
        .
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          handleChangeValue("0");
        }}
      >
        0
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          calculate("divide");
        }}
      >
        /
      </div>
      <div
        className={`grid-items ${theme}`}
        onClick={() => {
          calculate("multiply");
        }}
      >
        *
      </div>
      <div
        className={`reset ${theme}`}
        onClick={() => {
          setValue("");
          setSecondValue(0);
          setStage("");
          setOperator("");
          setAnswer("");
        }}
      >
        RESET
      </div>
      <div className={`equals ${theme}`} onClick={() => showAnswer()}>
        =
      </div>
    </div>
  );
};

export default KeyPad;
