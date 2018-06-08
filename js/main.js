function show_about() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'block';
}

function show_contact() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
}

function show_projects() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
}

function scroll_down() {
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}