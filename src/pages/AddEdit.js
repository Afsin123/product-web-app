import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";

import { fireDb, storage, db, imageupload, updateProduct} from "../firebase";
// import fireDb from "../firebase";
import { toast } from "react-toastify";
import { getDownloadURL } from "firebase/storage";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState(null); 
  
  const { id } = useParams();
  const history = useNavigate();

  console.log("id is ", id);

  // getting products function
  const getProducts = async () => {
    const products = await db.collection("Products").doc(id).get();
    // if (products.exists)

    if (products.exists) {
      // db.collection("Products").doc(id).set(products).then(() => {
      //    console.log("Document successfully written!");
      //   });
      //  setProducts(products.data())
      setTitle(products.data().title);
      setDescription(products.data().description);
      setPrice(products.data().price);
      setImageUrl(products.data().url);
      setProducts(products.data());

      console.log("Document data:", products);
    } else {
      setProducts("");
    }
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  console.log(products);

  // useEffect(() => {
  //     if (id) {
  //       //  setProducts({ ...products[id] })
  //        setTitle(products.title);
  //       setDescription(products.description);
  //       setPrice(products.price);

  //       // console.log("Document data:", doc.data());
  //   }
  //    else {
  //        setProducts("");
  //    }

  //   return () => {
  //   setProducts(" ")
  //   };
  // }, [id]);

  // if (id) {
  //    const onUpdate = (id) => {

  //       if (
  //         window.confirm("Are you sure that you wanted to update the product details?")
  //       ) {
  //         // db.collection("Products").doc(id).delete()
  //         db.collection('Products').doc(products[id].ID).delete()
  //           .then(() => {
  //             console.log("Document deleted successfully");

  //           }).catch((err) => {
  //             console.log("An error occured while deleting the document");
  //             console.log("Error: " + err.message);
  //         })
  //       }

  //     }

  // }

  // const [state, setState] = useState(initialState);

  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const types = ["image/png", "image/PNG", "image/jpeg", "image/jpg"];
  // const { title, price, description} = state;

  const productImageHandler = (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImageUrl(URL.createObjectURL(e.target.files[0]));
        setImageError(""); 
        setImage(selectedFile);
      } else {
        setImage(null);
        setImageError("Please select a valid image type or jpeg");
      }
    } else {
      console.log("Please select your file");
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!title || !description || !price) {
      toast.error("PLease provide value in each input field");
    } else {
      if (!id) {
        const uploadTask = storage.ref(`product-images/${image}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (error) => setUploadError(error.message),
          () => {
            storage
              .ref("product-images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                db.collection("Products")
                  .add({
                    title,
                    description,
                    price: Number(price),
                    url,
                  })
                  .then(() => {
                    setSuccessMsg("Product successfully added");
                    setTitle("");
                    setImageUrl('');
                    setDescription("");
                    setPrice("");
                    document.getElementById("file").value = "";
                    setImageError("");
                    setUploadError("");
                    setTimeout(() => {
                      setSuccessMsg("");
                    }, 3000);
                  })
                  .catch((error) => setUploadError(error.message));
              });
          }
        );
        setTimeout(() => history.push("/"), 500);
      } else{
         console.log("ImageUrl is ", imageUrl)
         let url = imageUrl; 
         if(image){
          // url = await uploadImage(image); 
          // console.log( " uRL is ", url )
            imageupload(image).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((downloadURL) => { 
                // console.log('File available at', downloadURL);
                // const bannerPath = snapshot.metadata.fullPath;

                 (async () => {
                  /* */
                  await updateProduct( id, title, description, price, downloadURL) 
                })()
            })
          } )
        
         } else {
          (async () => {
            /* */
            await updateProduct( id, title, description, price, url) 
          })()  
         }
         console.log("THe url is ", url)

         setSuccessMsg("Product successfully updated");
         setTitle("");
         setImageUrl(""); 
         setDescription("");
         setPrice("");
         document.getElementById("file").value = "";
         setImageError("");
         setUploadError("");
         setTimeout(() => {
           setSuccessMsg("");
         }, 3000);







            //  db.collection('Products').doc(id).update({  title,
            // description,
            // price,
            // url
            // }) 
           
            // .then(() => {
            //    setSuccessMsg("Product successfully updated");
            //    setTitle("");
            //    setImageUrl(""); 
            //    setDescription("");
            //    setPrice("");
            //    document.getElementById("file").value = "";
            //    setImageError("");
            //    setUploadError("");
            //    setTimeout(() => {
            //      setSuccessMsg("");
            //    }, 3000);
            //  })
            //  .catch((error) => setUploadError(error.message));
         
            // console.log("Product updated successfully!!")
      } 
    }
  };

  const uploadImage = ((image)=>{
   let uploadUrl = null;
   const uploadTask = storage.ref(`product-images/${image}`).put(image);
   uploadTask.on( 
    "state_changed",
    (snapshot) => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    },
    (error) => setUploadError(error.message),
    () => {
      storage
        .ref("product-images")
        .child(image.name)
        .getDownloadURL().then((url)=> {
         console.log("Url is: ", url) 
         uploadUrl = url; 
         return url;
          
  
     });
     }) 
      console.log("upload url ", uploadUrl)
  } )


  
  return (
    <div className="container">
      <br />
      <h2> ADD PRODUCTS </h2>
      <hr />
      <br />
      
      {successMsg && (
        <>
          <div className="success-msg">{successMsg}</div>
          <br />
          <br />
        </>
      )}
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label> Title </label>
        <input 
          type="text" 
          className="form-control" 
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label> Product Description</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />

        <label> Product Price</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        <div className="row">
         <div className="col-md-6">  
        <label > {imageUrl ? "Change ": "Upload" } Product Image</label>
        <input 
          type="file"
          id="file"
         //  value ={image}
          className="form-control"
          onChange={productImageHandler}
        /> 
          </div>
        {imageUrl && 
          <div className="product-box col-md-6">
             <p> Current Product Image</p>
          <img src={imageUrl} alt="product-img" className="image-product" />
        </div> 
        }
       </div>
        <br />
        <br />
        {imageError && (
          <>
            <br />
            <br />
            <div className="error-msg">{imageError}</div>
          </>
        )}
        {/* <div> src={url}
            alt="product-img" </div> */}
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-success btn-md">
            {" "}
            SUBMIT{" "}
          </button>
        </div> */}

        {uploadError && (
          <>
            <br />
            <br />
            <div className="error-msg">{uploadError}</div>{" "}
          </>
        )}
        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddProducts;
