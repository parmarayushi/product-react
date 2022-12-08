import Button from "./Button";
import React, { useState } from "react";

export default function ProductDetails(props) {
    let badgeClass = 'badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    let [productCount, updateCount] = useState(0);
    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : "Zero";
    }

    let incrementCount = function () {
        updateCount(++productCount);
    }

    let decrementCount = function () {
        updateCount(--productCount);
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <h4 className="me-3">${props.price}</h4>
                <Button eventHandler={decrementCount}>-</Button>
                <span className="me-3">{displayFormattedProductCount()}</span>
                <Button eventHandler={incrementCount}>+</Button>
            </div>
            <div>
                <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
            </div>
        </div>
    )
}



