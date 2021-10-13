import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Gallery.css';





function Gallery() {

    return (
        <div >
            <section className="Gallery">
                <Container>
                    <div className="gallery_about">
                        <h2> Exemple de lucrari terminate</h2>
                        <p>Compania noastră se ocupă cu tăierea metalelor profilate.
                            Tăierea cu laser a metalului până la 10 mm. Echipament modern, efectuarea  lucrărilor în termen scurt.
                            Tăierea produselor de orice complexitate geometrică.
                            Lucrăm cu material de tablă cu dimensiuni pînă la 3000x1500.
                            Abordare individuală a fiecărui client.</p>
                    </div>


                    <Row >
                        <Col xs={6} md={4} >
                            <Image src="./logo.png" thumbnail />
                        </Col>

                        <Col xs={6} md={4}>
                            <Image src="../images/galery1.png" thumbnail />
                        </Col>

                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="../images/galery1.png" thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="./logo.png" thumbnail />
                        </Col>
                    </Row>


                </Container>


            </section>





        </div >
    );
}

export default Gallery;