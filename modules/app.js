import { products, search } from './products.js';
import { buildProductsList } from './ui.js';

export function init() {
    buildProductsList(products);
    const searchBar = document.getElementById('product-search');
    searchBar.addEventListener('keyup',function(e){
        if (e.key === 'Enter') {
            buildProductsList(search(searchBar.value));
            // actualiser la liste à faire
        }
    });
}
