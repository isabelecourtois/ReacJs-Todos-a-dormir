import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useState, useContext } from "react";
import { CartContext } from '../Context/Context'

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const { cartPrecioTotal, cart } = useContext(CartContext );
    const total = cartPrecioTotal();
    console.log(total);

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono },
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

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={handleNombre}
                required
            />
            <input
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={handleTelefono}
            />
            <button>Enviar</button>
        </form>
    );
};

export default Form;
