import { saveUser, validatePassword, validateUsername } from './models/user.js';

const formBtn = document.getElementById('form-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');

formBtn.addEventListener('click', saveUser);
username.addEventListener('blur', validateUsername);
password.addEventListener('blur', validatePassword);
