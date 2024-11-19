import React from "react";
import Foto from "./img/MiFoto.jpeg"
import './AboutMe.css'

function AboutMe(){
    return(
        <div className="AboutMe" id="AboutMe">
            <div className="AboutMe-Header">
                <img src={Foto} alt="Carlos Molina" className="AboutMe-Img"></img>
                <div>
                <h1 className="AboutMe-Title">Carlos Molina</h1>
                <h2 className="AboutMe-Sub">Desarrollador de software y videojuegos</h2>
                </div>
            </div>
            <div className="AboutMe-Header">
                <p className="AboutMe-Text">
                Soy un apasionado de la tecnología con una curiosidad insaciable por aprender y explorar nuevas herramientas y tendencias. 
                Desde una edad temprana, he estado fascinado por cómo la tecnología puede transformar la vida cotidiana y resolver problemas complejos. 
                Mi experiencia abarca desarrollo web enfocado en el Front-End y en el desarrollo de videojuegos 
                y siempre busco ampliar mis conocimientos a través de cursos, proyectos personales y colaboraciones.

                Mi enfoque se centra en la innovación y la mejora continua, y me entusiasma la idea de contribuir a proyectos que hagan un impacto positivo. 
                Estoy emocionado por seguir aprendiendo y creciendo en este campo en constante evolución.
                    
                </p>
            </div>
        </div>
    );
}

export default AboutMe