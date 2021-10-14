import React from "react"
import { Container, Nav, Col, Row, } from 'react-bootstrap'
import './Footer.css';
import { Link } from "react-router-dom";





function Footer() {

    return (
        <div >
            <section className="Footer">

                <Container>
                    <div class="footer_nav">
                        <Row>
                            <Col sm={10} >
                                <Nav className="justify-content-end desktop " activeKey="/home">
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> Principala </Link></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> Portofoliu </Link></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> Despre Noi </Link></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> Servicii </Link></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> Contacte </Link></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link> <Link className="nav_links" to="/"> RO/RU </Link></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </div>
                </Container>




            </section>





        </div >
    );
}

export default Footer;