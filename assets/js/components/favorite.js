const changeFavoriteIcon = () => {
  const favoriteIcon = document.querySelectorAll('.favorite-btn');

  favoriteIcon.forEach(icon => {

    icon.addEventListener('click', e => {
      let targetEvent = e.target;

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
      <div class="favorite__recipe__card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="favorite__recipe__card__title">
          <h2>${recipe.name}</h2>
          <button type="button" class="favorite-btn">
            <span class="material-icons">favorite</span>
          </button>
        </div>
        <div class="favorite__recipe__card__body">
          <div class="favorite__recipe__card__body-ingridients">
            <h4>Ingridients</h4>
              <p>${recipe.ingridients}</p>
          </div>
          <div class="favorite__recipe__card__body-description">
            <h4>Description</h4>
            <p>${recipe.description}</p>
          </div>
        </div>
      </div>
    `;

  document.querySelector('.favorite').appendChild(div);
}



export { changeFavoriteIcon, renderFavoriteRecipes };