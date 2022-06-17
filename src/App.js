import { useEffect, useState } from "react";
import "./App.css";
import Screen from "./Components/Screen";
import KeyPad from "./Components/KeyPad";

function App() {
  const [theme, setTheme] = useState("theme-one");
  const [value, setValue] = useState("");
  const [stage, setStage] = useState("");
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [answer, setAnswer] = useState(0);

  //calculating stage
  const calculate = (operator) => {
    console.log(operator);
    setStage("calculating");
    setFirstValue(value);
    setValue("");
    setOperator(operator);
  };

  useEffect(() => {
    setSecondValue(value);
  }, [value]);

  const showAnswer = () => {
    console.log(firstValue + "first-value");
    console.log(secondValue + "second-value");
    console.log(operator + " operator ");

    if (operator === "add") {
      const result = parseFloat(firstValue) + parseFloat(secondValue);
      setAnswer(result);
    } else if (operator === "subtract") {
      const result = parseFloat(firstValue) - parseFloat(secondValue);
      setAnswer(result);
    } else if (operator === "divide") {
      const result = parseFloat(firstValue) / parseFloat(secondValue);
      setAnswer(result);
    } else if (operator === "multiply") {
      const result = parseFloat(firstValue) * parseFloat(secondValue);
      setAnswer(result);
    }
    setStage("answer");
  };

  return (
    <div className={`background ${theme}`}>
      <div className="App">
        <div className="top-bar flex">
          <p className={`logo ${theme}`}>calc</p>
          <div className="theme-toggler flex">
            <p className={`theme-text ${theme}`}>theme</p>
            <div>
              <div className="theme-numbers flex">
                <p
                  className={`theme-number ${theme}`}
                  onClick={() => {
                    setTheme("theme-one");
                  }}
                >
                  1
                </p>
                <p
                  className={`theme-number ${theme}`}
                  onClick={() => {
                    setTheme("theme-two");
                  }}
                >
                  2
                </p>
                <p
                  className={`theme-number ${theme}`}
                  onClick={() => {
                    setTheme("theme-three");
                  }}
                >
                  3
                </p>
              </div>
              <div className="active-theme-screen flex">
                <div
                  className={`${theme}`}
                  onClick={() => {
                    setTheme("theme-one");
                  }}
                />
                <div
                  className={`${theme}`}
                  onClick={() => {
                    setTheme("theme-two");
                  }}
                />
                <div
                  className={`${theme}`}
                  onClick={() => {
                    setTheme("theme-three");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Screen
          value={value}
          state={stage}
          firstValue={firstValue}
          answer={answer}
          theme={theme}
        />
        <KeyPad
          setValue={setValue}
          calculate={calculate}
          showAnswer={showAnswer}
          setSecondValue={setSecondValue}
          setStage={setStage}
          setOperator={setOperator}
          setAnswer={setAnswer}
          theme={theme}
        />
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AmohPrince">
            Amoh Prince
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
