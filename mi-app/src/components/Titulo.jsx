import React from "react";
import { Component } from "react";

class Titulo extends Component {
    render() {
        return (
            <div className="container">
                <div className="abs-center">
                    <h1>{this.props.valor}</h1>
                </div>
            </div>
        )
    }
}

export default Titulo;