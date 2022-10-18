import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../Item/ItemCount';
import { CartContext } from "../Context/Context";


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {
        setCounter(counter); 
        addItem(item, counter);
    }

    return (
       

            <div className="container py-6" >
                <div className="row position-relative" >
                    <div className="col-lg-9 text-center" >
                        <div className="lc-block card bg-light border-0 p-lg-6" >
                            <div className="card-body col-lg-10"style={{backgroundColor:'#F3FAFA'}} >
                                <div className="lc-block mb-5 col-xl-10 mx-auto">
                                    <div editable="rich">
                                    <h2 className="h5">{item.title}</h2>
                                        
                                    </div>
                                </div>
                                <div className="lc-block">
                                    <div editable="rich">
                                    <p className="text-muted rfs-9"> {item.description} </p>
                                        <p className="text-muted lead" style={{color:'grey', fontWeight:'bolder'}}>${item.price}.00MXN</p>
                                        {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/carrito"} className="btn btn-lg mx-1a" style={{fontWeight:'bold', color: 'white', backgroundColor:'#80CECC'}} >Ir al Carrito</Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rounded position-absolute d-none d-lg-block" style={{top:'50%', right:'0', width:'45%', height:'auto', transform:'translateY(-50%)', zIndex:'2'}}>
                        <img className="img-fluid rounded-3 shadow" src={"../images/" + item.img}   width="300" height="auto" alt={item.title} loading="lazy"/>
                    </div>

                </div>
            </div>

        

    )
}

export default ItemDetail;
