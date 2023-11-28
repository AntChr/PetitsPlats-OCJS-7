
function emptyResearch(container) {
    const emptyTitle = document.createElement('h2')
    emptyTitle.classList.add('emptyTitle')
    emptyTitle.textContent='Aucun résultat trouvé pour cette recherche'

    container.appendChild(emptyTitle)
}

export { emptyResearch }