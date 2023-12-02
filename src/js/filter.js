import { displayFilter } from "./displayfilter";
import { filterIngredients, filterUstensils, filterAppareils } from "./domlinker";

function filterOptions(recipes) {
    const ingredients = filterUniqueItems(recipes, 'ingredients');
    const ustensils = filterUniqueItems(recipes, 'ustensils');
    const appliance = filterUniqueItems(recipes, 'appliance');
    displayFilter(ingredients, filterIngredients, 'Ingrédients');
    displayFilter(ustensils, filterUstensils, 'Ustensiles');
    displayFilter(appliance, filterAppareils, 'Appareils');
}

const filterUniqueItems = (data, property) => {
    let itemsSet = new Set();

    data.forEach(recipe => {
        if (property === 'appliance') {
            itemsSet.add(recipe[property]);
        } else {
            recipe[property].forEach(item => {
                itemsSet.add(item.ingredient || item);
            });
        }
    });

    const uniqueItems = Array.from(itemsSet);

    return uniqueItems.map(item => {
        if (typeof item === 'object') {
            return { name: item.ingredient };
        } else {
            return { name: item };
        }
    });
}

export { filterOptions};