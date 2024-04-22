window.addEventListener('scroll', function() {
    var overlay = document.querySelector('.overlay');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Update the overlay's opacity based on the scroll position
    overlay.style.opacity = Math.min(scrollTop / 100, 0.5); // Adjust the value (100 and 0.5) as needed
});

