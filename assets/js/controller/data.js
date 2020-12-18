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
    div.innerHTML = `<img src="${el.image}" alt="food">`;
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