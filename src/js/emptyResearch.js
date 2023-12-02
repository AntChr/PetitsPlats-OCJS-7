import { recipesList } from "./domlinker"


function emptyResearch() {
    recipesList.innerHTML = ''
    const emptyTitle = document.createElement('h2')
    emptyTitle.classList.add('emptyTitle')
    emptyTitle.textContent = 'Aucun résultat trouvé pour cette recherche'

    recipesList.appendChild(emptyTitle)
}

export { emptyResearch }