let panier = [];

export function addToCart(product){
    // bug
    if (panier.find(pdt => pdt.ref === product.ref)) {
        panier.find(pdt => pdt.ref === product.ref).qte+=1;
    }else{
        panier.push({product, qte: 1})
    }
    console.log(panier);
}