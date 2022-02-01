import React, { useState, useEffect } from "react";
import { storage, db } from '../firebase';
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Products from "../components/Products";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  console.log(id)
  const getProducts = async () => {
    const products = await db.collection("Products").doc(id).get();
    if (products.exists) {
      setProducts(products.data())
      // console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }

   

    
    console.log(products);
    const productsArray = [];
    // for (var snap of products.docs) {
    //   var data = snap.data();
    //   data.ID = snap.id;
    //   productsArray.push({
    //     ...data,
    //   });
    //   console.log(productsArray); 

      // if (productsArray.length === products.docs.length) {
      //   setProducts(productsArray);
      // }
    // }
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  
  
  // {
  //   Object.keys(products).map((id, index) => {
  //     return (
  //       <table>
  //         <tr key={id}>
  //           <th scope="row">{index + 1}</th>
  //           <td>{products[id].title}</td>
  //           <td>{products[id].price}</td>
  //           <td> {products[id].image} </td>
  //         </tr>
  //       </table>);
    
        return (
    
        <Card>
          <Card.Img
            src={products.url}
            alt="product-img"
            className="p-3"
            variant="top"  
            />
        
          <Card.Body>
          <Card.Title> {id} </Card.Title>
            <Card.Title> {products.title} </Card.Title>
            <Card.Text>
              {products.description}
              <br />
              <strong> ₹ {products.price} </strong>
               </Card.Text>
               <Link to="/"> <Button variant="primary"> GO BACK TO VIEW LIST </Button> </Link>
        
          </Card.Body>
         </Card>
    
       ); 
  
 
    }
   

export default ViewProduct;
