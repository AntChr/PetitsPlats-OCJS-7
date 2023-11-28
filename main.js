import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';
import { recipesList, researchbar, filterContainer, filterTotal} from './src/js/domlinker';
import { filterOptions} from './src/js/filter';
import { researchRecipes } from './src/js/research';
import { totalRecipes } from './src/js/totalRecipes';

filterOptions(recipes, filterContainer);
totalRecipes(recipes, filterTotal);
displayRecipes(recipes, recipesList);
researchbar.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm.length >= 3) {
        recipesList.innerHTML=''
        researchRecipes(searchTerm, recipes, recipesList);
    } else if (searchTerm.length === 0) {
        displayRecipes(recipes, recipesList);
        totalRecipes(recipes, filterTotal);
    }
});
