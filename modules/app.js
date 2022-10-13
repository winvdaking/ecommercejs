import { products, search } from './products.js';
import { buildProductsList } from './ui.js';
import { removeAllChildNodes } from './utils.js';

export function init() {
    buildProductsList(products);
    const searchBar = document.getElementById('product-search');
    searchBar.addEventListener('keyup',function(e){
        if (e.key === 'Enter') {
            removeAllChildNodes(document.getElementById('product-list'));
            buildProductsList(search(searchBar.value));
        }
    });
}   
