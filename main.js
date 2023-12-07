import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';
import { recipesList, researchbar, clear} from './src/js/domlinker';
import { filterOptions} from './src/js/filter';
import { researchRecipes} from './src/js/research';
import { totalRecipes } from './src/js/totalRecipes';

filterOptions(recipes);
totalRecipes(recipes);
displayRecipes(recipes, recipesList);
researchbar.addEventListener('input', e => researchRecipes(e.target.value.toLowerCase(), recipes));
clear.addEventListener('click', () => {researchbar.value = ''; researchRecipes('', recipes) });


