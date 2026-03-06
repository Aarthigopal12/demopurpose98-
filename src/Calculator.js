import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // ✅ Check if current input is odd
  const checkOdd = () => {
    try {
      const value = evaluate(input);
      if (Number.isInteger(value)) {
        setInput(value % 2 !== 0 ? "Odd" : "Not Odd");
      } else {
        setInput("Not an integer");
      }
    } catch {
      setInput("Error");
    }
  };

  // ✅ Check if current input is even
  const checkEven = () => {
    try {
      const value = evaluate(input);
      if (Number.isInteger(value)) {
        setInput(value % 2 === 0 ? "Even" : "Not Even");
      } else {
        setInput("Not an integer");
      }
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={calculateResult}>=</button>

        {/* Number buttons */}
        {[1,2,3,4,5,6,7,8,9,0].map(num => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}

        {/* New Odd/Even buttons */}
        <button onClick={checkOdd}>Odd?</button>
        <button onClick={checkEven}>Even?</button>
      </div>
    </div>
  );
}

export default Calculator;
