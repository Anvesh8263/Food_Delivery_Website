let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onlick = () => {
    navbar.classList.toggle('active')
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onlick = () => {
    searchform.classList.toggle('active')
}