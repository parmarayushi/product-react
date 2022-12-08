import React from "react";
import ProductForm from "./ProductForm";

export default function CreateProduct(props) {
    function onCreateProduct(product){
        props.createProduct(product)
    }
    return (
        <div>
            <h2 className="text-center borde">Product Form</h2>
            <ProductForm createProduct={onCreateProduct}/>
        </div>
    )
}