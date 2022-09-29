import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (

        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-3 py-3">
                    <Item nombre={item.title} imagen={"../images/" + item.img } descripcion={item.description} />
                    <Link to={"/cursos/" + item.id} className="btn btn-primary">Ver Más</Link>
                </div>)
            )}
        </div>
    )
}

export default ItemList;