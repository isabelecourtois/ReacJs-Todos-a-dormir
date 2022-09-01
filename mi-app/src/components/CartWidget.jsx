import React from "react";
import Carrito from "../images/carrito.png";

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} width="30" alt="Carrito" />
        </div>
    )
}

export default CartWidget;