import { addToCart } from './cart.js';

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


/*
                    <div class="photo">
                        <span class="mdi mdi-camera"></span>
                        <a class="product-add2cart">
                            <span class="mdi mdi-cart"></span>
                        </a>
                    </div>
                    <div class="details">
                        <div class="details-top">
                            <strong class="bigger" data-type="ref">#REF1</strong>
                            <strong class="bigger" data-type="price">250,29&nbsp;€</strong>
                        </div>
                        <div class="details-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                */