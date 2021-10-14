import React from "react"
import { BrowserRouter, Route, Link, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header"
import MainTop from "./components/MainTop/MainTop"
import Servicii from "./components/Servicii/Servicii"
import Avantaje from "./components/Avantaje/Avantaje"
import BannerPublicitate from "./components/BannerPublicitate/BannerPublicitate"
import Gallery from "./components/Gallery/Gallery"
import MapForm from "./components/MapForm/MapForm"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainTop />
        <Servicii />
        <Avantaje />
        <BannerPublicitate />
        <Gallery />
        <MapForm />
        <Footer />



      </div>
    </BrowserRouter>
  );
}

export default App;
