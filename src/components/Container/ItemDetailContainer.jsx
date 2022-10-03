import React, { useEffect, useState } from "react";
import ItemDetail from '../Item/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const respuesta = doc(db, "productos", id);
        getDoc(respuesta).then((resp) => {
            if (resp.exists()) {
                setItem({
                    id:resp.id, 
                    ...resp.data(),
                });
            }            
        });
    }, [id]);
    

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
