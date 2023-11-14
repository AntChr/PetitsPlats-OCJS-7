
function displayRecipes(recipes, container) {
    if (recipes.length === 0) {
        console.log('Aucune recette à afficher.');
        return;
      }
    recipes.forEach((recipe => {

        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe__container');

        const recipeImg = document.createElement('img');
        recipeImg.setAttribute('src', `${recipe.image}`);
        recipeImg.setAttribute('alt', `${recipe.name} image`);
        recipeImg.setAttribute('class', 'recipe__image');

        const hTitle = document.createElement('h2');
        hTitle.classList.add('title');
        hTitle.textContent = recipe.name;

        const hRecette = document.createElement('h3');
        hRecette.textContent = 'RECETTE';

        const textRecette = document.createElement('p');
        textRecette.textContent = recipe.description;

        const hIngredients = document.createElement('h3');
        hIngredients.textContent = 'INGRÉDIENTS';

        const timecook = document.createElement('span');
        timecook.classList.add('recipe__time')
        timecook.textContent = recipe.time + 'min'

        recipeContainer.appendChild(recipeImg);
        recipeContainer.appendChild(hTitle);
        recipeContainer.appendChild(hRecette);
        recipeContainer.appendChild(textRecette);
        recipeContainer.appendChild(hIngredients);
        recipeContainer.appendChild(timecook);

        container.appendChild(recipeContainer);
    }))
}

export { displayRecipes };