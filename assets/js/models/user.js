const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const errorUsername = document.getElementById('error-register-username');
const errorPassword = document.getElementById('error-register-password');

const saveUser = e => {
  e.preventDefault();
  let usersList = JSON.parse(localStorage.getItem('users')) || [];

  if (registerUsername.value && registerPassword.value) {

    const user = {
      name: registerUsername.value,
      password: registerPassword.value,
      createdAt: Date.now(),
    }
    usersList.push(user);
    localStorage.setItem('users', JSON.stringify(usersList));

    registerUsername.value = '';
    registerPassword.value = '';

    document.getElementById('register').classList.add('hide');
    document.getElementById('login').classList.remove('hide');
  }
  return;
}

const validateUsername = () => {
  let usersList = JSON.parse(localStorage.getItem('users')) || [];
  let allUsername = usersList.map(el => el.name);

  if (!registerUsername.value || allUsername.includes(registerUsername.value)) {
    errorUsername.classList.remove('hide');
    registerUsername.classList.add('wrong');
    return false;
  } else {
    errorUsername.classList.add('hide');
    registerUsername.classList.remove('wrong');
    return true;
  }
}

const validatePassword = () => {
  if (!registerPassword.value) {
    errorPassword.classList.remove('hide');
    registerPassword.classList.add('wrong');
    return false;
  } else {
    errorPassword.classList.add('hide');
    registerPassword.classList.remove('wrong');
    return true;
  }
}

const validateUserLogin = () => {
  const loginUsername = document.getElementById('login-username');
  const loginPassword = document.getElementById('login-password');
  let usersList = JSON.parse(localStorage.getItem('users'));
  let usersName = usersList.map(el => el.name);
  let usersPassword = usersList.map(el => el.password);

  if (usersName.includes(loginUsername.value) && usersPassword.includes(loginPassword.value)) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('register').classList.add('hide');
    document.getElementById('home').classList.remove('hide');
  } else {

    if (!usersPassword.includes(loginPassword.value)) {
      loginPassword.classList.add('wrong');
      document.getElementById('error-login-password').classList.remove('hide');
    } else {
      loginPassword.classList.remove('wrong');
      document.getElementById('error-login-password').classList.add('hide');
    }

    if (!usersName.includes(loginUsername.value)) {
      loginUsername.classList.add('wrong');
      document.getElementById('error-login-username').classList.remove('hide');
    } else {
      loginUsername.classList.remove('wrong');
      document.getElementById('error-login-username').classList.add('hide');
    }
  }
}

export { saveUser, validateUsername, validatePassword, validateUserLogin };
