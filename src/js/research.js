import { displayRecipes } from "./displayrecipes";
import { emptyResearch } from "./emptyResearch";
import { totalRecipes } from "./totalRecipes";
import { filterOptions} from "./filter";


function researchRecipes(searchTerm, recipes) {
    const matchingRecipes = searchTerm.length >= 3 ? search(recipes, searchTerm) : recipes
    matchingRecipes.length === 0 ? emptyResearch() : displayRecipes(matchingRecipes)
    totalRecipes(matchingRecipes)
    filterOptions(matchingRecipes);
}
const filterRecipes = (selectedOption, recipes) => {
    const filteredRecipes = search(recipes, selectedOption);
    displayRecipes(filteredRecipes);
    totalRecipes(filteredRecipes);
    filterOptions(filteredRecipes);
  };
const search = (data, searchTerm) => {
    return data.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const appliance = recipe.appliance.toLowerCase();
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());

        return recipeName.includes(searchTerm) || ingredients.includes(searchTerm) || recipeDescription.includes(searchTerm) || appliance.includes(searchTerm) || ustensils.includes(searchTerm);
    });
}
export { researchRecipes, filterRecipes }