/* Functionality Buttons */
newRegistrationBtn.addEventListener('click', () => {
  starterPage.classList.add('disappear');
  starterPage.classList.remove('show');
  personalUserInfo.classList.remove('disappear');
  personalUserInfo.classList.add('show');
});

/*findRegistration.addEventListener('click', () => {
 // Agregar cuando la pag esté lista
});*/

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
});

