//incializando firebase cloud firestore
var firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true }; //activar registro de tiempo 
firestore.settings(settings);

window.currentVisitorRegistration = () => {

  //crear id para cada visitante 
  const newVisitorId = firestore.collection("visitors").ref().child('visitor').push().key;
  const startedAt = firebase.collection("visitors").ServerValue.TIMESTAMP;
  firestore.collection("visitors").onSnapshot((querySnapshot) => {
          
    querySnapshot.forEach((doc) => {
      
      let name = firestore.data().name;
      //añadiendo una nueva coleccion
      firestore.collection("visitor").add({
        id: newVisitorId,
        name : ,
        rut:  ,
        visitorType : ,
        arrivingTime : ,
        goingTo : ,
        host : ,
        licensePlate : 
      }) 
  
  
 
    }
    return currentVisitor;
  }
}
