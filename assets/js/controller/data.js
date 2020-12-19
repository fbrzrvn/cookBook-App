const addRecipe = (recipe) => {
  return localStorage.setItem('allRecipe', JSON.stringify(recipe));
}

const saveRecipe = (recipe) => {
  let recipesList = JSON.parse(localStorage.getItem('allRecipe')) || [];
  recipesList.push(recipe);
}

const searchRecipe = (e) => {
  e.preventDefault();
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  let searchInput = document.querySelector('[type="search"]').value;
  let allNames = recipes.map( el => el.name);
  let result = [];
  allNames.forEach( name => {
    if (name.startsWith(searchInput)) {
      if (!result.includes(name)) {
        result.push(name);
      }
    }
  })
  searchInput = '';
  return renderSearchResult(result);
}

const renderSearchResult = (result) => {
  document.querySelector('.home__container').innerHTML =
    `
      <div class="home__container__title">
        <h3>Recipes found:</h3>
      </div>
      <div class="home__container__carousel">
        <div id="result" class="carousel no-slide"></div>
      </div>
      `;

  result.forEach(recipe => {
    let div = document.createElement('div');
    div.className = 'result__recipe';
    div.innerHTML =
      `
        <a href="#">
          <img src="https://source.unsplash.com/200x200/?food,spanish" alt="food">
        </a>
        <div class="result__recipe__details">
          <h2>${recipe}</h2>
          <button type="button" class="favorite-btn" id="${recipe}">
            <span class="material-icons">favorite_border</span>
          </button>
        </div>
      `;
    document.querySelector('.home__container__carousel').appendChild(div);
  })
}

const renderRecipe = () => {
  let recipes = JSON.parse(localStorage.getItem('allRecipe'));
  recipes.forEach( el => {
    let div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML =
      `
        <a href="#">
          <img src="${el.image}" alt="food">
        </a>
        <div class="recipe__details">
          <h3>${el.name}</h3>
          <button type="button" class="favorite-btn" id="${el.name}">
            <span class="material-icons">favorite_border</span>
          </button>
        </div>
      `;

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


export { addRecipe, saveRecipe, searchRecipe, renderRecipe };