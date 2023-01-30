const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnNavCart = document.querySelector('.navbar-shopping-cart');
const cart = document.querySelector('.shopping-cart-detail');
const productDetail = document.querySelector('.product-detail-container');
const btnProductDetailClose = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click', toggleMobileMenu);
btnNavCart.addEventListener('click', toggleCart);
btnProductDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu () {
    cart.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    cart.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCart () {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    cart.classList.toggle('inactive');
}

function openProductDetail () {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cart.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail () {
    productDetail.classList.add('inactive');
}

function initArray () {
    let products = [];

    for (let i = 0; i < 20; i++) {
        products.push({
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });
    }
    return products;
}

function renderProducts () {
    const products = initArray();
    const cardsContainer = document.querySelector('.cards-container');

    for (let product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price.toString().replace('.', ',')}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const addCartIcon = document.createElement('img');
        addCartIcon.setAttribute('src', './icons/Platzi_YardSale_Icons/bt_add_to_cart.svg');
        addCartIcon.setAttribute('alt', 'Add-Cart Icon');

        productInfoFigure.appendChild(addCartIcon);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts();
