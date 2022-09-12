import React from 'react';
import ItemCount from '../Item/ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <img src={item.img} alt={item.title} />
            <div>
                <h2>{item.title}</h2>
                <p> {item.description} </p>
                <h3>${item.price}.00</h3>

                <ItemCount stock={200} initial={1} onAdd={0} />
            </div>
        </div>
    );
};

export default ItemDetail;
