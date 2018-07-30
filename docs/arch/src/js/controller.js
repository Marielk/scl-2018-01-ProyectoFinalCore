const database = firebase.database();
window.currentVisitorRegistration = () => {
  /* crear id para cada visitante */
  const newVisitorId = database.ref().child('post').push().key;
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