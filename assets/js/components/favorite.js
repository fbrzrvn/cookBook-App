const addToFavorite = () => {
  const favoriteIcon = document.querySelectorAll('.favorite-btn');
  favoriteIcon.forEach(icon => {
    icon.addEventListener('click', e => {
      let targetEvent = e.target;
      if (e.target.textContent == 'favorite_border') {
        targetEvent.innerHTML = '<span class="material-icons">favorite</span>';
      } else {
        targetEvent.innerHTML = '<span class="material-icons">favorite_border</span>';
      }
    })
  })
}

export { addToFavorite };