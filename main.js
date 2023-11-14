import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';
import { recipesList } from './src/js/domlinker';

displayRecipes(recipes, recipesList);
