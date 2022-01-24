import React from 'react';
import IndividualProduct from '../components/IndividualProduct';

const Products = ({ products }) => {
   
   // console.log(products);

   return products.map((individualProduct) => (
      <IndividualProduct key= {individualProduct.ID} individualProduct = {individualProduct}/> 
      // <table>
      // <tr key={id}>
      //           <th scope="row">{index + 1}</th>
      //           <td>{individualProduct[ID].title}</td>
      //           <td> {individualProduct[id].description}</td>
      //           <td>  ₹ {individualProduct.price}  </td>
      //           <td>
      //             <Link to={`/update/${id}`}>
      //               <button className="bttn btn-edit">Edit</button>
      //             </Link>
      //             <button
      //               className="bttn btn-delete"
      //               onClick={() => onDelete(id)}
      //             >
      //               Delete
      //             </button>
      //             <Link to={`/view/${id}`}>
      //               <button className="bttn btn-view">View</button>
      //             </Link>
      //           </td>
      //         </tr>
      //       );
         
       
      // </table>
   ))
  
}  

export default Products

