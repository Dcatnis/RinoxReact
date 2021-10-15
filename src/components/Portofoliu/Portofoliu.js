import React from "react"
import { BrowserRouter } from "react-router-dom";
import './Portofoliu.css';
import TopPortofoliu from "./TopPortofoliu/TopPortofoliu"
import Slider1 from "./Slider1/Slider1"

function Portofoliu() {
    return (
        <BrowserRouter>
            <div className="Portofoliu">
                <TopPortofoliu />
                <Slider1 />



            </div>
        </BrowserRouter>
    );
}

export default Portofoliu;