import React from "react"
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />




      </div>
    </BrowserRouter>
  );
}

export default App;
