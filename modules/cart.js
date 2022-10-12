let panier = Array();

export function addToCart(product){
    panier.forEach((pdt) => {
        if (pdt == product) {
            panier[pdt].qte++;
        }else{
            panier.push([pdt, qte=1])
        }
    });
}