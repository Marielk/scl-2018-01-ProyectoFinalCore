// Llamar a database 
const database = firebase.database();
// Llamar a Firebase Messaging object.
const messaging = firebase.messaging();

window.currentVisitorRegistration = () => {
  /* crear id para cada visitante */
  const newVisitorId = database.ref().child('visitor').push().key;
  const startedAt = firebase.database.ServerValue.TIMESTAMP;
  // añadiendo una nueva coleccion
  database.ref(`visitors/${newVisitorId}`).set({
      id: newVisitorId,
      name: 'mariel',
      rut: '17.834.887-6',
      visitorType: 'visita',
      arrivingTime: new Date(),
      goingTo: 'Laboratoria',
      contact: 'Carla Cruz',
      host: 'pepito Perez',
      licensePlate: 'ASFJASF3741934',
  });
};

function validatePersonIdentity(){
  const rut = '17834887-6';
	fetch(`https://api.rutify.cl/search?q=${rut}`)
	.then(response => response.json())
	.then(data => { 
    console.log(data[0].name); // nombre completo de la visita sacado de la API   
	})
	.catch((e) => {
	 console.log(e);
	});
}

// ==========Funciones avisar a la empresa========

function singIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
  })
    .catch(function (error) {
      console.log('entrar' + error);
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
    });
}

function userOn(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados 
      const btnAceptNotifications = document.getElementById('aceptNotifications');
      btnAceptNotifications.onclick = aceptNotifications();
      } else {
      // si no esta logeado no pasa nada 
      }
    });
}

function aceptNotifications(){
  
}