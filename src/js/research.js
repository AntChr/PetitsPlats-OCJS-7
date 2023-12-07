import { displayRecipes } from "./displayrecipes";
import { emptyResearch } from "./emptyResearch";
import { totalRecipes } from "./totalRecipes";
import { filterOptions} from "./filter";
import { displayTag } from "./displayTag";
import { logoClear } from "./domlinker";

let appliedFilters = [];
function researchRecipes(searchTerm, recipes) {
    const matchingRecipes = searchTerm.length >= 3 ? search(recipes, searchTerm) : recipes
    matchingRecipes.length === 0 ? emptyResearch() : displayRecipes(matchingRecipes)
    totalRecipes(matchingRecipes)
    filterOptions(matchingRecipes);
    if(searchTerm ==='') {
        logoClear.classList.remove('active')
    }
}

 function updatedRecipes (filteredRecipes) {
    displayRecipes(filteredRecipes);
    totalRecipes(filteredRecipes);
    filterOptions(filteredRecipes);
 }
function filterRecipes (selectedOption, recipes) {
    if (!appliedFilters.includes(selectedOption)) {
        appliedFilters.push(selectedOption);
        displayTag(selectedOption);
    } 

    const filteredRecipes = searchFilter(recipes, appliedFilters);
    updatedRecipes(filteredRecipes)
  };

  function removeFilter(filterToRemove, recipes) {
    const index = appliedFilters.indexOf(filterToRemove);

    if (index !== -1) {
        appliedFilters.splice(index, 1);

        const filteredRecipes = appliedFilters.length > 0 ? searchFilter(recipes, appliedFilters) : recipes;

        updatedRecipes(filteredRecipes)

    }
}

  const search = (data, searchTerm) => {
    return data.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const appliance = recipe.appliance.toLowerCase();
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());
        logoClear.classList.add('active')

        return recipeName.includes(searchTerm) || ingredients.includes(searchTerm) || recipeDescription.includes(searchTerm) || appliance.includes(searchTerm) || ustensils.includes(searchTerm);
    });
}

    const searchinFilter = (data, searchTerm) => {
        return data.filter(recipe => {
            const appliance = recipe.appliance.toLowerCase();
            const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
            const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());
    
            return ingredients.includes(searchTerm) || appliance.includes(searchTerm) || ustensils.includes(searchTerm);
        });
    }

  const searchFilter = (data, appliedFilters) => {
    return data.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const appliance = recipe.appliance.toLowerCase();
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());

        const allFilters = [recipeName, ...ingredients, recipeDescription, appliance, ...ustensils];

        const matchedFilters = appliedFilters.filter(filter => {
            return allFilters.some(filterable => filterable.includes(filter));
        });

        return matchedFilters.length === appliedFilters.length;
    });
}

export { researchRecipes, filterRecipes, removeFilter, searchinFilter }