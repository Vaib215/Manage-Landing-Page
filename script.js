const ham = document.querySelector('.ham');
const menu = document.querySelector('nav');
let menuToggled = false;
const toggleMenu = () => {
    menuToggled = !menuToggled;
    let hamImg = ham.querySelector('img')
    hamImg.src = menuToggled ? './images/icon-close.svg' : './images/icon-hamburger.svg';
    menu.classList.toggle('hidden');
}

ham.addEventListener('click', toggleMenu);