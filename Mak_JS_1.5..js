new Swiper('.swiper-container', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    speed: 700,
});

function further() {
    let tablet = document.querySelectorAll('.slider-slides .table');
    let tablet_see = document.querySelectorAll('.slider-slides .see');
    let additionally = document.querySelectorAll('.slider-slides .additionally');
    let additionally_see_ad = document.querySelectorAll('.slider-slides .see_ad');
    let but = document.querySelector('.further');

    if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1120) {

        if (but.textContent === 'Показать все') {

            tablet.forEach( function (element){
                element.classList.remove('table');
                element.classList.add('see');
            })

            but.textContent = 'Скрыть';
            but.classList.add('upheaval__bott','change');
            but.classList.remove('upheaval__top');

        } else {
            tablet_see.forEach( function (element){
                element.classList.remove('see');
                element.classList.add('table');
            })
            but.textContent = 'Показать все';
            but.classList.remove('upheaval__bott', 'change');
            but.classList.add('upheaval__top');
        }

    }

    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent === 'Показать все') {

            additionally.forEach( function (element){
                element.classList.remove('additionally');
                element.classList.add('see_ad');
            })

            but.textContent = 'Скрыть';
            but.classList.add('upheaval__bott', 'change');
            but.classList.remove('upheaval__top');

        }else{

            additionally_see_ad.forEach( function (element){
                element.classList.remove('see_ad');
                element.classList.add('additionally');
            })
            but.textContent = 'Показать все';
            but.classList.remove('upheaval__bott', 'change');
            but.classList.add('upheaval__top');
        }
    }
}


window.addEventListener('resize', function() {
    let tablet = document.querySelectorAll('.slider-slides .table');
    let tablet_see = document.querySelectorAll('.slider-slides .see');
    let additionally = document.querySelectorAll('.slider-slides .additionally');
    let additionally_see_ad = document.querySelectorAll('.slider-slides .see_ad');
    let but = document.querySelector('.further');

    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent !== 'Показать все') {
            tablet_see.forEach( function (element){
                element.classList.remove('see');
                element.classList.add('table');
            })
        }
    }
    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent !== 'Показать все') {
            additionally.forEach( function (element){
                element.classList.remove('additionally');
                element.classList.add('see_ad');
            })
        }
    }

    if (document.documentElement.clientWidth < 1120) {

        if (but.textContent !== 'Показать все') {
            additionally_see_ad.forEach( function (element){
                element.classList.remove('see_ad');
                element.classList.add('additionally');
            })
        }
    }
    if (document.documentElement.clientWidth < 1120) {

        if (but.textContent !== 'Показать все') {
            tablet.forEach( function (element){
                element.classList.remove('table');
                element.classList.add('see');
            })
        }
    }
})



