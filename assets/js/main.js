var button = document.getElementById("hamburger");

var menu = document.getElementById("mobile-menu");

button.addEventListener('click', function () {
    menu.classList.toggle('open');
});

function hideMenu() {
    menu.classList.remove('open');
}

var menuLinks = document.querySelectorAll("#mobile-menu a");
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', hideMenu);
}