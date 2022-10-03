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
            <h3>
                Gracias por tu compra, te dejamos el número de seguimiento:{' '}
                {orderId}
            </h3>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;
