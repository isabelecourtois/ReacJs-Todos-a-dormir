import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/Context'
import { Link } from 'react-router-dom';
import Papelera from "../../images/papelera.png";

const Cart = () => {
  const { cart, borrarProducto, clear, cartPrecioTotal } = useContext(CartContext)

  return (
    <div>
      <h2> Tu carrito </h2>
      <br />
      {cart.map((producto) => (
        <div key={producto.id}>
          <h3> {producto.title} </h3>
          <button type="button" className="btn fondo_naranja position-relative me-1" title="Borrar" onClick={() => borrarProducto(producto.id)}>Borrar Producto</button>
        </div>

      )
      )}
      <h3><b>Total = ${cartPrecioTotal()}</b></h3> 
      <Link to="/checkout">Checkout</Link>
      <br />
      <button type="button" className="btn fondo_naranja position-relative me-1" title="Vaciar Carrito" onClick={() => { clear() }}>
        <img src={Papelera} width="20" alt="Papelera" />
      
      </button>
    </div>
  )
}

export default Cart