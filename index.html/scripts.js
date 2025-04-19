// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // Get the navbar
    const navbar = document.querySelector('.navbar');

    // Function to handle the scroll event
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});
