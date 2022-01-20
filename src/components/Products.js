import React from 'react';
import IndividualProduct from '../components/IndividualProduct';

const Products = ({ products }) => {
   
   // console.log(products);

   return products.map((individualProduct) => (
      <IndividualProduct key= {individualProduct.ID} individualProduct = {individualProduct}/> 
   ))
  
}  

export default Products

