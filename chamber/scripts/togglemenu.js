
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");

}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;

// change view on directory page to grid or list
