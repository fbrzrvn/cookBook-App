import { saveUser, validateUsername, validatePassword } from './components/auth/register.js';
import { validateUserLogin, checkIfAuth } from './components/auth/login.js';
import { logout } from './components/auth/logout.js';
import { activeNavbar, showCreateNewRecipe, showHome, showUserProfile } from './components/navbar.js';
import { recipe } from './data/recipe.js';
import { addNewRecipe, renderRecipe, renderRecipeDetails, saveRecipe, searchRecipe } from './controller/data.js';
import { scrollLeft, scrollRight } from './components/carousel.js';
import { changeFavoriteIcon, renderAddedFavoriteRecipe } from './components/favorite.js';



const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const hamburger = document.querySelector('#hamburger');
const homeBtn = document.getElementById('home-btn');
const userProfileBtn = document.getElementById('user-profile');
const createNewRecipe = document.getElementById('create-new-recipe');
const arrowLeftCarousel = document.getElementById('left-arrow');
const arrowRightCarousel = document.getElementById('right-arrow');
const searchInput = document.getElementById('search-input');
const newRecipeBtn = document.getElementById('new-recipe-btn');
const recipes = document.querySelectorAll('.home__container__carousel .carousel');



window.addEventListener('DOMContentLoaded', () => {
  checkIfAuth();
  // saveRecipe(recipe);
  renderRecipe();
  changeFavoriteIcon();

  let favoriteRecipes = JSON.parse(localStorage.getItem('allRecipe'));
  favoriteRecipes.forEach(recipe => {
    if (recipe.favorite === true) renderAddedFavoriteRecipe(recipe);
  })
}, false);


registerUsername.addEventListener('blur', validateUsername);
registerPassword.addEventListener('blur', validatePassword);
registerBtn.addEventListener('click', saveUser);
loginBtn.addEventListener('click', validateUserLogin);
logoutBtn.addEventListener('click', logout);
hamburger.addEventListener('click', activeNavbar);
homeBtn.addEventListener('click', showHome);
userProfileBtn.addEventListener('click', showUserProfile);
createNewRecipe.addEventListener('click', showCreateNewRecipe);
arrowLeftCarousel.addEventListener('click', scrollLeft);
arrowRightCarousel.addEventListener('click', scrollRight);
searchInput.addEventListener('submit', searchRecipe);
newRecipeBtn.addEventListener('click', addNewRecipe);
recipes.forEach(recipe => {
  recipe.addEventListener('click', renderRecipeDetails);
})




