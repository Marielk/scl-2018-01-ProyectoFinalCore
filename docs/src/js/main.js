/* Global Variables */
let rut; 
let email; 
let licensePlate;
let host;
let goingTo;
let visitPurpose;

/* Functionality Buttons */
newRegistrationBtn.addEventListener('click', () => {
  starterPage.classList.add('disappear');
  starterPage.classList.remove('show');
  personalUserInfo.classList.remove('disappear');
  personalUserInfo.classList.add('show');
});

findRegistrationBtn.addEventListener('click', () => {
  starterPage.classList.add('disappear');
  starterPage.classList.remove('show');
  frequentVisitor.classList.remove('disappear');
  frequentVisitor.classList.add('show');
});

firstBackBtn.addEventListener('click', () => {
  personalUserInfo.classList.remove('show');
  personalUserInfo.classList.add('disappear');
  starterPage.classList.remove('disappear');
  starterPage.classList.add('show');
});

firstForwardBtn.addEventListener('click', () => {
  personalUserInfo.classList.remove('show');
  personalUserInfo.classList.add('disappear');
  purposeUserInfo.classList.remove('disappear');
  purposeUserInfo.classList.add('show');
  saveGlobalVariables();
});

secondBackBtn.addEventListener('click', () => {
  purposeUserInfo.classList.remove('show');
  purposeUserInfo.classList.add('disappear');
  personalUserInfo.classList.remove('disappear');
  personalUserInfo.classList.add('show');
});

secondForwardBtn.addEventListener('click', () => {
  purposeUserInfo.classList.remove('show');
  purposeUserInfo.classList.add('disappear');
  textConditions.classList.remove('disappear');
  textConditions.classList.add('show');
  saveGlobalVariables();
});

acceptTerms.addEventListener('click', () => {
  textConditions.classList.remove('show');
  textConditions.classList.add('disappear');
  arrivalNotification.classList.remove('disappear');
  arrivalNotification.classList.add('show');
  window.currentVisitorRegistration();
});

thirdBackBtn.addEventListener('click', () => {
  frequentVisitor.classList.remove('show');
  frequentVisitor.classList.add('disappear');
  starterPage.classList.remove('disappear');
  starterPage.classList.add('show');
});

thirdForwardBtn.addEventListener('click', () => {
  frequentVisitor.classList.remove('show');
  frequentVisitor.classList.add('disappear');
  arrivalNotification.classList.remove('disappear');
  arrivalNotification.classList.add('show');
});

function saveGlobalVariables() {
  rut= document.getElementById('rutVisitor').value;
  email= document.getElementById('emailVisitor').value;
  licensePlate= document.getElementById('licensePVisitor').value;
  host= document.getElementById('localHost').value;
  goingTo= document.getElementById('business').value;
  visitPurpose= document.getElementById('purposeOfVisit').value;
}

