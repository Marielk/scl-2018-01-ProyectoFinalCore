// Llamar a database 
const database = firebase.database();
// llamar a firebase usuarios autenticados
const autentication = firebase.auth();
// Llamar a Firebase Messaging object.
const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey('BIvOtXyPXyEhUFgKw9JaE0E7noalpNJvyvmI2krSmf6JFbDzwN3hBOBrfqb2RRzKpCIvYGgrKhlq2-qsYyx2b6c');
//Guardar al visitante actual 
let currentVisitorID = [];
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
  currentVisitorID.push(newVisitorId);
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

function signIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  autentication.signInWithPopup(provider).then(function (result) {
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
  autentication.onAuthStateChanged((user) => {
    if (user) {
      // codigo de prueba 
      aceptNotifications();
      //Si estamos logueados 
      // const btnAceptNotifications = document.getElementById('aceptNotifications');
      // btnAceptNotifications.onclick = aceptNotifications();
    } else {
      // si no esta logeado no pasa nada 
    }
  });
}

function aceptNotifications(){
  messaging.requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      console.log(token);
      database.ref('/tokens').push({
        token: token,
        uid: autentication.currentUser.uid
      });
    })
    .catch((err) => console.log('usuario sin permiso', err));
}

function sendNotification(){
  const message = `Hola ${autentication.currentUser.displayName}, te informamos que ${database.ref(`visitors/${currentVisitorID}`).name} esta en recepcion, confirma su entrada porfavor`; 
  database.ref('/notifications').push({
    user: autentication.currentUser.displayName,
    message: message
  });
}