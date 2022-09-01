import React from "react";
import { Component } from "react";

const ItemListContainer = (greeting) => {
        return (
            <li className="list-inline-item">
                <a href="#">{greeting.valor}</a>
            </li>
        );
    }


export default ItemListContainer;