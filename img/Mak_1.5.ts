
function further() {
    let slider_inner = document.querySelectorAll(".slider-slides > button");
    let but = document.querySelector('.further');

    slider_inner.classList.remove('tablet');
    but.textContent = 'Скрыть';
}
