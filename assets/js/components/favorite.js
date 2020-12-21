const changeFavoriteIcon = () => {
  const favoriteIcon = document.querySelectorAll('.favorite-btn');
  favoriteIcon.forEach(icon => {
    icon.addEventListener('click', e => {
      let targetEvent = e.target;
      console.log(e.target.id);
      if (e.target.textContent == 'favorite_border') {
        addRecipeToFavorite(e.target.id);
        targetEvent.innerHTML = '<span class="material-icons">favorite</span>';
      } else {
        removeRecipeToFavorite(icon);
        targetEvent.innerHTML = '<span class="material-icons">favorite_border</span>';
      }
    })
  })
}

const addRecipeToFavorite = (id) => {
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  let favorites = JSON.parse(sessionStorage.getItem('favoriteRecipes')) || [];
  recipes.forEach( recipe => {
    if (recipe.name === id) {
      favorites.push(recipe);
      renderFavoriteRecipes(recipe);
    }
    sessionStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  })
}

const removeRecipeToFavorite = (icon) => {
  let recipes = JSON.parse(sessionStorage.getItem('favoriteRecipes'));
  let targetId = icon.children[0].id;
  recipes = recipes.filter(recipe => recipe.name !== targetId);
  sessionStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
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

export { changeFavoriteIcon, renderFavoriteRecipes };