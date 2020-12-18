import { saveUser, validateUsername, validatePassword } from './components/auth/register.js';
import { validateUserLogin, checkIfAuth } from './components/auth/login.js';
import { logout } from './components/auth/logout.js';
import { activeNavbar, showCreateNewRecipe, showLastRecipe, showUserProfile } from './components/navbar.js';
import { recipe } from './data/recipe.js';
import { addRecipe, saveRecipe } from './controller/data.js';

const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const hamburger = document.querySelector('#hamburger');
const userProfileBtn = document.getElementById('user-profile');
const createNewRecipe = document.getElementById('create-new-recipe');
const lastestRecipes = document.getElementById('recently-added');

window.addEventListener('load', checkIfAuth, false);
registerUsername.addEventListener('blur', validateUsername);
registerPassword.addEventListener('blur', validatePassword);
registerBtn.addEventListener('click', saveUser);
loginBtn.addEventListener('click', validateUserLogin);
logoutBtn.addEventListener('click', logout);
hamburger.addEventListener('click', activeNavbar);
userProfileBtn.addEventListener('click', showUserProfile);
createNewRecipe.addEventListener('click', showCreateNewRecipe);
lastestRecipes.addEventListener('click', showLastRecipe);

saveRecipe(recipe);
addRecipe(recipe);