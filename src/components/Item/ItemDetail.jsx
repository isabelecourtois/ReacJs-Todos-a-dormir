import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../Item/ItemCount';
import {CartContext} from "../Context/Context";


const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {//En el Desafío de Eventos había que crear esta función donde solamente iba a recibir la cantidad de Items. No hace falta pasar por parámetro el Item, porque ya está ese valor en este Componente!
        setCounter(counter); //Cuando se agrega un nuevo Producto, se actualiza el Contador para que desaparezca el ItemCounter y aparezca el botón "Ir Al Carrito"
        addItem(item, counter);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={"../images/" + item.img } className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-4">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/carrito"} className="btn fondo_naranja">Ir al Carrito</Link>}

                </div>
            </div>
        </div>

    )
}

export default ItemDetail;
