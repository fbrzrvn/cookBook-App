const changeFavoriteIcon = () => {
  const favoriteIcon = document.querySelectorAll('.favorite-btn');
  favoriteIcon.forEach(icon => {
    icon.addEventListener('click', e => {
      let targetEvent = e.target;
      console.log(e.target.id);
      if (e.target.textContent == 'favorite_border') {
        targetEvent.innerHTML = '<span class="material-icons">favorite</span>';
        addRecipeToFavorite(e.target.id);
      } else {
        targetEvent.innerHTML = '<span class="material-icons">favorite_border</span>';
      }
    })
  })
}

const addRecipeToFavorite = (id) => {
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  recipes.forEach( recipe => {
    if (recipe.name === id) {
      favorites.push(recipe);
      renderFavoriteRecipes(recipe);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  })
}

const renderFavoriteRecipes = (recipe) => {
  let div = document.createElement('div');
  div.className = 'favorite__recipes';
  div.innerHTML =
    `
      <a href="#">
        <img src="${recipe.image}" alt="food">
      </a>
      <div class="favorite__recipes__details">
        <p>${recipe.name}</p>
        <button type="button" class="favorite-btn">
          <span id="${recipe.name}" class="material-icons">favorite</span>
        </button>
      </div>
    `;
  document.querySelector('.favorite__carousel').appendChild(div);
}

export { changeFavoriteIcon };