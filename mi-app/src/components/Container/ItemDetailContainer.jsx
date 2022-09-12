import React, {useEffect, useState} from "react";
import ItemDetail from '../Item/ItemDetail';
import { products } from '../Productos/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
