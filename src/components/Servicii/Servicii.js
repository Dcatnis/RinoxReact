import React from "react"
import { Container } from 'react-bootstrap'
import './Servicii.css';





function Servicii() {



    return (
        <div >
            <section className="Servicii">
                <Container>
                    <div class="service_tittle">
                        <h2>Serviciile Noastre</h2>
                    </div>
                </Container>
                <div class="service_container">
                    <div class="service_img">
                        <h2>Serviciile Noastre</h2>
                    </div>
                    <div class="service_list">
                        <ul>
                            <li>Sudare</li>
                            <li>Taierea Plasticului</li>
                            <li>Taierea Metalelor</li>
                            <li>Vopsirea</li>
                            <li>Taierea Metalelor</li>
                            <li>Indoierea metalelot</li>
                        </ul>
                    </div>
                </div>



            </section>





        </div >
    );
}

export default Servicii;