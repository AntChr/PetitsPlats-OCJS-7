import { displayRecipes } from "./displayrecipes";
import { emptyResearch } from "./emptyResearch";
import { totalRecipes } from "./totalRecipes";
import { filterOptions} from "./filter";
import { displayTag } from "./displayTag";
import { logoClear } from "./domlinker";

let appliedFilters = [];

function updatedRecipes(filteredRecipes) {
    displayRecipes(filteredRecipes);
    totalRecipes(filteredRecipes);
    filterOptions(filteredRecipes);
}

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
        updatedRecipes(matchingRecipes);
    }
    if (searchTerm === '') {
        logoClear.classList.remove('active');
    }
}

function filterRecipes (selectedOption, recipes, searchTerm) {
    if (!appliedFilters.includes(selectedOption)) {
        appliedFilters.push(selectedOption);
        displayTag(selectedOption);
    }
    const filteredRecipes = searchFilter(recipes, appliedFilters, searchTerm);
    updatedRecipes(filteredRecipes)
  };

function removeFilter(filterToRemove, recipes, searchTerm) {
    const index = appliedFilters.indexOf(filterToRemove);

    if (index !== -1) {
        appliedFilters.splice(index, 1);
        if (searchTerm !== '') {
            const filteredRecipes = appliedFilters.length === 0 ? search(recipes, searchTerm) : searchFilter(recipes, appliedFilters, searchTerm);
            updatedRecipes(filteredRecipes);
        } else {
            researchRecipes(searchTerm, recipes);
        }
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
            ingredients,
        } = getRecipeFilters(data[i]);

        if (
            recipeName.includes(searchTerm) ||
            ingredients.includes(searchTerm) ||
            recipeDescription.includes(searchTerm)
        ) {
            results.push(data[i]);
        }
    }
    return results;
}

const searchinFilter = (data, searchTerm) => {
    return data.filter(recipe => {
        const {
            appliance,
            ingredients,
            ustensils
        } = getRecipeFilters(recipe);
        return ingredients.includes(searchTerm) && appliance.includes(searchTerm) && ustensils.includes(searchTerm);
    });
};

const searchFilter = (data, appliedFilters, searchTerm) => {
    return data.filter(recipe => {
        const {
            recipeName,
            recipeDescription,
            ingredients,
            allFilters
        } = getRecipeFilters(recipe);
        const matchedFilters = appliedFilters.filter(filter => {
            return allFilters.some(filterable => filterable.includes(filter));
        });
        const matchesSearchTerm = (
            recipeName.includes(searchTerm) ||
            ingredients.includes(searchTerm) ||
            recipeDescription.includes(searchTerm)
        );
        return matchedFilters.length === appliedFilters.length && matchesSearchTerm;
    });
};

export { researchRecipes, filterRecipes, removeFilter, searchinFilter };