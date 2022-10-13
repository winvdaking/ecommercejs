import { genericCalc } from "./ui.js";
import { removeAllChildNodes } from "./utils.js";

export let panier = JSON.parse(localStorage.getItem('panier')) ? JSON.parse(localStorage.getItem('panier')) : [];

setInterval(() => { localStorage.setItem('panier', JSON.stringify(panier)) }, 3000);

export function addToCart(product){
    if (panier.find(tab => tab.product.ref == product.ref)) {
        panier.find(tab => tab.product.ref == product.ref).qte+=1;
    }else{
        panier.push({product, qte: 1})
    }
}

export function emptyCart(){
    panier = [];
    removeAllChildNodes(document.getElementById('cart-content'));
    genericCalc(0, 0);
    localStorage.removeItem('panier');
}