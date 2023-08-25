document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('home').addEventListener('click', function(e) {
        window.location.href = '/home/';
    });

    document.getElementById('wishlist').addEventListener('click', function(e) {
        window.location.href = '/wishlist/';
    });

    document.getElementById('appointments').addEventListener('click', function(e) {
        window.location.href = '/appointments/';
    });

    document.getElementById('about').addEventListener('click', function(e) {
        window.location.href = '/about/';
    });
});