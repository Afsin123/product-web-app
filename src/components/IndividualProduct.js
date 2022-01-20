import React from 'react';
import './IndividualProduct.css';
import { Card, Button, CardGroup } from 'react-bootstrap';

const IndividualProduct = ({ individualProduct }) => {
   // console.log(individualProduct);

   return (

      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={individualProduct.url} alt="product-img" />
         <Card.Body>
            <Card.Title> {individualProduct.title} </Card.Title>
            <Card.Text>
               {individualProduct.description}
               <br />
               ₹ {individualProduct.price}
            </Card.Text>
            <Button variant="primary">ADD TO CART </Button>
         </Card.Body>
      </Card>
   )
}
     
   

export default IndividualProduct
