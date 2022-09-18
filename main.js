const openMenubtn = document.querySelector('.navbar .menu');
const closeMenubtn = document.querySelector('.navbar .close');
const navLink = document.querySelector('.navlink');

openMenubtn.onclick = () => {
    navLink.style.left = "0";
}
closeMenubtn.onclick = () => {
    navLink.style.left = "-100%";
}

const serviceArrow = document.querySelector('.service-arrow');
serviceArrow.onclick = () => {
    navLink.classList.toggle('show1');
}
const moreArrow = document.querySelector('.more-arrow');
moreArrow.onclick = () => {
    navLink.classList.toggle('show2');
}
const productArrow = document.querySelector('.product-arrow');
productArrow.onclick = () => {
    navLink.classList.toggle('show3');
}

// search btn
const nav = document.querySelector('.navbar');
const searchbtn = document.querySelector('.search-box .bx-search-alt-2');
searchbtn.onclick = () => {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        searchbtn.classList.replace('bx-search-alt-2','bx-x')
    } else {
        searchbtn.classList.replace('bx-x','bx-search-alt-2')    }
}