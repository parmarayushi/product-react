import React from "react";
import ProductDetails from "./ProductDetails";

export default function Product(props) {
    return (
       <ul>
         <li>
            <div className="d-flex align-items-center">
                {/* <h5>{props.name}</h5>
                <p>{props.description}</p>
                <ProductDetails price={props.price} isAvailable={props.isAvailable} /> */}
                <h5>Fresh Milk</h5>
                <p>sdklfodfjgidj</p>
                <div>
                <h4>$14</h4>
                <button className="btn btn-primary">-</button>
                <span>1</span>
                <button className="btn btn-primary">+</button>
                </div>
            </div>
        </li>
       </ul>
    )
}