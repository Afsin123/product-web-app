import React from 'react';
import './IndividualProduct.css';
import { Card, Button, CardGroup } from 'react-bootstrap';

const IndividualProduct = ({ individualProduct }) => {
   // console.log(individualProduct);

   return (

      // <Card style={{ width: '18rem' }}>
      //    <Card.Img variant="top" src={individualProduct.url} alt="product-img" />
      //    <Card.Body>
      //       <Card.Title> {individualProduct.title} </Card.Title>
      //       <Card.Text>
      //          {individualProduct.description}
      //          <br />
      //          ₹ {individualProduct.price}
      //       </Card.Text>
      //       <Button variant="primary">ADD TO CART </Button>
      //    </Card.Body>
      // </Card>

<Card className= "my-3 p-3 col-md-3">
<Card.Img src={individualProduct.url} alt="product-img" className= "p-3" variant= 'top'/>
<Card.Body>
   <Card.Title> {individualProduct.title} </Card.Title>
   <Card.Text>
      {individualProduct.description}
      <br />
      <strong>  ₹ {individualProduct.price} </strong>
   </Card.Text>
            <Button variant="primary">ADD TO CART </Button>   
</Card.Body>
</Card>

      
      
      // </Card>
         
   
   )
}
     
   

export default IndividualProduct
