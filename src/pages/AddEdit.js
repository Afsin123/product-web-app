import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from "react-router-dom";
import './AddEdit.css';
//import { storage, db } from '../config/Config';
// import fireDb from "../firebase";
// import { toast } from "react-toastify";


// const initialState= {
//    productname: "",
//    price: "",
//    description: "",
//    category: "",

// }
const AddEdit = () => {

   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState(0);
   const [productImage, setProductImage] = useState(null)
   const [error, setError] = useState('')

   const types = ['image/png', 'image/jpeg', 'image/jpg']

   const productImageHandler = (e) => {
      let selectedFile = e.target.files[0];
      if (selectedFile && types.includes(selectedFile.type)) {
         setProductImage(selectedFile);
         setError('');
      }
      else {
         setProductImage(null)
         setError('Please select a valid image type or jpeg')
      }
   }

   const addProduct = (e) => {
      e.preventDefault();
   }

   // const [state, setState] = useState(initialState);
   // const [data, setData] = useState({});

   // const { productname, price, description, category } = state;

   // const handleInputChange = () => { }
   // const handleSubmit = () => {}
   return (
      // <div style={{marginTop: "100px"}}>
      //    <form style={{
      //       margin: "auto",
      //       padding: "15px",
      //       alignContent: "center",
      //       maxWidth: "400px", 
      //    }}
      //    onSubmit={handleSubmit}
      //    >
      //       <label htmlFor="productname"> Product Name</label>
      //       <input type="text"
      //          id="productname"
      //          name="productname"
      //          placeholder='Product name'
      //          value={productname}
      //          onChange={handleInputChange}
               
      //       />

      //       <label htmlFor="price"> Price </label>
      //       <input type="text"
      //          id="price"
      //          name="price"
      //          placeholder='Price'
      //          value={price}
      //          onChange={handleInputChange}
               
      //       />
      //       <label htmlFor="description"> Description </label>
      //       <input type="long text"
      //          id="description"
      //          name="description"
      //          placeholder='Description'
      //          value={description}
      //          onChange={handleInputChange}
               
      //       />







      //    </form>
      // </div>
      <div className="container">
         <br />
         <h2> ADD PRODUCTS </h2>
         <hr />
         <form autoComplete='off' className='form-group' onSubmit={addProduct} >
            <label htmlFor="productname"> Product Name</label>
            <br />
            <input type="text" className='form-control' required
            onChange={(e)=> setProductName(e.target.value)} value={productName}
            />    
            
            <label htmlFor="productprice"> Product Price</label>
            <br />
            <input type="number" className='form-control' required
               onChange={(e)=> setProductPrice(e.target.value)} value={productPrice} 
            
            />  
            <br />
            <label htmlFor="productimage"> Product Image</label>
            <br />
            <input type="file" className='form-control' onChange={productImageHandler} />
            <br />
            <br />
            <button className='btn btn-success btn-md mybtn'> ADD </button>
         </form>
         {error && <span> {error}</span>}
     </div>
   )
}

export default AddEdit
