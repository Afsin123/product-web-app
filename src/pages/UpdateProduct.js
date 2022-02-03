import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './UpdateProduct.css'; 
import { fireDb, storage, db } from '../firebase'; 
import { toast } from "react-toastify"; 


const UpdateProduct = () => {
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
   };
   useEffect(() => {
      getProducts();
   }, [id]);
 

   // const initialState= {
   //    title: "",
   //     price: "",
   //     description: "",
   //     }

   // const UpdateProduct = () => {
   //    const [state, setState] = useState(initialState);
   //    const [products, setProducts] = useState({});
   //    const { title, price, description } = state;

   //    const history = useNavigate();
   //    const { id } = useParams();

   //    const getProducts = async () => {
   //       const products = await db.collection('Products').get();
   //       // const productsArray = [];
   //       // for (var snap of products.docs) {
   //       //    var data = snap.data();
   //       //    data.ID = snap.id;
   //       //    productsArray.push({
   //       //       ...data
   //       //    })
   //       //    if (productsArray.length === products.docs.length) {
   //       //       setProducts(productsArray); 
   //       //    }
   //       // }
   //    }
   //    useEffect(() => {
   //       getProducts({}); 
   //    }, [id]);
   
      // useEffect(() => {
      //    if (id) {
      //       setProducts(products.data());
      //    } 
  
      //    return () => {
      //       setProducts(products.data());
      //    };
      //  }, [id, products]);
   
       const handleInputChange = (e) => {
         const { name, value } = e.target;
         setProducts({ ...products, [name]: value });
      };
   
      const handleSubmit = (e) => {
         e.preventDefault();
   //       // db.collection('Products').doc(products[id].ID).update()
   //       //   .then(() => {
   //       //     console.log("Document updated successfully");

   //       //   }).catch((err) => {
   //       //     console.log("An error occured while updating the document");
   //       //     console.log("Error: " + err.message);
   //       //    }) 

         db.collection("Products").doc(id).update(products)
            .then(()=> {
            console.log("Products updated");
          }); 
  
   //         setTimeout(() => history.push("/"), 500);
          }
      
   //    console.log(id);
   //    console.log(products)

      return (
         <div style={{ marginTop: "100px" }}>
         <form
           style={{
             margin: "auto",
             padding: "15px",
             maxWidth: "400px",
             alignContent: "center",
           }}
           onSubmit={handleSubmit}
         >
           <label htmlFor="title">Title</label>
           <input
             type="text"
             id="title"
             name="title"
          
             value={products.title}
             onChange={handleInputChange}
           />
           <label htmlFor="email">Description</label>
           <input
             type="text"
             id="description"
             name="description"
          
             value={products.description }
             onChange={handleInputChange}
           />
           <label htmlFor="price">Price</label>
           <input
             type="number"
             id="price"
             name="price"
         
             value={products.price}
             onChange={handleInputChange}
           />

           <input type="submit" value={id ? "Update" : "Save"} />
         </form>
       </div>


     );
   
}
export default UpdateProduct;
