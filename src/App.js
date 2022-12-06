import './App.css';
import Product from './Components/Product';

// const products = [
//   {
//     pId: 1,
//     pName: "Fresh Milk",
//     desc: "jndfkjgndkfgnkfnfndgfngnhfghdf",
//     isAvailable: true,
//     price: 14
//   },
//   {
//     pId: 2,
//     pName: "Cottage Cheese",
//     desc: "jndfkjgndkfgnkfnfndgfngnhfghdf",
//     isAvailable: false,
//     price: 16
//   },
//   {
//     pId: 3,
//     pName: "Brocolli",
//     desc: "jndfkjgndkfgnkfnfndgfngnhfghdf",
//     isAvailable: false,
//     price: 15
//   },
//   {
//     pId: 4,
//     pName: "Oranges",
//     desc: "jndfkjgndkfgnkfnfndgfngnhfghdf",
//     isAvailable: true,
//     price: 12
//   },
//   {
//     pId: 5,
//     pName: "Olive Oil",
//     desc: "jndfkjgndkfgnkfnfndgfngnhfghdf",
//     isAvailable: true,
//     price: 11
//   },
// ]
function App() {
  return (
    <div>
    {/* {products.map((items) => {
          return (
           <ul>
             <Product
              key={items.pId}
              id={items.pId}
              name={items.pName}
              description={items.desc}
              isAvailable={items.isAvailable}
              price={items.price} />
           </ul>
          )
        })} */}
        <Product />
    </div>
  );
}

export default App;
