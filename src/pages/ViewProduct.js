import React, { useState, useEffect } from "react";
import { storage, db } from '../firebase';
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Products from "../components/Products";
import './ViewProduct.css'; 

const ViewProduct = ({ }) => {
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
 
    
   
  //   const details = products.find((products)=> products.id==match.params.id)
  // console.log("my data is", details)
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  console.log(products);
 
    
        return (
    
        // <Card>
        //   <Card.Img
        //     src={products.url}
        //     alt="product-img"
        //     className="p-3"
        //     variant="top"  
        //     />
        
        //   <Card.Body>
        //   <Card.Title> {id} </Card.Title>
        //     <Card.Title> {products.title} </Card.Title>
        //     <Card.Text>
        //       {products.description}
        //       <br />
        //       <strong> ₹ {products.price} </strong>
        //        </Card.Text>
        //        <Link to="/"> <Button variant="primary"> GO BACK TO VIEW LIST </Button> </Link>
        
        //   </Card.Body>
        //  </Card>
          <div className="container">
            <div className="product-box">
            
           
          <img src={products.url}
              alt="product-img"  className="image-product"
                   /> 
             
            <div > {products.title}  </div>
            <div className="product-id"> ID:  {id}  </div>
            <div> {products.description} </div>
            
            <Link to="/"> <Button variant="primary"> GO BACK TO VIEW LIST </Button> </Link>

            </div>
          </div>
          
          
    
       ); 
  
 
    }
   

export default ViewProduct;
