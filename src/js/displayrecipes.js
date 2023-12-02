import { recipesList } from "./domlinker";

function displayRecipes(recipes) {

    recipesList.innerHTML = ''

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

        const ingredientsContainer = document.createElement('div');
        ingredientsContainer.classList.add('recipe__ingredients__container');

        recipe.ingredients.forEach((ingredient => {

            const ingredientContainer = document.createElement('div');
            ingredientContainer.classList.add('recipe__ingredients__container__ingredient');

            const ingredientTitle = document.createElement('p');
            ingredientTitle.textContent = ingredient.ingredient;

            const ingredientQuantity = document.createElement('div');
            ingredientQuantity.classList.add('ingredient__quantity');

            const ingredientQuantityNumber = document.createElement('span');
            ingredientQuantityNumber.textContent = ingredient.quantity;

            const ingredientQuantityUnit = document.createElement('span')

            switch (ingredient.unit) {
                case "ml":
                    ingredientQuantityUnit.textContent = "ml"
                    break;
                case "cl":
                    ingredientQuantityUnit.textContent = "cl"
                    break;
                case "":
                    ingredientQuantityUnit.textContent = ""
                    break;
                case "cuillères à soupe":
                    ingredientQuantityUnit.textContent = " cuillères"
                    break;
                case "grammes":
                    ingredientQuantityUnit.textContent = "g"
                    break;
                case "kg":
                    ingredientQuantityUnit.textContent = "kg"
                    break;
                case "sachets":
                    ingredientQuantityUnit.textContent = "sachets"
                    break;
            }

            ingredientQuantity.appendChild(ingredientQuantityNumber);
            ingredientQuantity.appendChild(ingredientQuantityUnit);
            ingredientContainer.appendChild(ingredientTitle);
            ingredientContainer.appendChild(ingredientQuantity);

            ingredientsContainer.appendChild(ingredientContainer);

        }))

        const timecook = document.createElement('span');
        timecook.classList.add('recipe__time')
        timecook.textContent = recipe.time + 'min'

        recipeContainer.appendChild(recipeImg);
        recipeContainer.appendChild(hTitle);
        recipeContainer.appendChild(hRecette);
        recipeContainer.appendChild(textRecette);
        recipeContainer.appendChild(hIngredients);
        recipeContainer.appendChild(timecook);
        recipeContainer.appendChild(ingredientsContainer);



        recipesList.appendChild(recipeContainer);
    }))
}

export { displayRecipes };