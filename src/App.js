import { useEffect, useState } from "react";
import "./App.css";
import Screen from "./Components/Screen";
import KeyPad from "./Components/KeyPad";

function App() {
  // const themeOne = {
  //   mainBackground: "hsl(222, 26%, 31%)",
  //   keypadBackground: "hsl(223, 31%, 20%)",
  //   screenBackground: "hsl(224, 36%, 15%)",
  //   keyBackground: "hsl(225, 21%, 49%)",
  //   keyShadow: "hsl(224, 28%, 35%)",
  //   key
  // };

  const [value, setValue] = useState("");
  const [stage, setStage] = useState("");
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [answer, setAnswer] = useState(0);

  //calculating stage
  const calculate = (operator) => {
    if (operator === "add") {
      setStage("calculating");
      setFirstValue(value);
      setValue("");
      setOperator(operator);
    }
  };

  useEffect(() => {
    setSecondValue(value);
  }, [value]);

  const showAnswer = () => {
    switch (operator) {
      case "add":
        const result = firstValue + secondValue;
        setStage("answer");
        return setAnswer(result);
    }
  };

  return (
    <div className="App">
      <div className="top-bar flex">
        <p className="logo">calc</p>
        <div className="theme-toggler flex">
          <p>theme</p>
          <div>
            <div className="theme-numbers flex">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="active-theme-screen">
              <div className="active" />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
      <Screen
        value={value}
        state={stage}
        firstValue={firstValue}
        answer={answer}
      />
      <KeyPad
        setValue={setValue}
        calculate={calculate}
        showAnswer={showAnswer}
        setSecondValue={setSecondValue}
        setStage={setStage}
        setOperator={setOperator}
      />
    </div>
  );
}

export default App;
