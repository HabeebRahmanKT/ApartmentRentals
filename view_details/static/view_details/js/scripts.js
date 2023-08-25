document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('wishlist').addEventListener('click', function(e) {
        window.location.href = '/wishlist/';
    });

    document.getElementById('appointments').addEventListener('click', function(e) {
        window.location.href = '/appointments/';
    });

    document.getElementById('list').addEventListener('click', function(e) {
        window.location.href = '/list/';
    });

    document.getElementById('about').addEventListener('click', function(e) {
        window.location.href = '/about/';
    });
});