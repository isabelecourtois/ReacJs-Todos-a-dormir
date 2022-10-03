import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const {categoryName} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const queryItems = categoryName 
        ? query(itemsCollection, where("category", "==", categoryName)) 
        : itemsCollection;

        getDocs(queryItems).then((response) => {
            const products = response.docs.map((prod) =>{
                console.log(prod);
                return{
                    id:prod.id,
                    ...prod.data(),
                };
            });
            console.log(products);
            setItems (products);
        });
    }, [categoryName]);


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}



export default ItemListContainer;