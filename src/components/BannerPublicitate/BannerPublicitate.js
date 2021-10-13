import React from "react"
import { Container, Button } from 'react-bootstrap'
import './BannerPublicitate.css';





function Avantaje() {

    return (
        <div >
            <section className="Banner_public">
                <Container>
                    <div className="banner_flex">
                        <h2 className="banner_tittle">Nu ezita! Comanda si beneficiaza de toata gama noastra de servicii</h2>

                        <div className="banbtn">
                            <Button variant="primary banerbtn">Comanda Acum</Button>{' '}
                        </div>
                    </div>
                </Container>


            </section>





        </div >
    );
}

export default Avantaje;