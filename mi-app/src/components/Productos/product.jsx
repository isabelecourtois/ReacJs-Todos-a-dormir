import React from "react";
import {Link} from "react-router-dom";

const Producto = ({item}) => {
    return (
        <div className="card">
            <Link to={"/producto/" + item.id}><img src={item.image} className="card-img-top" alt={item.title} /></Link>
            <div className="card-body text-center">
                <h5 className="card-title text-center">{item.title}</h5>
                <p className="card-text text-center"><b>${item.price}</b></p>
                <Link to={"/producto/" + item.id} className="btn btn-primary">Ver Más</Link>
            </div>
        </div>
    )
}

export default Producto;