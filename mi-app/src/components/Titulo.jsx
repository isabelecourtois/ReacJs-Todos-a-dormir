import React from "react";
import { Component } from "react";

class Titulo extends Component {
    render() {
        return (
            <h1>{this.props.valor}</h1>
        )
    }
}

export default Titulo;