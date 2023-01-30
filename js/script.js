"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}


$("#slider").on("input change", (e) => {
    const sliderPos = e.target.value;
    $('.foreground-img').css('width', `${sliderPos}%`)
});