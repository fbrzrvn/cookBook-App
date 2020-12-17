const activeNavbar = () => {
  const hamburger = document.querySelector('#hamburger');
  const navbar = document.querySelector('#navbar-links');
  navbar.classList.toggle('navbar-active');
  hamburger.classList.toggle('close');
}

const showUserProfile = () => {
  document.getElementById('home').classList.add('hide');
  document.getElementById('user').classList.remove('hide');
}

export { activeNavbar, showUserProfile };