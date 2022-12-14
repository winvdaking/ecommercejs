import { products, search } from './products.js';
import { buildProductsList, displayCart } from './ui.js';
import { removeAllChildNodes } from './utils.js';
import { emptyCart, panier } from './cart.js';

export function init() {
    buildProductsList(products);
    const searchBar = document.getElementById('product-search');
    searchBar.addEventListener('keyup',function(e){
        if (e.key === 'Enter') {
            removeAllChildNodes(document.getElementById('product-list'));
            buildProductsList(search(searchBar.value));
        }
    });

    document.getElementById('empty-cart').addEventListener('click', (handler) => {
        emptyCart();
    });
    
    displayCart(panier);
}   
