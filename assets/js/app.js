const header = document.getElementById("header");
function toggleHeaderClass() {
    if (window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}
toggleHeaderClass();
window.addEventListener("scroll", toggleHeaderClass);


function openFeedback() {
    $('.feedback_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeFeedback() {
    $('.feedback_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup__close').on('click', closeFeedback);

$('.feedback_popup__open').on('click', openFeedback);


function openCatalog() {
    $('.feedback_popup_catalog').addClass('active');
    $('body').addClass('no-scroll');
}

function closeCatalog() {
    $('.feedback_popup_catalog').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup_catalog__close').on('click', closeCatalog);

$('.feedback_popup_catalog__open').on('click', openCatalog);


function openUplot() {
    $('.feedback_popup_uplot').addClass('active');
    $('body').addClass('no-scroll');
}

function closeUplot() {
    $('.feedback_popup_uplot').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup_uplot__close').on('click', closeUplot);

$('.feedback_popup_uplot__open').on('click', openUplot);

function openCall() {
    $('.feedback_popup_call').addClass('active');
    $('body').addClass('no-scroll');
}

function closeCall() {
    $('.feedback_popup_call').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup_call__close').on('click', closeCall);

$('.feedback_popup_call__open').on('click', openCall);


function openMethod() {
    $('.feedback_popup_method').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMethod() {
    $('.feedback_popup_method').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup_method__close').on('click', closeMethod);

$('.feedback_popup_method__open').on('click', openMethod);



const about_gallery__swiper = new Swiper('.about_gallery__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 12,

    navigation: {
        nextEl: '.about_gallery__swiper__next',
        prevEl: '.about_gallery__swiper__prev',
    },

});



const tabs = document.querySelectorAll(".gallery_page__tab_btn input");
const contents = document.querySelectorAll(".tab-content");

function showContent(id) {
    contents.forEach(content => {
        content.style.display = content.id === id ? "block" : "none";
    });
}

tabs.forEach(tab => {
    tab.addEventListener("change", function () {
        showContent("content-" + this.id.split("-")[2]);
    });
});



