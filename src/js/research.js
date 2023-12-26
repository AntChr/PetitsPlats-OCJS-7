import { displayRecipes } from "./displayrecipes";
import { emptyResearch } from "./emptyResearch";
import { totalRecipes } from "./totalRecipes";
import { filterOptions} from "./filter";
import { displayTag } from "./displayTag";
import { logoClear } from "./domlinker";

let appliedFilters = [];

function researchRecipes(searchTerm, recipes) {
    let filteredRecipes = recipes;

    if (appliedFilters.length > 0) {
        filteredRecipes = [];
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            const filters = getRecipeFilters(recipe);
            const matchedFilters = appliedFilters.filter(filter => {
                return filters.allFilters.some(filterable => filterable.includes(filter));
            });

            if (matchedFilters.length === appliedFilters.length) {
                filteredRecipes.push(recipe);
            }
        }
    }

    const matchingRecipes = searchTerm.length >= 3 ? search(filteredRecipes, searchTerm) : filteredRecipes;
    if (matchingRecipes.length === 0) {
        emptyResearch();
    } else {
        displayRecipes(matchingRecipes);
    }
    totalRecipes(matchingRecipes);
    filterOptions(matchingRecipes);
    if (searchTerm === '') {
        logoClear.classList.remove('active');
    }
}

function updatedRecipes(filteredRecipes) {
    displayRecipes(filteredRecipes);
    totalRecipes(filteredRecipes);
    filterOptions(filteredRecipes);
}

function filterRecipes(selectedOption, recipes) {
    if (!appliedFilters.includes(selectedOption)) {
        appliedFilters.push(selectedOption);
        displayTag(selectedOption);
    }

    const filteredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const filters = getRecipeFilters(recipe);
        const matchedFilters = appliedFilters.filter(filter => {
            return filters.allFilters.some(filterable => filterable.includes(filter));
        });

        if (matchedFilters.length === appliedFilters.length) {
            filteredRecipes.push(recipe);
        }
    }

    updatedRecipes(filteredRecipes);
}

function removeFilter(filterToRemove, recipes, searchTerm) {
    let index = -1;
    
    for (let i = 0; i < appliedFilters.length; i++) {
        if (appliedFilters[i] === filterToRemove) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        
        for (let i = index; i < appliedFilters.length - 1; i++) {
            appliedFilters[i] = appliedFilters[i + 1];
        }
        appliedFilters.pop();

        let filteredRecipes;
        if (appliedFilters.length > 0) {
            filteredRecipes = searchFilter(recipes, appliedFilters);
        } else {
            filteredRecipes = searchTerm.length >= 3 ? search(recipes, searchTerm) : recipes;
        }

        updatedRecipes(filteredRecipes);
    }
}

function getRecipeFilters(recipe) {
    const recipeName = recipe.name.toLowerCase();
    const recipeDescription = recipe.description.toLowerCase();
    const appliance = recipe.appliance.toLowerCase();
    const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());

    return {
        recipeName,
        recipeDescription,
        appliance,
        ingredients,
        ustensils,
        allFilters: [recipeName, ...ingredients, recipeDescription, appliance, ...ustensils]
    };
}

function search(data, searchTerm) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
        const {
            recipeName,
            recipeDescription,
            appliance,
            ingredients,
            ustensils
        } = getRecipeFilters(data[i]);

        if (
            recipeName.includes(searchTerm) ||
            ingredients.includes(searchTerm) ||
            recipeDescription.includes(searchTerm) ||
            appliance.includes(searchTerm) ||
            ustensils.includes(searchTerm)
        ) {
            results.push(data[i]);
        }
    }
    return results;
}

function searchinFilter(data, searchTerm) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
        const {
            appliance,
            ingredients,
            ustensils
        } = getRecipeFilters(data[i]);

        if (
            ingredients.includes(searchTerm) ||
            appliance.includes(searchTerm) ||
            ustensils.includes(searchTerm)
        ) {
            results.push(data[i]);
        }
    }
    return results;
}

function searchFilter(data, appliedFilters) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
        const {
            recipeName,
            recipeDescription,
            appliance,
            ingredients,
            ustensils,
            allFilters
        } = getRecipeFilters(data[i]);

        const matchedFilters = appliedFilters.filter(filter => {
            return allFilters.some(filterable => filterable.includes(filter));
        });

        if (matchedFilters.length === appliedFilters.length) {
            results.push(data[i]);
        }
    }
    return results;
}

export { researchRecipes, filterRecipes, removeFilter, searchinFilter };