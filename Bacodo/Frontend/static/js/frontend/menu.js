const menuMb = document.querySelector(".menu-mobile2");
const btnMenuMb = document.querySelector(".nav-toggle1");
const btnCloseMenuMb = document.querySelector(".right-menu-top")
btnMenuMb.onclick = () => {
    menuMb.style.display = 'block'
}
btnCloseMenuMb.onclick = () => {
    menuMb.style.display = 'none'
}
