// import Button from "./Button";
// import React from "react";

// export default function ProductDetails(props){
//     let badgeClass='badge';
//      badgeClass += props.isAvailable ?'bg-success' :'bg-danger';

//      let productCount=0;
//      function displayFormattedProductCount(){
//         return productCount > 0 ? productCount : "Zero";
//      }

//      let incrementCount=function(){
//         productCount++;
//         console.log(productCount);
//      }

//      let decrementCount=function(){
//         productCount--;
//         console.log(productCount);
//      }
//     return(
//         <div className="d-flex align-items-center justify-content-start mt-1">
//             <h6>{props.price}</h6>
//             <Button eventHandler={incrementCount}/>
//             <span>{displayFormattedProductCount()}</span>
//             <Button eventHandler={decrementCount}/>
//             <span className={badgeClass} >{props.isAvailable ? 'Available' : 'Unavailable'}</span>
//         </div>
//     )
// }