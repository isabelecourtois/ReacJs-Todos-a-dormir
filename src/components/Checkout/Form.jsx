import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from "react";
import { CartContext } from '../Context/Context'

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const { cartPrecioTotal, cart } = useContext(CartContext);
    const total = cartPrecioTotal();
    console.log(total);

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, apellido, telefono },
            date: serverTimestamp(),
            cart,
            total
        };
        const db = getFirestore();
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);
    const handleApellido = (e) => setApellido(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        
            <div className="col-md-4 container bg-default">

                <h1 className="my-4"style={{ color: '#80CECC' }}>
                    RECIBO DE COMPRA
                </h1>

                <form action="" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-6 form-group">
                            <label for="firstname">Nombre</label>
                            <input type="text"
                                name="nombre"
                                placeholder="Nombre Completo"
                                value={nombre}
                                onChange={handleNombre}
                                required
                                className="form-control" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="lastname">Last Name</label>
                            <input type="text" cname="nombre"
                                placeholder="Nombre Completo"
                                value={apellido}
                                onChange={handleApellido}
                                required
                                className="form-control" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                    <label for="phone">Teléfono</label>
                            <input type="number" cname="telefono"
                                placeholder="Teléfono"
                                value={telefono}
                                onChange={handleTelefono}
                                required
                                className="form-control" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>

                    </div> 

                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="tu@ejemplo.com" required />
                    </div>

                    <div className="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" className="form-control" id="direccion" placeholder="Tu dirección 1234" required />
                        <div className="invalid-feedback">
                            Olvidaste poner tu dirección.
                        </div>
                    </div>

                    <hr></hr>


                    <h4 className="mb-4">Información de Pago</h4>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} id="tarjeta" name="payment-method" checked required />
                        <label for="tarjeta" className="form-check-label">Tarjeta</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} id="paypal" name="payment-method" required />
                        <label for="paypal" className="form-check-label">PayPal</label>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 form-group">
                            <label for="card-name">Nombre en la tarjeta</label>
                            <input type="text" className="form-control" id="card-name" placeholder required />
                            <div className="invalid-feedback">
                                Olvidaste poner el nombre
                            </div>
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="card-no">Númer de tarjeta</label>
                            <input type="text" className="form-control" id="card-no" placeholder required />
                            <div className="invalid-feedback">
                                Olvidaste poner el número de tarjeta
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-5 form-group">
                            <label for="expiration">Fecha de expiración</label>
                            <input type="text" className="form-control" id="card-name" placeholder required />
                            <div className="invalid-feedback">
                                Olvidaste poner la fecha
                            </div>
                        </div>


                        <div className="col-md-5 form-group">
                            <label for="ccv-no">CVV</label>
                            <input type="text" className="form-control" id="sec-no" placeholder required />
                            <div className="invalid-feedback">
                                Olvidaste poner el CVV
                            </div>
                        </div>
                    </div>

                    <hr className="mb-4" />

                    <button classNameName="btn btn-lg mx-1" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} type="submit">Enviar</button>
                </form>
            </div>
    );
};

export default Form;
