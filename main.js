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

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
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