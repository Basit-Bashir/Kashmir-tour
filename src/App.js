import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
