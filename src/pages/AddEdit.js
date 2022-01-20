import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from "react-router-dom";
import './AddEdit.css';
import { storage, db } from '../firebase';
// import fireDb from "../firebase";
// import { toast } from "react-toastify";


// const initialState= {
//    productname: "",
//    price: "",
//    description: "",
//    category: "",

// }
const AddProducts = () => {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState(null);

   const [imageError, setImageError] = useState('');
   const[successMsg, setSuccessMsg] = useState('')
   const [uploadError, setUploadError] = useState('')

   const types = ['image/png', 'image/PNG', 'image/jpeg', 'image/jpg'];  

   const productImageHandler = (e) => {
      let selectedFile = e.target.files[0]; 
      if (selectedFile) {
         if (selectedFile && types.includes(selectedFile.type)) {
            setImage(selectedFile);
            setImageError('');
         }
         else {
            setImage(null)
            setImageError('Please select a valid image type or jpeg')
         }
      } else {
         console.log('Please select your file')
      }
     
   }

   const addProduct = (e) => {
      e.preventDefault();
      console.log(title, description, price);
      console.log(image);
      const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
      uploadTask.on('state_changed', snapshot => {
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log(progress);
     }, error => setUploadError(error.message)
         , () => {
             storage.ref('product-images').child(image.name).getDownloadURL().then(url => {
                 db.collection('Products').add({
                    title,
                    description,
                    price: Number(price),
                    url

                 }).then(() => {
                    setSuccessMsg('Product successfully added')
                    setTitle('');
                    setDescription('');
                    setPrice('')
                    document.getElementById('file').value = '';
                    setImageError('');
                    setUploadError('');
                    setTimeout(() => {
                       setSuccessMsg('');
                    }, 3000)
                 }).catch(error => setUploadError(error.message))
             })
         })
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
         <br />
         {successMsg &&  <> 
            <div className="success-msg">{successMsg}</div>
            <br /><br />
               </> }
         <form autoComplete='off' className='form-group' onSubmit={addProduct} >
            <label> Title </label>
            <input type="text" className='form-control' required
            onChange={(e)=> setTitle(e.target.value)} value={title}/>    
          <br /> 
            <label> Product Description</label>
            <input type="text" className='form-control' required
            onChange={(e)=> setDescription(e.target.value)} value={description} /> 
            <br />
            
            <label> Product Price</label>
            <input type="number" className='form-control' required
               onChange={(e)=> setPrice(e.target.value)} value={price} />  
            <br />
            <label> Upload Product Image</label>
            <input type="file"  id="file" className='form-control' onChange={productImageHandler} />
            <br /><br />
            {imageError && <> 
               <br /><br />
               <div className="error-msg">{ imageError}</div>
               </> }
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type= "submit" className='btn btn-success btn-md' > SUBMIT </button>
            </div>
         </form>
         {uploadError && <> 
            <br /><br />
               <div className="error-msg">{ uploadError}</div> </>  }
     </div>
   )
}

export default  AddProducts
      