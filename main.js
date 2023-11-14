import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';

document.addEventListener('DOMContentLoaded', () => {
    const recipesList = document.querySelector('.recipes__list');
    displayRecipes(recipes, recipesList);
  });
