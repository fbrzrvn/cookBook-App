import { saveUser, validateUsername, validatePassword } from './components/auth/register.js';
import { validateUserLogin, checkIfAuth } from './components/auth/login.js';
import { logout } from './components/auth/logout.js';
import { activeNavbar, showCreateNewRecipe, showLastRecipe, showUserProfile } from './components/navbar.js';
import { recipe } from './data/recipe.js';
import { addRecipe, renderRecipe, saveRecipe, searchRecipe } from './controller/data.js';
import { scrollLeft, scrollRight } from './components/carousel.js';
import { changeFavoriteIcon } from './components/favorite.js';

const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const hamburger = document.querySelector('#hamburger');
const userProfileBtn = document.getElementById('user-profile');
const createNewRecipe = document.getElementById('create-new-recipe');
// const lastestRecipes = document.getElementById('recently-added');
const arrowLeftCarousel = document.getElementById('left-arrow');
const arrowRightCarousel = document.getElementById('right-arrow');
const searchInput = document.getElementById('search-input');



window.addEventListener('DOMContentLoaded', checkIfAuth, false);
registerUsername.addEventListener('blur', validateUsername);
registerPassword.addEventListener('blur', validatePassword);
registerBtn.addEventListener('click', saveUser);
loginBtn.addEventListener('click', validateUserLogin);
logoutBtn.addEventListener('click', logout);
hamburger.addEventListener('click', activeNavbar);
userProfileBtn.addEventListener('click', showUserProfile);
createNewRecipe.addEventListener('click', showCreateNewRecipe);
// lastestRecipes.addEventListener('click', showLastRecipe);
arrowLeftCarousel.addEventListener('click', scrollLeft);
arrowRightCarousel.addEventListener('click', scrollRight);
searchInput.addEventListener('submit', searchRecipe);

// saveRecipe(recipe);
// addRecipe(recipe);
renderRecipe();
changeFavoriteIcon();

