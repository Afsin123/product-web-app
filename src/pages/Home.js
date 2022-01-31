import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import { storage, db } from '../firebase';
import IndividualProduct from '../components/IndividualProduct';
import { Container, Row, Col, CardGroup, Card, Button } from 'react-bootstrap';
// import './Home.css';

function Home() {
   //state of products
   const [products, setProducts] = useState([]);
   
   // getting products function
   const getProducts = async () => {
      const products = await db.collection('Products').get();
      const productsArray = [];
      for (var snap of products.docs) {
         var data = snap.data();
         data.ID = snap.id;
         productsArray.push({
            ...data
         })
         if (productsArray.length === products.docs.length) {
            setProducts(productsArray); 
         }
      }
   }
   useEffect(() => {
      getProducts();
   }, [])


   
   return (
      <div> 

         {/* <h1> Home </h1>
         
         
         {products.length > 0 && (
              <div>
              <h1 className="text-center"> Products </h1>
                   <Col sm={12} md={8} xl={3}> 
                        
                     </Col>
              </div>
         )}
          

         {products.length < 1 && (
            <div className="container-fluid"> Please wait... </div>
         )} */}
 
         <Row> 
                     
            <Products products={products} />
            {/* console.log(products) */}
                     </Row>

                     
</div>
   )
   // return(
   // <div className="container">
   //          {products.length > 0 &&
   //              products.map(products=> (
   //                   <Row xs={1} md={2} className="g-4">
   //                   {Array.from({ length: 4 }).map((_, idx) => (
   //                  <Col>
   //                     <h1 className="text-center"> Products </h1>
   //                 <div className="products-box">
   //                    <Products products={products} />
   //                  </div>
   //                   </Col>
   //               ))}
   //               </Row>
   //             ))}
   //     </div>
   //  )
}

export default Home
