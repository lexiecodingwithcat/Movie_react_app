import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  //never change state manually, it can only be changed by its own setter function
  const [counter, setCounter] = useState(0);
  //execute side effect when the component renders
  //side effect: functions which is irrelevant with component render and state
  //useEffect(callback function, dependency array)
  //dependency array decides whento triger the side effect
  useEffect(() => {
    alert("you changed the counter to" + counter);
  }, [counter]);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
