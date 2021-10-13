import React from "react"

import { Button, Container } from 'react-bootstrap';
import './MainTop.css';





function MainTop() {



    return (
        <div >
            <section className="Banner">
                <Container>
                    <div className="banner_left">
                        <div className="banner_tittle">
                            <h1>Lucrari din otel Inoxidabil pur</h1>
                        </div>
                        <div className="banner_container">
                            <p >Campania Rinox.md va propune sa vedeti lucrarile noastre din otel inoxidabil pur.</p>

                            <p>Toate aceste lucrari pot fi ale tale,
                                trebuie doar sa ne scrii despre dorintele tale si vom fi bucurosi
                                sa cream orice lucrare pentru tine.</p>
                        </div>
                        <div className="banner_btn">
                            <Button variant="primary">Comanda Acum</Button>{' '}
                        </div>

                    </div>
                </Container>

            </section>





        </div >
    );
}

export default MainTop;
