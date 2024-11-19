import React from "react";
import './SideBar.css';

function SideBar() {
    return (
        <nav id="sidebar">
            <div className="barnav">
                <ul>
                    <li>
                        <a href="#AboutMe">
                            <span>Sobre mi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Projects">
                            <span>Mis proyectos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Tecno">
                            <span>Mis puntos fuertes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Study">
                            <span>Estudios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Contact">
                            <span>Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar