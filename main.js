const menuBtn = document.getElementById('menu');
const menu = document.querySelector('header ul');

function toggleMenu(){
    menu.classList.toggle('active');
}

menuBtn.onclick = toggleMenu;