import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Pricing from "./components/Main/Plans";
import Places from "./components/Main/Places";
import PhotoGallery from "./components/Main/PhotoGallery";
import InquiryForm from "./components/Footer/Contact";
import Footer from "./components/Footer/Footer";

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
      <div id="gallery">
        <PhotoGallery />
      </div>
      <div id="contact">
        <InquiryForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
