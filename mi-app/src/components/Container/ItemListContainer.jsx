import React, { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import { products } from "../Productos/products";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        getProducts.then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

return (
    <div className="container">
        <ItemList items={items} />
    </div>
);
}

export default ItemListContainer;