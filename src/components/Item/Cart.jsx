import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/Context'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, borrarProducto, clear, cartPrecioTotal, cartTotal } = useContext(CartContext)

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="rfs-25" style={{ color: '#80CECC' }}>Nuestras soluciones</h1>
        <p className="font-italic text-muted mb-0">Las hemos creado en Todos a Dormir para el descanso tuyo y de tu bebé.</p>
      </header>
      <div className="container py-5">
        {cart.map((producto) => (
          <div key={producto.id} className="row position-relative">
            <div className="col-lg-12 text-center" >
              <div className="card-body col-lg-12" style={{ backgroundColor: '#F3FAFA' }} >
                <div className="lc-block mb-5 col-xl-12 mx-auto">
                  <div editable="rich">
                    <h5> {producto.title} </h5>
                    <button type="button" className="btn btn-s my-2" style={{ fontWeight: 'bold', color: 'grey', backgroundColor: '#E2E2E2' }} title="Borrar" onClick={() => borrarProducto(producto.id)}>Eliminar Producto</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </div>
      <div className="col-lg-12 text-center" >
        <div className="card-body col-lg-12" style={{ backgroundColor: '#F3FAFA' }} >
          <div className="lc-block mb-5 col-xl-12 mx-auto">
            <div editable="rich">
              <p><b>Cantidad = {cartTotal()} Cursos</b></p>
              <p><b>Total = ${cartPrecioTotal()}</b></p>
              <Link className="btn btn-lg m-2" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} to={"/checkout"} role="button">Checkout</Link>
              <button type="button" className="btn btn-lg m-2" style={{fontWeight:'bold', color: 'grey', backgroundColor:'#E2E2E2'}}title="Vaciar Carrito" onClick={() => { clear() }}> Vaciar Carrito</button>
            

              
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart