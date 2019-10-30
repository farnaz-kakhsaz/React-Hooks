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
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponetC";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounerOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value="farnaz">
        <ChannelContext.Provider value="kakhsaz">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
