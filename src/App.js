import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Portofoliu from "./components/Portofoliu/Portofoliu";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>




          <Route path="/Portofoliu" component={Portofoliu} >
            <Portofoliu />
          </Route>

          <Route path="/" component={Main} >
            <Main />
          </Route>

        </Switch>


        <Footer />



      </div>
    </BrowserRouter>
  );
}

export default App;
