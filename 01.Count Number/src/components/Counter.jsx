import { useState } from "react";
import "../style.css";

function Counter() {
  const [count, setCount] = useState(0);

  // Event Handler functions
  const handleIncrement = () => {
    if (count >= 0) setCount((previousCount) => previousCount + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((previousCount) => previousCount - 1);
    }
  };

  return (
    <>
      <h1>Count Number</h1>
      <div className="container">
        <div>
          <h1 className="number">{count}</h1>
        </div>

        {/* buttons container */}
        <div className="btns-container">
          <button onClick={handleIncrement} className="increment">
            +
          </button>
          <button onClick={handleDecrement} className="increment">
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
