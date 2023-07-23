import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Pricing from "./components/Main/Plans";
import Places from "./components/Main/Places";
import PhotoGallery from "./components/Main/PhotoGallery";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Main />
      </div>
      <div id="places">
        <Places />
      </div>
      <div id="plans">
        <Pricing />
      </div>
      <div id="plans">
        <PhotoGallery />
      </div>
    </div>
  );
}

export default App;
