import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
}
