//Refazer o menu mobile na parte de cima
$(document).ready(function () {
    //Alternar exibição de menu no clique do button
    $('#menu-btn').on('click', function () {
        $('.navbar').toggleClass('active');
        $(this).toggleClass('fa-times'); //Altere o icone
    });
    //Fechar menu ao clicar em um link do menu
    $('.navbar a').on('click', function () {
        $('.navbar').removeClass('active');
        $('#menu-btn').removeClass('fa-times');
    });
})
//Fim Menu Mobile

//Swipper;
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//Fim swipper
ScrollReveal().reveal('.title', {
    origin: 'top',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.subtitle', {
    origin: 'top',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.product', {
    origin: 'bottom',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.myImg', {
    origin: 'top',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.items', {
    origin: 'bottom',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.faqItems', {
    origin: 'left',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('#devE', {
    origin: 'bottom',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.imgF', {
    origin: 'bottom',
    duration: 3000,
    distance: '10%',
});

//Modal
var modal = document.getElementById("myModal");
//// Pegue a imagem e insira-a dentro do modal - use seu texto "alt" como legenda;
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Pegar as imagens com a class myImg;
var imgs = document.getElementsByClassName("myImg");
// Pegue a imagem que foi clicada e insira-a dentro do modal;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}
//Obtenha o elemento <span> que fecha o modal;
var span = document.getElementsByClassName("close")[0];
//Quando o usuário clicar em <span> (x), feche o modal;
span.onclick = function () {
    modal.style.display = "none";
}

//Alterando datas da postagens Testimonials;
const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();

let date01 = document.getElementById("date01");
date01.innerHTML = `Postado no dia ${dia - 7}/${mes - 2}/${ano}`;
let date02 = document.getElementById("date02");
date02.innerHTML = `Postado no dia ${dia - 1}/${mes - 1}/${ano - 3}`;
let date03 = document.getElementById("date03");
date03.innerHTML = `Postado no dia ${dia}/${mes}/${ano}`;
let date04 = document.getElementById("date04");
date04.innerHTML = `Postado no dia ${dia - 5}/${mes - 1}/${ano - 2}`;
//Fim alteração das datas;

//Perguntas frequentes;
function toggleFaq(container) {
    var content = container.querySelector('.content_faq');
    var icon = container.querySelector('i');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}