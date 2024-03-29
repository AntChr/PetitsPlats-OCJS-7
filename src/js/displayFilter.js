import { filterRecipes } from "./research";
import { recipes } from "../../data/recipes";
import { researchbar } from "./domlinker";


function displayFilter(options, container, name) {
  container.innerHTML = '';

  const filterDiv = document.createElement('div');
  filterDiv.classList.add('custom-dropdown'); 

  const filterHeader = document.createElement('div');
  filterHeader.classList.add('dropdown-header');
  const filterTitle = document.createElement('h3');
  filterTitle.textContent = name; 

  const arrowIcon = document.createElement('span');
  arrowIcon.classList.add('arrow-icon');
  arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
  <path d="M1 1L7.5 7L14 1" stroke="#1B1B1B" stroke-linecap="round"/>
  </svg>`;
  filterHeader.appendChild(filterTitle);
  filterHeader.appendChild(arrowIcon);
  const filterOptionsDiv = document.createElement('div');
  filterOptionsDiv.classList.add('dropdown-list');

  const filterSearchBar = document.createElement('input');
  filterSearchBar.setAttribute('type', 'text');
  filterSearchBar.classList.add('filter__search');
  const filterSearchLoop = document.createElement('button');
  filterSearchLoop.setAttribute('type', 'submit');
  filterSearchLoop.classList.add('button_research_filter');
  const loupeImage = document.createElement('i');
  loupeImage.classList.add('fa-solid', 'fa-magnifying-glass');
  const clearlogo = document.createElement('i');
  clearlogo.classList.add('fa-solid', 'fa-xmark', 'clear__logo__filter');
  filterSearchLoop.appendChild(clearlogo);
  filterSearchLoop.appendChild(loupeImage);
  filterOptionsDiv.appendChild(filterSearchLoop);
  filterOptionsDiv.appendChild(filterSearchBar);

  options.forEach(option => {
    const filterOption = document.createElement('div');
    filterOption.classList.add('dropdown-item');
    filterOption.textContent = option.name; 
    filterOptionsDiv.appendChild(filterOption);
  });

  filterDiv.appendChild(filterHeader);
  filterDiv.appendChild(filterOptionsDiv);
  container.appendChild(filterDiv);

  filterHeader.addEventListener('click', () => {
    filterOptionsDiv.classList.toggle('active');
    arrowIcon.classList.toggle('active');
  });
  const filterItems = filterOptionsDiv.querySelectorAll('.dropdown-item');

  filterSearchBar.addEventListener('input', e => {
    filterItems.forEach(item => {
      const itemName = item.textContent.toLowerCase();
      if (itemName.includes(e.target.value.toLowerCase())) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    if(e.target.value.toLowerCase().length >= 3) {
      console.log('ok')
      clearlogo.style.display = 'block';
    } else {
      clearlogo.style.display = 'none';
    }
  });
  filterItems.forEach(item => {
    item.addEventListener('click', (e) => {filterRecipes(e.target.textContent.toLowerCase(), recipes, researchbar.value.toLowerCase());
    });
  });
}

export { displayFilter };