document.addEventListener('DOMContentLoaded', function() {
    var productContainer = document.getElementById('container');

    productContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('product')) {
            window.location.href = '/view_details/';
        }
    });

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