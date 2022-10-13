import { addToCart, panier } from './cart.js';

/**
 * @param {*} product 
 */
function displayProduct(product) {
    const divProductList = document.getElementById('product-list');
    const divProduct = document.createElement('div');
    divProduct.classList.add("product");
    const divPhoto = document.createElement('div');
    divPhoto.classList.add("photo");
    const spanMdiCamera = document.createElement('span');
    spanMdiCamera.classList.add("mdi"); 
    spanMdiCamera.classList.add("mdi-camera");
    const aProduct = document.createElement('a')
    aProduct.classList.add("product-add2cart");
    const spanMdiCart = document.createElement('span');
    spanMdiCart.classList.add("mdi");
    spanMdiCart.classList.add("mdi-cart");
    const divDetails = document.createElement('div');
    divDetails.classList.add('details');
    const divDetailsTop = document.createElement('div');
    divDetailsTop.classList.add('details-top');
    const strongRef = document.createElement('strong');
    strongRef.classList.add("bigger");
    const strongPrice = document.createElement('strong');
    strongPrice.classList.add("bigger");
    const divDetailsDescription = document.createElement('div');
    divDetailsDescription.classList.add('details-description');
    
    divPhoto.appendChild(spanMdiCamera);
    spanMdiCamera.appendChild(aProduct);
    aProduct.appendChild(spanMdiCart);
    divDetails.appendChild(divDetailsTop);
    divDetailsTop.append(strongRef, strongPrice);
    divDetails.appendChild(divDetailsDescription);

    strongRef.innerText = product.ref;
    strongRef.dataset.ref = product.ref;
    strongPrice.innerText = product.price;
    strongPrice.dataset.price = product.price;
    divDetailsDescription.innerText = product.description;

    divProduct.append(divPhoto, divDetails);
    divProductList.appendChild(divProduct);

    aProduct.addEventListener('click', function(e){
        addToCart(product);
        displayCart(panier);
    });
}

/**
 * @param {*} tabProducts 
 */
export function buildProductsList(tabProducts){
    tabProducts.forEach(product => {
        displayProduct(product);
    });
}

/**
 * @param {*} panier 
 */
export function displayCart(panier){
    const table = document.getElementById('cart-content');

    panier.forEach(line => {
        const tr = document.createElement('tr');
        const tdRef = document.createElement('td');
        const tdQte = document.createElement('td');
        const tdAmout = document.createElement('td');
        tdRef.dataset.ref = line.product.ref;
        tdQte.dataset.qte = line.qte;
        tdAmout.dataset.amout = line.qte * line.product.price;

        tdRef.innerHTML = line.product.ref;
        tdQte.innerHTML = line.qte;
        tdAmout.innerHTML = line.qte * line.product.price;

        tr.append(tdRef, tdQte, tdAmout);
        table.appendChild(tr);
    });
}

function genericCalc(){

}


/*
<tr>
	<td data-type="ref">#REF2</td>
	<td data-type="qte">x2</td>
    <td data-type="amount">258,50€</td>
</tr>
*/