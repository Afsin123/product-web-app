
import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import { toast } from "react-toastify";
import { db as fireDb } from "../firebase";
import Products from '../components/Products';
import { storage, db } from '../firebase';
import { doc, deleteDoc } from "firebase/firestore"; 
import { Firebase } from '../firebase';

const View = () => {
  // var productRef= firebase.firestore().collection("/Products");
  
  const [products, setProducts] = useState([]); 

  // useEffect(() => {
  //   fireDb.child("products").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({ ...snapshot.val() });
  //     } else {
  //       setData({});
  //     }
  //   }); 
 
  //   return () => {
  //     setData({});
  //   };
  // }, []);
  
  // We’re gonna use instance of firebase.firestore.CollectionReference to read/write data from the Firestore.
  // – Read collection once using get():

  // tutorialsRef.get().then(function(snapshot) {
  //   vat tutorials = [];
  
  //   snapshot.forEach(function(childSnapshot) {
  //     var id = childSnapshot.id;
  //     var data = childSnapshot.val();
  //     // ...
  
  //     tutorials.push({ id: id, title: data.title, description: data.description});
  //   });
  // });
  
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

// funtion fetchAll() {
//   db.collection("Products")
//     .get()
//     .then((snapshot) => {
//       if (snapshot.docs.length) {
//         snapshot.docs.forEach((doc) => {
//           setAlldocs((prev) => {
//             return [...prev, { data: doc.data(), id: doc.id }];
//           });
//         });
//       }
//     })
//   console.log(allDocs);
// }
 useEffect(() => {
   getProducts();
   //fetchAll();
 }, [])

  
  const onDelete = (id) => { 
    
    if (
      window.confirm("Are you sure that you wanted to delete the product ?")
    ) {
      db.collection("Products").doc("Black Womens Jacket Trendy").delete()
        .then(() => {
          console.log("Document deleted successfully");
        }).catch((err) => {
          console.log("An error occured while deleting the document");
          console.log("Error: " + err.message);
      }) 
    }
  }
  
   
    // {
    //   db.child(`products/${id}`).delete((error) => {
    //     if (error) {
    //       toast.error(error);
    //     } else {
    //       toast.success("Contact Deleted Successfully");
    //     }
    //   }
    
    //   );
    // }
    // {
    //   Firebase.firestore().collection("Products").doc[id].delete().then(() => {
    //     console.log('Product Successfully Deleted')
    //   })
    //   }
     //};

     const onUpdate = (id) => { }
  return ( 
  <div >
    <h1> View Page </h1>  
    <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Product</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>Image </th>
            
          </tr>
        </thead>
        <tbody>
          {Object.keys(products).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{products[id].title}</td>
                <td>{products[id].price}</td>
                <td> {products[id].image} </td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="bttn btn-edit" onClick={() => onUpdate(id)}>Edit</button>
                  </Link>
                  <button
                    className="bttn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="bttn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
   </table> 
  
    </div>
  )
};

export default View;

