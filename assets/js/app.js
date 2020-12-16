import { saveUser, validatePassword, validateUserLogin, validateUsername } from './models/user.js';

const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');

registerBtn.addEventListener('click', saveUser);
registerUsername.addEventListener('blur', validateUsername);
registerPassword.addEventListener('blur', validatePassword);

loginBtn.addEventListener('click', validateUserLogin);
