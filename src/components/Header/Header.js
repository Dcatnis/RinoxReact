import React from "react"
import { Container, Row, Col, Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";


import './Header.css';

function Header() {



    return (
        <div >

            <header>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <Navbar.Brand href="#home">
                                <img
                                    src="./logo.png"
                                    width="209"
                                    height="55"
                                    className="d-inline-block align-top"
                                    alt=" logo"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col sm={10} >
                            <Nav className="justify-content-end desktop " activeKey="/home">
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/"> Principala </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/Portofoliu"> Portofoliu </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/DespreNoi"> Despre Noi </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/Detalii"> Servicii </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="Contacte"> Contacte </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/"> RO/RU </Link></Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <div className="mobile">
                                <div className="mob-lang">
                                    RU/RO

                                </div>
                                <div >

                                    <img
                                        src="../images/burger.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt=" logo"
                                    />
                                </div>
                            </div>

                        </Col>

                    </Row>

                </Container>


            </header>




        </div >
    );
}

export default Header;
