import React from "react";
import ProductDetails from "./ProductDetails";

export default function Product(props) {
    return (
        <li>
            <div className="d-flex flex-column bg-light mb-3 p-3">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
                <ProductDetails price={props.price} isAvailable={props.isAvailable} />
            </div>
        </li>
    )
}