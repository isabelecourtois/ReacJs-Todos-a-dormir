import React, { useEffect, useState }  from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import logo from "../../images/logo2.jpg";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";


const Header = () => {
    const db = getFirestore();
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const categoryColecction = collection(db, 'categories');

        getDocs(categoryColecction).then((resp) => {
            const categorias = resp.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCat(categorias);
        });
    }, []);

    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="90" alt="Todos a dormir" /></NavLink>
                    </li>
                    <li className="nav-item">
                    {cat.map((categoria) => (
                    <NavLink className="nav-link link_header"
                        key={categoria.id}
                        style={{ margin: '0px 8px', textDecoration: 'none', display: 'inline' }} 
                        to={`/categoria/${categoria.path}`}
                    >
                        {categoria.name}
                    </NavLink>
                ))}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link link_header" to={'/quiensoy'}>Quién soy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link link_header" to={'/blog'}>Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link link_header" to={'/contacto'}>Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to={'/carrito'}><CartWidget /></NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header;