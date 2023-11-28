function totalRecipes(recipes,container) {

    const totalRecipes = document.createElement('h3')
    totalRecipes.classList.add('totalRecipes')
    totalRecipes.textContent=`${recipes.length} Recettes`

    container.appendChild(totalRecipes)
}

export { totalRecipes }