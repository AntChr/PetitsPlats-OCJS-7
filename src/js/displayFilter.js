function displayFilter(options, container, name) {

container.innerHTML='';

const filterDropdown = document.createElement('select');
filterDropdown.classList.add('filter__dropdown');

const specificOption = document.createElement('option');
  specificOption.setAttribute('class', 'filter__option');
  specificOption.setAttribute('value', 'Specific Option');
  specificOption.textContent = name;
  filterDropdown.appendChild(specificOption);

options.forEach((option => {
    const filterOption = document.createElement('option');
        filterOption.setAttribute('class', 'filter__option');
        filterOption.setAttribute('value', option.name); 
        filterOption.textContent = option.name;
        filterDropdown.appendChild(filterOption);
}))
container.appendChild(filterDropdown);
}

export { displayFilter }