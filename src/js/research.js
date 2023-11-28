import { displayRecipes } from "./displayrecipes";
import { emptyResearch } from "./emptyResearch";
import { totalRecipes } from "./totalRecipes";
import { filterContainer } from "./domlinker";


function researchRecipes (searchTerm, recipes, container) {
    const matchingRecipes = search(recipes, searchTerm)
    if (searchTerm === '' || matchingRecipes.length === 0) {
        if (matchingRecipes.length === 0) {
            emptyResearch(container); 
        } else {
            displayRecipes(recipes, container); 
        }
        totalRecipes(recipes, filterContainer); 
    } else {
        displayRecipes(matchingRecipes, container); 
        totalRecipes(matchingRecipes, filterContainer);
    }
}
const search = (data, searchTerm) => {
    return data.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());

        return recipeName.includes(searchTerm) || ingredients.includes(searchTerm) || recipeDescription.includes(searchTerm);
    });
}
export { researchRecipes}