import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/Context";
import Carrito from "../../images/carrito.png";
import Papelera from "../../images/papelera.png";

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext); 

    return (
        <div>
            <button type="button" className="btn fondo_naranja position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={Papelera} width="20" alt="Papelera" />
            </button>
            <Link to={"/carrito"}>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={Carrito} width="30" alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;