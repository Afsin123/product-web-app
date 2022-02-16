
// const getProducts = async () => {
//     const products = await db.collection("Products").doc(id).get();
//     // if (products.exists)

//     if (products.exists) {
//       // db.collection("Products").doc(id).set(products).then(() => {
//       //    console.log("Document successfully written!");
//       //   });
//       //  setProducts(products.data())
//       setTitle(products.data().title);
//       setDescription(products.data().description);
//       setPrice(products.data().price);
//       setImageUrl(products.data().url);
//       setProducts(products.data());

//       console.log("Document data:", products);
//     } else {
//       setProducts("");
//     }
//   };
//   useEffect(() => {
//     getProducts();
//   }, [id]);

  export const getProducts = async () => {
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
 
