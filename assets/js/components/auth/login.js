const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const errorLoginUsername = document.getElementById('error-login-username');
const errorLoginPassword = document.getElementById('error-login-password');


const validateUserLogin = (e) => {
  e.preventDefault();
  let usersList = JSON.parse(localStorage.getItem('users'));
  let usersName = usersList.map(el => el.name);
  let usersPassword = usersList.map(el => el.password);

  if (usersName.includes(loginUsername.value) && usersPassword.includes(loginPassword.value)) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('register').classList.add('hide');
    // document.getElementById('home').classList.remove('hide');
  } else {

    if (!usersPassword.includes(loginPassword.value)) {
      loginPassword.classList.add('wrong');
      errorLoginPassword.classList.remove('hide');
    } else {
      loginPassword.classList.remove('wrong');
      errorLoginPassword.classList.add('hide');
    }

    if (!usersName.includes(loginUsername.value)) {
      loginUsername.classList.add('wrong');
      errorLoginUsername.classList.remove('hide');
    } else {
      loginUsername.classList.remove('wrong');
      errorLoginUsername.classList.add('hide');
    }
  }

  let validatedUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};

  validatedUser = {
    name: loginUsername.value,
    password: loginPassword.value
  }

  sessionStorage.setItem('currentUser', JSON.stringify(validatedUser));

  location.reload();

  return validatedUser;
}


const checkIfAuth = () => {
  const authUser = JSON.parse(sessionStorage.getItem('currentUser'));

  if (authUser) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('register').classList.add('hide');
    document.getElementById('navbar').classList.remove('hide');
    document.body.style.overflowY = 'scroll';
  }

  console.log(authUser);
}



export { validateUserLogin, checkIfAuth };