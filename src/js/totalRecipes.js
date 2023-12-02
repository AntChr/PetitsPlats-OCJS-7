import { h3TotalRecipes } from "./domlinker"

function totalRecipes(recipes) {

    h3TotalRecipes.textContent = `${recipes.length} Recettes`
}

export { totalRecipes }