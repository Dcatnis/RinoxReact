import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './Portofoliu.css';
import Detalii from "./Detalii/Detalii";
import PortofoliuMain from "./PortofoliuMain/PortofoliuMain"

function Portofoliu() {
    return (
        <BrowserRouter>
            <div>
                <Switch>


                    <Route exact path="/Detalii" component={Detalii} >
                        <Detalii />
                    </Route>

                    <Route path="/" component={PortofoliuMain} >
                        <PortofoliuMain />
                    </Route>

                </Switch>


                <Link to="/Detalii"> Detalii Proiect </Link>

            </div>
        </BrowserRouter >
    );
}

export default Portofoliu;