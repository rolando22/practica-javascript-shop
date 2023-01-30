const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnNavCart = document.querySelector('.navbar-shopping-cart');
const cart = document.querySelector('.shopping-cart-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click', toggleMobileMenu);
btnNavCart.addEventListener('click', toggleCart);

function toggleDesktopMenu () {
    cart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    cart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCart () {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cart.classList.toggle('inactive');
}
