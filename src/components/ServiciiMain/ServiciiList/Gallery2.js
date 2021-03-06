import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';
import MyVerticallyCenteredModal from "../../Modal/Modal"


function Gallery2() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>
            <div className="gallery2">

                <Container>
                    <div class="gallery1-container">

                        <h2 class="gallery-tittle">Productia de panouri metalice decorative</h2>
                        <div className="gallery-content-flex">

                            <div class="about-gallery-container gallery2-container">


                                <div class="about-gallery-content gallery2-flex">
                                    <div class="about-gallery-content-list1">

                                        <li>Panouri și ecrane</li>
                                        <li> Panou pe perete</li>
                                        <li>Balustrade și gardur</li>
                                        <li> Decor de perete</li>
                                        <li>Articole de interior</li>
                                        <li> Portițe și uși </li>
                                        <li> Garduri secționale</li>
                                        <li> Cuierele și deținătorii de chei</li>
                                        <li> Poarta artistică</li>
                                        <li>  Grile radiatoare</li>
                                        <li>Grile pentru ferestre</li>
                                        <li>  Decor de grădină</li>
                                        <li>  Suporturi pentru flori</li>
                                    </div>
                                    <div class="about-gallery-content-list2">

                                        <li>Panouri și ecrane</li>
                                        <li> Panou pe perete</li>
                                        <li>Balustrade și gardur</li>
                                        <li> Decor de perete</li>
                                        <li>Articole de interior</li>
                                        <li> Portițe și uși </li>
                                        <li> Garduri secționale</li>
                                        <li> Cuierele și deținătorii de chei</li>
                                        <li> Poarta artistică</li>
                                        <li>  Grile radiatoare</li>
                                        <li>Grile pentru ferestre</li>
                                        <li>  Decor de grădină</li>
                                        <li>  Suporturi pentru flori</li>
                                    </div>
                                </div>
                                <button class="gallery-btn" onClick={() => setModalShow(true)}>Comanda Acum</button>
                            </div>
                            <div class="gallery-main-image gallery2-img">
                                <img src="./images/gallerymain2.png" alt="galery" />
                            </div>
                        </div>

                        <div class="gallery-images-container">

                            <div class="gallery-image-item gallery2-img-item">
                                <img src="./images/gallery2img1.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item gallery2-img-item ">
                                <img src="./images/gallery2img2.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item gallery2-img-item ">
                                <img src="./images/gallery2img3.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item gallery2-img-item  ">
                                <img src="./images/gallery2img4.png" alt="galery" />
                            </div>
                            <div class="gallery-image-item gallery2-img-item ">
                                <img src="./images/gallery2img5.png" alt="galery" />
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

export default Gallery2;