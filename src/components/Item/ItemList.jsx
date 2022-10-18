import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
<div className="container py-5">
<header className="text-center mb-5">
<h1 className="rfs-25" style={{ color: '#80CECC' }}>Nuestras soluciones</h1>
    <p className="font-italic text-muted mb-0">Las hemos creado en Todos a Dormir para el descanso tuyo y de tu bebé.</p>
  </header>
  
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-xl-3 col-md-6 mb-4">
                    <div className="lc-block bg-white rounded shadow" >
                    <Item nombre={item.title} imagen={"../images/" + item.img } descripcion={item.description} />   
                    </div>
                    <div className="container mt-2" style={{textAlign:'center'}}>
                    <Link to={"/cursos/" + item.id} className="btn btn-block" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC', textAlign:'center'}}>Ver Más</Link>
                    </div>
                </div>)
            )}
        </div>
        </div>
    )
}

export default ItemList;