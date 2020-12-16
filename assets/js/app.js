import { saveUser, validatePassword, validateUserLogin, validateUsername, checkIfAuth, logout } from './models/user.js';

const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

window.addEventListener('load', checkIfAuth, false);

registerBtn.addEventListener('click', saveUser);
registerUsername.addEventListener('blur', validateUsername);
registerPassword.addEventListener('blur', validatePassword);

loginBtn.addEventListener('click', validateUserLogin);
logoutBtn.addEventListener('click', logout);


