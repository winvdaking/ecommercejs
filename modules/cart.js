export let panier = [];

export function addToCart(product){
    if (panier.find(tab => tab.product.ref == product.ref)) {
        panier.find(tab => tab.product.ref == product.ref).qte+=1;
    }else{
        panier.push({product, qte: 1})
    }
    console.log(panier);
}