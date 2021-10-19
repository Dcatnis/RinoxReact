import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Contacte.css';
import Forma from "../MapForm/myForm/myForm"



function Contacte() {
    return (
        <BrowserRouter>


            <div className="contacte">

                <div class="contacte-top">
                    <div class="contacte-img">
                        <img src="./images/contactephone.png" alt="phone" />
                    </div>
                    <div class="contacte-info">
                        <h1>Contacte</h1>
                        <p class="contacte-about">
                            Rinox.md Vă invită să vedeți lucrările noastre din oțel inoxidabil pur.
                        </p>
                        <p class="contacte-about">
                            Toate aceste lucrări pot fi ale tale,
                            trebuie doar să ne scrii despre dorințele tale și vom fi bucuroși
                            să creăm orice lucrare pentru tine.
                        </p>

                        <div class="contacte-list">
                            <li class="contacte-item phone">+373 69 331228</li>
                            <li class="contacte-item mailc">rinox.md@mail.ru</li>
                            <li class="contacte-item adress">Pietrarilor 2
                                Кишинёв, Молдавия</li>
                        </div>
                    </div>

                </div>

                <section className="Banner_contacte">
                    <Container>
                        <div className="banner_flex">
                            <h2 className="banner_tittle">Nu ezita! Comanda si beneficiaza de toata gama noastra de servicii</h2>

                            <div className="contacte-forma">
                                <Forma />

                            </div>
                        </div>
                    </Container>


                </section>

                <section className="Map-contacte">
                    <div className="MapContacte">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1EA_MvLnOg-I85nNJ1hhj2Zxsxku_5ali" width="100%" height="350" allowTransparency></iframe>


                    </div>
                </section>
            </div >
        </BrowserRouter >
    );
}

export default Contacte;