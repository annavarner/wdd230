
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("open");

}
let menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
    menu.classList.toggle("clicked")
});

const x = document.querySelector(".hamburger")
x.onclick = toggleMenu;

// change view on directory page to grid or list
