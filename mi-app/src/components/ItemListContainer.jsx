import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import bebe1 from "../images/bebe1.jpg";
import bebe2 from "../images/bebe2.jpg";
import bebe3 from "../images/bebe3.jpg";
import bebe4 from "../images/bebe4.jpg";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);



    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Hábitos Saludables (0-5 meses)", "descripcion":"Crea hábitos de sueño saludables para tu bebé y vuelve a dormir como antes.", "imagen":bebe1},
            {"id":2, "nombre":"Regresión de los 4 meses (3-4 meses)", "descripcion":"Recupera el avance que llevabas con el sueño de tu bebé para que vuelva a dormir como antes.", "imagen":bebe2},
            {"id":3, "nombre":"Durmiendo toda la Noche (5-18 meses)", "descripcion":"14 días para que tu bebé logre dormir hasta 12 horas decorrido por las noches.", "imagen":bebe3},
            {"id":4, "nombre":"Planes de Sueño Personalizados (5meses-6años)", "descripcion":"Diseñamos el plan perfecto para que tu bebé y tu duerman toda la noche.", "imagen":bebe4},
            {"id":5, "nombre":"Bye Bye Madrugadores (5+ meses)", "descripcion":"Corrige los despertares de tu bebé y evita que madrugue más que tú.", "imagen":bebe1}


        ];

        console.log (productos.map (item => item.imagen));

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;