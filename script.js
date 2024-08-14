const navbar = document.querySelector('.navigationLink');
const mobileNavToggle = document.querySelector('.mobileNavToggle');

mobileNavToggle.addEventListener('click', () => {
    const visible = navbar.getAttribute('data-visible');
    visible === "false" ? navbar.setAttribute('data-visible', true) :  navbar.setAttribute('data-visible', false);
    visible === "false" ? mobileNavToggle.setAttribute('aria-expanded', true) : mobileNavToggle.setAttribute('aria-expanded', false);
})