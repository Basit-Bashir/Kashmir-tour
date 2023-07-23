import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Pricing from "./components/Main/Plans";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Main />
      </div>
      <div id="plans">
        <Pricing />
      </div>
    </div>
  );
}

export default App;
