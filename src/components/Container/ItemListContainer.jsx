import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
/* import { products } from "../Productos/products"; */
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));

            }
        });
    }, [id]);


/* const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { tipo } = useParams();
 

    useEffect(() => {


        let categoria = "";

        if (tipo === "curso") {
            categoria = "curso";
        } else if (tipo === "consulta") {
            categoria = "consulta";
        } else {
            categoria = "all";
        }
        console.log(categoria);

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });


        getProducts.then((res) => {
            if (categoria === "all") {
                setItems(res);

            } else {

                const array_productos = res.filter(product => product.category === categoria);
                setItems(array_productos);
            }
        });

    }, [tipo]); */

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}



export default ItemListContainer;