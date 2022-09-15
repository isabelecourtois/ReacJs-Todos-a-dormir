import React from "react";
import logo from "../../images/logo2.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="90" alt="Todos a dormir" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link_header" to={"/categoria/curso"}>Cursos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link_header" to={"/categoria/consulta"}>Consultas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link_header" to={'/quiensoy'}>Quién soy yo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link_header" to={'/blog'}>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link_header" to={'/contacto'}>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/carrito'}><CartWidget /></Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header;