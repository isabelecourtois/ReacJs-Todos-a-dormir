import React from 'react';
import ItemCount from '../Item/ItemCount';


const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>

                </div>
                <ItemCount stock={10} initial={1} onAdd={0} />
            </div>
        </div>

    )
}

export default ItemDetail;
