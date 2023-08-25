document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('home').addEventListener('click', function(e) {
        window.location.href = '/home/';
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