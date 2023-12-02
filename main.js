import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';
import { recipesList, researchbar, filterIngredients, filterUstensils, filterAppareils} from './src/js/domlinker';
import { filterOptions} from './src/js/filter';
import { researchRecipes, filterRecipes } from './src/js/research';
import { totalRecipes } from './src/js/totalRecipes';

filterOptions(recipes);
totalRecipes(recipes);
displayRecipes(recipes, recipesList);
researchbar.addEventListener('input', e => researchRecipes(e.target.value.toLowerCase(), recipes));
filterIngredients.addEventListener('change', e => filterRecipes(e.target.value.toLowerCase(), recipes));
filterUstensils.addEventListener('change', e => filterRecipes(e.target.value.toLowerCase(), recipes));
filterAppareils.addEventListener('change', e => filterRecipes(e.target.value.toLowerCase(), recipes));
