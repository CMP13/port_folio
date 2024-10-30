import React from "react";
import './SideBar.css';

function SideBar() {
    return (
        <nav id="sidebar">
            <div className="barnav">
                <ul>
                    <li>
                        <a href="">
                            <span>Sobre mi</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Mis proyectos</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Mis puntos fuertes</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar