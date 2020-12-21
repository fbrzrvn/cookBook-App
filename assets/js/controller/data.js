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
  let result = [];
  recipes.forEach( recipe => {
    let searchInput = document.querySelector('[type="search"]').value;
    if (recipe.name.startsWith(searchInput)) {
      result.push(recipe);
    }
    searchInput = '';
  })
  return renderSearchResult(result);
}

const renderSearchResult = (result) => {
  console.log(result);
  if (result.length === 0) {
    document.querySelector('.home__container').innerHTML =
    `
      <div class="wrapper">
        <h2 class="error-msg">Not recipes found with that name 🚫 </h2>
        <a href="/">
          <span id="close-search" class="material-icons close-icon">cancel</span>
        </a>
      </div>
    `;
  } else {
    document.querySelector('.home__container').innerHTML =
      `
        <div class="home__container__title">
          <h3>Recipes found:</h3>
          <a href="/">
            <span id="close-search" class="material-icons close-icon">cancel</span>
          </a>
        </div>
        <div class="home__container__body">
          <div class="home__container__carousel">
            <div id="result" class="carousel no-slide"></div>
          </div>
        </div>
      `;
  }

  result.forEach(recipe => {
    let div = document.createElement('div');
    div.className = 'result';
    div.innerHTML =
      `
        <a href="#">
          <img src="${recipe.image}" alt="food">
        </a>
        <div class="result__details">
          <h4>${recipe.name}</h4>
          <button type="button" class="favorite-btn">
            <span class="material-icons">favorite_border</span>
          </button>
        </div>
      `;
    document.querySelector('.carousel.no-slide').appendChild(div);
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
          <button type="button" class="favorite-btn" >
            <span id="${el.name}" class="material-icons">favorite_border</span>
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