// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let menuTogglerEvents = selectElement('.menu-toggle-events');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

menuTogglerEvents.addEventListener('click', function() {
    body.classList.toggle('open');
});