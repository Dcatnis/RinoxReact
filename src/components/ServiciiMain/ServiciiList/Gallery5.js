import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';
import MyVerticallyCenteredModal from "../../Modal/Modal"


function Gallery5() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>
            <div className="gallery1">

                <Container>
                    <div class="gallery1-container">

                        <h2 class="gallery-tittle">Chiuvete, mese, rafturi din oțel inoxidabil</h2>
                        <div className="gallery-content-flex">

                            <div class="about-gallery-container">
                                <h3 class="gallery-subtittle">Scări, balustrade și balustrade din oțel inoxidabil
                                </h3>

                                <div class="about-gallery-content">

                                    <p> Scările, balustradele și gardurile publice din oțel inoxidabil sunt suporturi fiabile și durabile care îndeplinesc cerințele estetice

                                    </p>

                                    <li>SCARI, SINE ȘI GRADURI

                                    </li>
                                    <li>-Scari si structuri de scari</li>
                                    <li>-Sinele
                                    </li>
                                    <li>- Feronerie pentru balustrade și scări

                                    </li>
                                    <li>-Garduri de orice configurație

                                    </li>
                                    <li>-Componente pentru garduri

                                    </li>
                                    <li>-Tevi


                                    </li>

                                    <li>-Support balustrade

                                    </li>
                                    <li>- Mașini de tocat

                                    </li>
                                </div>
                                <button class="gallery-btn" onClick={() => setModalShow(true)}>Comanda Acum</button>
                            </div>
                            <div class="gallery-main-image">
                                <img src="./images/gallerymain5.png" alt="galery" />
                            </div>
                        </div>

                        <div class="gallery-images-container">

                            <div class="gallery-image-item">
                                <img src="./images/gallery5img1.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery5img2.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery5img3.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery5img4.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery5img5.png" alt="galery" />
                            </div>
                        </div>



                    </div>



                </Container >
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </BrowserRouter >
    );
}

export default Gallery5;