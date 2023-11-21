import { displayRecipes } from "./displayrecipes";
import { researchbar } from "./domlinker";


function researchRecipes (searchTerm, recipes, container) {
    const matchingRecipes = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());

        return recipeName.includes(searchTerm) || ingredients.includes(searchTerm) || recipeDescription.includes(searchTerm);

    });
    if (searchTerm === '' || matchingRecipes.length === 0) {
        displayRecipes(recipes, container);
    } else {
        displayRecipes(matchingRecipes, container);
    }
}

export { researchRecipes}