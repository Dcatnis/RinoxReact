import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';


function Gallery4() {
    return (
        <BrowserRouter>
            <div className="gallery1">

                <Container>
                    <div class="gallery1-container">

                        <h2 class="gallery-tittle">Chiuvete, mese, rafturi din oțel inoxidabil</h2>
                        <div className="gallery-content-flex">

                            <div class="about-gallery-container">
                                <h3 class="gallery-subtittle">Compania RINOX produce echipamente industriale:
                                </h3>

                                <div class="about-gallery-content">

                                    <li>- mese din inox;</li>
                                    <li>- rafturi, rafturi din oțel inoxidabil;</li>
                                    <li>- standuri pentru echipamente;</li>
                                    <li>- chiuvete din inox;</li>
                                    <li>- hote din inox;</li>
                                    <li>- cărucioare din oțel inoxidabil</li>
                                </div>
                                <button class="gallery-btn">Comanda Acum</button>
                            </div>
                            <div class="gallery-main-image">
                                <img src="./images/gallerymain.png" alt="galery" />
                            </div>
                        </div>

                        <div class="gallery-images-container">

                            <div class="gallery-image-item">
                                <img src="./images/gallery1img1.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery1img2.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery1img3.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery1img4.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item">
                                <img src="./images/gallery1img5.png" alt="galery" />
                            </div>
                        </div>



                    </div>



                </Container >
            </div>
        </BrowserRouter >
    );
}

export default Gallery4;