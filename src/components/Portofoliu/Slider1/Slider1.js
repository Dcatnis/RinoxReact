import React, { useState } from "react"
import { Container, Carousel, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Slider.css';


function Slider1() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Container>
            <div className="slider">
                <div class="slider_tittle">
                    <h1>Tăierea cu laser a metalului până la 10 mm.</h1>
                </div>
                <div class="slider_flex">
                    <div class="slider_content">
                        <div class="slider_description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reiciendis.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita, culpa commodi exercitationem
                                quia velit earum recusandae reprehenderit minus.
                                Neque, dolore?</p>


                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Alias fuga cupiditate nesciunt amet expedita magnam!
                                Ipsam voluptates odit esse! Iste,
                                totam ut modi aspernatur ipsum ipsam natus ad qui repudiandae!</p>

                        </div>

                        <div class="slider_detalii">
                            Detalii despre servicii
                            <img src="./images/arrowicon.png" alt="arrow" />
                        </div>


                    </div>

                    <div class="slider_main">
                        <div className="DetaliiArrow">
                            <div className="bgarrow">
                                <img src="./images/bgarrow.svg" alt="arrow" />
                            </div>
                            <Link to="/Detalii"> Detalii Proiect </Link>
                        </div>
                        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./images/slider1.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./images/slider2.png"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>



                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./images/slider3.png"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>



                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./images/slider4.png"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>



                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./images/slider5.png"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>



                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>







            </div>
        </Container>

    );
}

export default Slider1;