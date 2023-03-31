function further() {
    let tablet = document.querySelectorAll('.slider-slides .table');
    let tablet_see = document.querySelectorAll('.slider-slides .see');
    let additionally = document.querySelectorAll('.slider-slides .additionally');
    let additionally_see = document.querySelectorAll('.slider-slides .see');
    let but = document.querySelector('.further');

    if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1120) {

        if (but.textContent === 'Показать все') {

            for (let i = 0; i < tablet.length; i++) {
                tablet[i].classList.remove('table');
                tablet[i].classList.add('see');
            }

            but.textContent = 'Скрыть';
            but.classList.add('permission', 'upheaval__bott', 'izmena');

        } else {

            for (let i = 0; i < tablet_see.length; i++) {
                tablet_see[i].classList.remove('see');
                tablet_see[i].classList.add('table');
                but.textContent = 'Показать все';
            }
            but.classList.remove('upheaval__bott', 'permission', 'izmena');
        }
    }

    if (document.documentElement.clientWidth > 1120) {

        if (but.textContent === 'Показать все') {

            for ( let i = 0; i < additionally.length; i++){
                additionally[i].classList.remove('additionally');
                additionally[i].classList.add('see');
            }

            but.textContent = 'Скрыть';
            but.classList.add('permission', 'upheaval__bott', 'izmena');

        }else if (but.textContent === 'Скрыть'){

            for ( let i = 0; i < additionally_see.length; i++) {
                additionally_see[i].classList.remove('see');
                additionally_see[i].classList.add('additionally');
                but.textContent = 'Показать все';
            }

            but.classList.remove('upheaval__bott', 'permission', 'izmena');
        }
    }
}

