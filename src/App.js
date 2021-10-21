import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Portofoliu from "./components/Portofoliu/Portofoliu";
import Main from "./components/Main/Main";
import DespreNoi from "./components/DespreNoi/DespreNoi"
import Contacte from "./components/Contacte/Contacte"
import ServiciiMain from "./components/ServiciiMain/ServiciiMain";
import Detalii from "./components/Portofoliu/Detalii/Detalii"
import PortofoliuMain from "./components/Portofoliu/PortofoliuMain/PortofoliuMain";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>




          <Route path="/Detalii" component={Detalii} >

          </Route>

          <Route path="/ServiciiMain" component={ServiciiMain} >

          </Route>

          <Route path="/Contacte" component={Contacte} >

          </Route>

          <Route path="/DespreNoi" component={DespreNoi} >

          </Route>

          <Route path="/Portofoliu" component={Portofoliu} >

          </Route>

          <Route path="/" component={Main} >


          </Route>



        </Switch>


        <Footer />



      </div>
    </Router >
  );
}

export default App;
