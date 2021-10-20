import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';
import MyVerticallyCenteredModal from "../../Modal/Modal"

function Gallery4() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>
            <div className="gallery4">

                <Container>
                    <div class="gallery1-container">

                        <h2 class="gallery-tittle">Perforarea tevii pe o masină laser</h2>
                        <div className="gallery-content-flex">

                            <div class="about-gallery-container">


                                <div class="about-gallery-content">

                                    <p> Rinox oferă servicii de tăiere cu laser pentru următoarele metale: oțel negru, oțel inoxidabil

                                        Îndoirea tablelor: grosime 0,4 - 4 mm, lungime 3 metri
                                    </p>

                                    <li>Taietura cu laser
                                    </li>
                                    <li>- material pentru foaie,</li>
                                    <li>-pipe,</li>
                                    <li>- profile de secțiune pătrată și dreptunghiulară
                                    </li>
                                    <li>- metal feros (grosimea metalului de la 0,5 la 10 mm),
                                    </li>
                                    <li>- oțel inoxidabil (grosime de la 0,5 la 5 mm)

                                    </li>
                                    <li>-Diametrul țevii de la 20 mm la 200 mm, cu o grosime a peretelui de până la 5 mm.

                                    </li>

                                    <li>-Profil de la 20x20 mm la 140x140 mm
                                    </li>
                                </div>
                                <button class="gallery-btn" onClick={() => setModalShow(true)}>Comanda Acum</button>
                            </div>
                            <div class="gallery-main-image">
                                <img src="./images/gallerymain4.png" alt="galery" />
                            </div>
                        </div>

                        <div class="gallery-images-container">

                            <div class="gallery-image-item">
                                <img src="./images/gallery4img1.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery4img2.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery4img3.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery4img4.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery4img5.png" alt="galery" />
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

export default Gallery4;