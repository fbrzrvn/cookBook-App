const addRecipe = (recipe) => {
  return localStorage.setItem('allRecipe', JSON.stringify(recipe));
}

const saveRecipe = (recipe) => {
  let recipesList = JSON.parse(localStorage.getItem('allRecipe')) || [];
  recipesList.push(recipe);
}

const renderRecipe = () => {
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  recipes.forEach( el => {
    let div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <a href="#">
        <img src="${el.image}" alt="food">
      </a>
      <div class="recipe__details">
        <h3>${el.name}</h3>
        <button type="button" class="favorite-btn" id="${el.name}">
          <span class="material-icons">favorite_border</span>
        </button>
      </div>`;

    switch (el.category) {
      case 'healthy and veggy':
        document.getElementById('healthy').appendChild(div);
        break;
      case 'international':
        document.getElementById('international').appendChild(div);
        break;
      case 'meat lover':
        document.getElementById('meat').appendChild(div);
        break;
      default:
        document.getElementById('popular').appendChild(div);
        break;
    }
  })
}


export { addRecipe, saveRecipe, renderRecipe };