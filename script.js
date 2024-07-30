let header = document.querySelector('header');
let menu = document.querySelector('#altRight');
let navbar = document.querySelector('.navbar');
let menu8HTML = document.querySelector('.menu-box');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

menu8HTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_menu8 = positionClick.parentElement.dataset.id;
        addToCart(id_menu8);
       
    }
})



