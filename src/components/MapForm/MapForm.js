import React from "react"

import './MapForm.css';
import Forma from "./myForm/myForm"




function MapForm() {

    return (
        <div >
            <section className="MapForm">
                <div className="Map">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1EA_MvLnOg-I85nNJ1hhj2Zxsxku_5ali" width="100%" height="525" allowTransparency></iframe>

                    <div className="Formular">
                        <Forma />
                    </div>
                </div>





            </section>





        </div >
    );
}

export default MapForm;