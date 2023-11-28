
function displayFilter(options, container) {
const filterContainer = document.createElement('div');
filterContainer.classList.add('filter');

const filterDropdown = document.createElement('select');
filterDropdown.classList.add('filter__dropdown');

options.forEach((option => {
    const filterOption = document.createElement('option');
        filterOption.setAttribute('class', 'filter__option');
        filterOption.setAttribute('value', option.name); 
        filterOption.textContent = option.name;
        filterDropdown.appendChild(filterOption);
}))
filterContainer.appendChild(filterDropdown);
container.appendChild(filterContainer);
}

export { displayFilter }