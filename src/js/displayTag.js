import { tagContainer, researchbar} from "./domlinker";
import { removeFilter } from "./research";
import { recipes } from "../../data/recipes"

function displayTag(appliedFilter) {
    const tags = document.createElement('div');
    tags.classList.add('tag');
    
    const searchTerm = researchbar.value.toLowerCase();

    const tagTitle = document.createElement('span');
    tagTitle.classList.add('tag__title');
    tagTitle.textContent = appliedFilter;

    const tagRemove = document.createElement('i');
    tagRemove.classList.add('fa-solid', 'fa-xmark');
    tagRemove.addEventListener('click', () => {
        removeFilter(appliedFilter, recipes,researchbar.value.toLowerCase()); 
        tags.remove();
    });

    tags.appendChild(tagTitle);
    tags.appendChild(tagRemove);

    tagContainer.appendChild(tags);
}

export { displayTag }