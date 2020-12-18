const addRecipe = (recipe) => {
  return localStorage.setItem('allRecipe', JSON.stringify(recipe));
}

const saveRecipe = (recipe) => {
  let recipesList = JSON.parse(localStorage.getItem('allRecipe')) || [];
  recipesList.push(recipe);
}


export { addRecipe, saveRecipe };