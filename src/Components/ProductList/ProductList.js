import React from "react";
import Product from './Product';

const products = [
    {
        pId: 1,
        pName: "Fresh Milk",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae veritatis. Totam quasi quia beatae eum. Ex necessitatibus dignissimos quidem excepturi, a eveniet!",
        isAvailable: true,
        price: 14
    },
    {
        pId: 2,
        pName: "Cottage Cheese",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae veritatis. Totam quasi quia beatae eum. Ex necessitatibus dignissimos quidem excepturi, a eveniet!",
        isAvailable: false,
        price: 16
    },
    {
        pId: 3,
        pName: "Brocolli",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae veritatis. Totam quasi quia beatae eum. Ex necessitatibus dignissimos quidem excepturi, a eveniet!",
        isAvailable: false,
        price: 15
    },
    {
        pId: 4,
        pName: "Oranges",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae veritatis. Totam quasi quia beatae eum. Ex necessitatibus dignissimos quidem excepturi, a eveniet!",
        isAvailable: true,
        price: 12
    },
    {
        pId: 5,
        pName: "Olive Oil",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae veritatis. Totam quasi quia beatae eum. Ex necessitatibus dignissimos quidem excepturi, a eveniet!",
        isAvailable: true,
        price: 11
    },
]
export default function ProductList(props) {
    console.log(props.newProduct);
    return (
        <div className='col-8 mx-auto'>
            <h2 className="text-center">Product List</h2>
            <ul className='ps-0'>
                {products.map((items) => {
                    return (
                        <Product
                            key={items.pId}
                            pId={items.pId}
                            name={items.pName}
                            description={items.desc}
                            isAvailable={items.isAvailable}
                            price={items.price} />
                    )
                })}
            </ul>
        </div>
    );
}