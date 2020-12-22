const changeFavoriteIcon = () => {
  const favoriteIcon = document.querySelectorAll('.favorite-btn');

  favoriteIcon.forEach(icon => {

    icon.addEventListener('click', e => {
      let targetEvent = e.target;

      if (e.target.textContent == 'favorite_border') {
        targetEvent.innerHTML = '<span class="material-icons">favorite</span>';
        addFavoriteToStorage(e);
      } else {
        targetEvent.innerHTML = '<span class="material-icons">favorite_border</span>';
        // removeRecipeToFavorite(icon);
      }
    })
  })
}


const addFavoriteToStorage = element => {
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  let favorites = JSON.parse(sessionStorage.getItem('favoriteRecipes')) || [];

  let foundRecipe = recipes.find(recipe => recipe.name === element.target.id);

  let index = recipes.indexOf(foundRecipe);
  if (index !== -1) {
    recipes[index].favorite = true;
    console.log(recipes[index]);
    console.log(recipes);
  }

  localStorage.setItem('allRecipe', JSON.stringify(recipes));

  if (favorites.includes(foundRecipe)) {
    return;
  } else {
    favorites.push(foundRecipe);
    sessionStorage.setItem('favoriteRecipes', JSON.stringify(favorites));

    renderAddedFavoriteRecipe(foundRecipe);
  }
}


// const removeRecipeToFavorite = (icon) => {
//   let favoriteRecipes = JSON.parse(sessionStorage.getItem('favoriteRecipes'));
//   let targetId = icon.children[0].id;

//   let targetElement = favoriteRecipes.filter(recipe => recipe.name === targetId);
//   targetElement.forEach(recipe => recipe.favorite = false);

//   console.log(favoriteRecipes);
// }


const renderAddedFavoriteRecipe = (recipe) => {

  if (!recipe) return;

  let div = document.createElement('div');
  div.className = 'favorite__recipes';
  div.id = recipe.name,
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



export { changeFavoriteIcon, renderAddedFavoriteRecipe };