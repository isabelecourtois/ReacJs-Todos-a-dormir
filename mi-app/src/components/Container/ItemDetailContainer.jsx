import React, { useEffect, useState } from "react";
import ItemDetail from '../Item/ItemDetail';
import { products } from '../Productos/products';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProduct = (id) =>
            new Promise((res, rej) => {
                const product = products.find((prod => prod.id === id));
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct(id).then(info => {
            setItem(info)
        })
    }, [id]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
