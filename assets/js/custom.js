// applying background color a fixed navigation menu 

document.getElementById('#fullpage').ready(function(e) {
    var dropdown = document.getElementById('mainNav');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});