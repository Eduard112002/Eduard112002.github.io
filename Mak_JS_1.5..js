
function further() {
    let tablet = document.querySelectorAll('.slider-slides .table');
    let tablet_see = document.querySelectorAll('.slider-slides .see');
    let additionally = document.querySelectorAll('.slider-slides .additionally');
    let additionally_see_ad = document.querySelectorAll('.slider-slides .see_ad');
    let but = document.querySelector('.further');

    if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1120) {

        if (but.textContent === 'Показать все') {

            for (let i = 0; i < tablet.length; i++) {
                tablet[i].classList.remove('table');
                tablet[i].classList.add('see');
            }

            but.textContent = 'Скрыть';
            but.classList.add('upheaval__bott', 'izmena');

        } else {
            for (let i = 0; i < tablet_see.length; i++) {
                tablet_see[i].classList.remove('see');
                tablet_see[i].classList.add('table');
                but.textContent = 'Показать все';
            }
            but.classList.remove('upheaval__bott', 'izmena');
        }

    }

    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent === 'Показать все') {

            for ( let i = 0; i < additionally.length; i++){
                additionally[i].classList.remove('additionally');
                additionally[i].classList.add('see_ad');
            }

            but.textContent = 'Скрыть';
            but.classList.add('upheaval__bott', 'izmena');

        }else{

            for ( let i = 0; i < additionally_see_ad.length; i++) {
                additionally_see_ad[i].classList.remove('see_ad');
                additionally_see_ad[i].classList.add('additionally');
                but.textContent = 'Показать все';
            }

            but.classList.remove('upheaval__bott', 'izmena');
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
            for (let i = 0; i < tablet_see.length; i++) {
                tablet_see[i].classList.remove('see');
                tablet_see[i].classList.add('table');
            }
        }
    }
    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent !== 'Показать все') {
            for ( let i = 0; i < additionally.length; i++){
                additionally[i].classList.remove('additionally');
                additionally[i].classList.add('see_ad');
            }
        }
    }

    if (document.documentElement.clientWidth < 1120) {

        if (but.textContent !== 'Показать все') {
            for (let i = 0; i < additionally_see_ad.length; i++) {
                additionally_see_ad[i].classList.remove('see_ad');
                additionally_see_ad[i].classList.add('additionally');
            }
        }
    }
    if (document.documentElement.clientWidth < 1120) {

        if (but.textContent !== 'Показать все') {
            for ( let i = 0; i < tablet.length; i++){
                tablet[i].classList.remove('table');
                tablet[i].classList.add('see');
            }
        }
    }
})



