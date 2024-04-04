let burger = document.querySelector('.menu-line__burger'),
    menu = document.querySelector('.menu-line__menu');

burger.onclick = function (){
    menu.classList.toggle('menu-line__menu_active');
}