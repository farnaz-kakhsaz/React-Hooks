import React from "react";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounerOne from "./components/HookCounterOne";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import IntervalClassCounter from "./components/IntervalClassCounter";

function App() {
  return (
    <div className="App">
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounerOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
