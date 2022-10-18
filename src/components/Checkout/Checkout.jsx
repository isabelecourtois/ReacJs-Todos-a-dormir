import React from 'react';
import { useState } from 'react';
import Form from './Form';

const Checkout = () => {

    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (

            <div className="container py-5">
                <header className="text-center mb-5">
                    <h1 className="rfs-25" style={{ color: '#80CECC' }}>Gracias por tu compra</h1>
                    <h3 className="font-italic text-muted my-5">Te dejamos el número de seguimiento:</h3>
                    <p className="font-italic text-muted mb-0">{' '}
                    {orderId}</p>
                </header>
            </div>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;
