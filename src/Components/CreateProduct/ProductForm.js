import React, { useState } from "react";

let pName = ''
export default function ProductForm(props) {
    let [pName, updateName] = useState('')
    let [pPrice, updatePrice] = useState('')
    let [pDescription, updateDecsription] = useState('')
    let [pAvailable, updateAvailable] = useState(false)

    // let [userInput, updateUserInput] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDescription: '',
    //     pAvailable: ''
    // });

    function nameInputHandler(event) {
        updateName(event.target.value);
        // pName=event.target.value

        // updateUserInput({ ...userInput, pName: event.target.value });

        // updateUserInput((res) => {
        //     return { ...res, pName: event.target.value }
        // })
    }
    function priceInputHandler(event) {
        updatePrice(event.target.value);

        // updateUserInput({ ...userInput, pPrice: event.target.value });
    }
    function descriptionInputHandler(event) {
        updateDecsription(event.target.value);

        // updateUserInput({ ...userInput, pDescription: event.target.value });
    }
    function availableInputHandler(event) {
        updateAvailable(event.target.checked);

        // updateUserInput({ ...userInput, pAvailable: event.target.value });
    }

    function onSubmit(event) {
        event.preventDefault();
        let product = {
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            price: Number(pPrice)
        }
        updateName('');
        updatePrice('');
        updateDecsription('');
        updateAvailable(false);

        props.createProduct(product);
    }

    return (
        <div className="col-8 mx-auto bg-light p-3 m-3">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Product Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Product Name"
                        value={pName}
                        onChange={nameInputHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Product Price</label>
                    <input type="number"
                        min="0.01" step="0.01"
                        className="form-control"
                        id="price"
                        placeholder="Product Price"
                        value={pPrice}
                        onChange={priceInputHandler} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Product Description</label>
                    <input type="text"
                        className="form-control"
                        id="description"
                        placeholder="Product Description"
                        value={pDescription}
                        onChange={descriptionInputHandler} />
                </div>

                <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
                        checked={pAvailable}
                        onChange={availableInputHandler} />
                    <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}