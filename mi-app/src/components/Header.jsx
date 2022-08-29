import React from "react";
import logo from "../images/logo2.jpg";

const Header = () => {
    return (
        <nav class="navbar navbar-default" role="navigation">
            <div className="container">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="90" alt="Todos a dormir" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Consultas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Quién soy yo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;