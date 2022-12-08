import { useState } from 'react';
import './App.css';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import ProductList from './Components/ProductList/ProductList';

function App() {
  let [newProduct,updateProduct]=useState(null)
  
  function createProduct(product){
    updateProduct(product)
  }
  return(
    <div className='overflow-auto h-100'>
      <CreateProduct createProduct={createProduct}/>
      <ProductList newProduct={newProduct}/>
    </div>
  )
  
}

export default App;
