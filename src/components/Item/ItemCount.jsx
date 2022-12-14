import React from "react";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
   /*  const [itemAdd, setItemAdd] = useState(onAdd); */

    const restarProducto = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const sumarProducto = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarProductos = () => {
        if (cantidad <= itemStock) {
            onAdd(cantidad); //Acá utilizo la función que estoy pasando vía Props, solamente le paso la cantidad de Items de Productos que voy a agregar
            setItemStock(itemStock - cantidad);
            setCantidad(itemStock - cantidad);
        }
    }

    useEffect(() => { 
        setItemStock(stock);
    }, [stock]);


    return (
        <div className="row">
            <div className="col-md-6 offset-md-3"style={{fontWeight:'bold',color:'grey'}}>
                <p><input type="button" className="btn rounded-circle" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} value="-" onClick={() => {restarProducto(cantidad - 1)}} /> {cantidad} <input type="button" className="btn rounded-circle" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} value="+" onClick={() => {sumarProducto(cantidad + 1)}} /></p>
                <p><input type="button" className="btn btn-lg mx-1" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} value="Agregar" onClick={() => {agregarProductos()}} /></p>
            </div>        
        </div>
    )
};

export default ItemCount;