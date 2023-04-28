 new Swiper('.swiper-container', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
});

function further() {
    let tablet = document.querySelectorAll('.slider-slides .table');
    let tablet_see = document.querySelectorAll('.slider-slides .see');
    let additionally = document.querySelectorAll('.slider-slides .additionally');
    let additionally_see_ad = document.querySelectorAll('.slider-slides .see_ad');
    let but = document.querySelector('.further');
    let brand = document.querySelector('.brand');

    console.log(brand)

    if (document.documentElement.clientWidth > 740 && document.documentElement.clientWidth < 1120) {

        if (but.textContent === 'Показать все') {

            tablet.forEach( function (element){
                element.classList.remove('table');
                element.classList.add('see');
            })

            but.textContent = 'Скрыть';
            but.classList.add('upheaval__bott','change');
            but.classList.remove('upheaval__top');
            brand.classList.add('paddin');

        } else {
            tablet_see.forEach( function (element){
                element.classList.remove('see');
                element.classList.add('table');
            })
            but.textContent = 'Показать все';
            but.classList.remove('upheaval__bott', 'change');
            but.classList.add('upheaval__top');
            brand.classList.remove('paddin');
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
            brand.classList.add('paddin');

        }else{

            additionally_see_ad.forEach( function (element){
                element.classList.remove('see_ad');
                element.classList.add('additionally');
            })
            but.textContent = 'Показать все';
            but.classList.remove('upheaval__bott', 'change');
            but.classList.add('upheaval__top');
            brand.classList.remove('paddin');
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
});

function active(){
    let burger = document.querySelectorAll('.burger');
    burger.forEach( function (element){
        element.classList.add('visible');
    })
}

function noActive(){
    let burger = document.querySelectorAll('.burger');
    burger.forEach( function (element){
        element.classList.remove('visible');
    })
}

 function furtherRepair() {
     let tabl = document.querySelectorAll('.slider-slides .tabl');
     let tabl_see = document.querySelectorAll('.slider-slides .see_repair');
     let but = document.querySelector('.further__repair');
     let brand = document.querySelector('.brand.repair');

     if (but.textContent === 'Показать все') {

         tabl.forEach( function (element){
             element.classList.remove('tabl');
             element.classList.add('see_repair');
         })

         but.textContent = 'Скрыть';
         but.classList.add('upheaval__bott','change');
         but.classList.remove('upheaval__top');
         brand.classList.add('paddin__repair');

     } else {
         tabl_see.forEach( function (element){
             element.classList.remove('see_repair');
             element.classList.add('tabl');
         })
         but.textContent = 'Показать все';
         but.classList.remove('upheaval__bott', 'change');
         but.classList.add('upheaval__top');
         brand.classList.remove('paddin__repair');
     }
 }

 function burgerBut(){
     let burger = document.querySelectorAll('.burger');
     burger.forEach( function (element){
         element.classList.remove('visible');
     })
 }