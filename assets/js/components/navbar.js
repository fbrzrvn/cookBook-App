const activeNavbar = () => {
  const hamburger = document.querySelector('#hamburger');
  const navbar = document.querySelector('#navbar-links');
  navbar.classList.toggle('navbar-active');
  hamburger.classList.toggle('close');
}

const showUserProfile = () => {
  document.getElementById('home').classList.add('hide');
  document.getElementById('user').classList.remove('hide');
  document.getElementById('new-recipe').classList.add('hide');
  document.getElementById('last-recipe').classList.add('hide');
}

const showCreateNewRecipe = () => {
  document.getElementById('home').classList.add('hide');
  document.getElementById('user').classList.add('hide');
  document.getElementById('new-recipe').classList.remove('hide');
  document.getElementById('last-recipe').classList.add('hide');
}

const showLastRecipe = () => {
  document.getElementById('home').classList.add('hide');
  document.getElementById('user').classList.add('hide');
  document.getElementById('new-recipe').classList.add('hide');
  document.getElementById('last-recipe').classList.remove('hide');
}

export { activeNavbar, showUserProfile, showCreateNewRecipe, showLastRecipe };