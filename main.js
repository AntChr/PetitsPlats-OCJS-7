import { recipes } from './data/recipes';
import { displayRecipes } from './src/js/displayrecipes';
import { recipesList, researchbar } from './src/js/domlinker';
import { researchRecipes } from './src/js/research';


displayRecipes(recipes, recipesList);

researchbar.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.length >= 3) {
        recipesList.innerHTML=''
        researchRecipes(searchTerm, recipes, recipesList);
    } else if (searchTerm.length === 0) {
        displayRecipes(recipes, recipesList);
    }
});