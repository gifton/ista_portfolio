function show_projects() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('project-btn').setAttribute('color', 'green');
    document.getElementById('contacts-btn').setAttribute('color', 'black');
    document.getElementById('about-btn').setAttribute('color', 'black');
}

function show_about() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('about-btn').setAttribute('color', 'green');
    document.getElementById('contacts-btn').setAttribute('color', 'black');
    document.getElementById('project-btn').setAttribute('color', 'black');
}

function show_contact() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('contact-btn').setAttribute('color', 'green');
    document.getElementById('project-btn').setAttribute('color', 'black');
    document.getElementById('about-btn').setAttribute('color', 'black');
}

function scroll_down() {
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}