// We’re gonna use instance of firebase.firestore.CollectionReference to read/write data from the Firestore.

var tutorialsRef = firebase.firestore().collection("/tutorials");

// – Read collection once using get():

tutorialsRef.get().then(function(snapshot) {
   var tutorials = [];
 
   snapshot.forEach(function(childSnapshot) {
     var id = childSnapshot.id;
     var data = childSnapshot.val();
     // ...
 
     tutorials.push({ id: id, title: data.title, description: data.description});
   });
 });

// – Read collection with listening to the data changes using onSnapshot():

tutorialsRef.onSnapshot(function(snapshot) {
  snapshot.docChanges().forEach(function(change) {
    if (change.type === "added") {
      console.log("New tutorial: ", change.doc.data());
    }
    if (change.type === "modified") {
      console.log("Modified tutorial: ", change.doc.data());
    }
    if (change.type === "removed") {
      console.log("Removed tutorial: ", change.doc.data());
    }
  });
});

// – Read collection with listening to the data changes using onSnapshot():

tutorialsRef.onSnapshot(function(snapshot) {
  snapshot.docChanges().forEach(function(change) {
    if (change.type === "added") {
      console.log("New tutorial: ", change.doc.data());
    }
    if (change.type === "modified") {
      console.log("Modified tutorial: ", change.doc.data());
    }
    if (change.type === "removed") {
      console.log("Removed tutorial: ", change.doc.data());
    }
  });
});
// – Listening for all value change events on a collection reference

tutorialsRef.onSnapshot(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var id = childSnapshot.id;
    var childData = childSnapshot.val();
    // ...
  });
});
// – Detach the listener to stop using bandwidth to receive updates:

var unsubscribe = tutorialsRef.onSnapshot(function(snapshot) {
  // ...
});

// Stop listening to changes
unsubscribe();
// – Create a new document in collection using add():

tutorialsRef.add({
  title: "bezkoder Tut#1",
  description: "Helpful tutorial"
})
.then(function(docRef) {
    console.log("Tutorial created with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding Tutorial: ", error);
});;
// – Update document by id in collection:
// + destructive update using set(): delete everything currently in place, then save the new value

tutorialsRef.doc(id).set({
  title: 'zkoder Tut#1',
  description: 'Tut#1 Description'
});
// + non-destructive update using update(): only updates the specified values

tutorialsRef.doc(id).update({
  title: 'zkoder new Tut#1'
});
// – Delete a document by id in collection:

tutorialsRef.doc(id).delete();

// to delete doc 
var chatId = route.params.number; // +639266825843
var colRef = firestore()
  .collection('ChatRoom')
  .doc(chatId)
  .collection('messages');

colRef.get().then((querySnapshot) => {
  Promise.all(querySnapshot.docs.map((d) => d.ref.delete()));
});
