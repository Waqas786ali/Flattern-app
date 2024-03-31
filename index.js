burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navbarlist = document.querySelector('.navbar_list')


burger.addEventListener('click', ()=>{
    navbarlist.classList.toggle('navbar_list');
})