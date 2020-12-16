const username = document.getElementById('username');
const password = document.getElementById('password');
const errorUsername = document.getElementById('error-username');
const errorPassword = document.getElementById('error-password');

const saveUser = e => {
  e.preventDefault();
  let usersList = JSON.parse(localStorage.getItem('users')) || [];

  if (username.value && password.value) {

    const user = {
      name: username.value,
      password: password.value,
      createdAt: Date.now(),
    }
    usersList.push(user);
    localStorage.setItem('users', JSON.stringify(usersList));

    username.value = '';
    password.value = '';
  }
  return;
}


const validateUsername = () => {
  let usersList = JSON.parse(localStorage.getItem('users')) || [];
  let allUsername = usersList.map(el => el.name);

  if (!username.value || allUsername.includes(username.value)) {
    errorUsername.classList.remove('hide');
    username.classList.add('wrong');
    return false;
  } else {
    errorUsername.classList.add('hide');
    username.classList.remove('wrong');
    return true;
  }
}

const validatePassword = () => {
  if (!password.value) {
    errorPassword.classList.remove('hide');
    password.classList.add('wrong');
    return false;
  } else {
    errorPassword.classList.add('hide');
    password.classList.remove('wrong');
    return true;
  }
}

export { saveUser, validateUsername, validatePassword };