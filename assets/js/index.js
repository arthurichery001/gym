const burger = document.querySelector("#burger");
const menu = document.querySelector("#navbar");

burger.addEventListener('click', () => {
    if (navbar.classList.contains('navigation')) {
        navbar.classList.remove('navigation')
    } else {
        navbar.classList.add('navigation')
    }
});
