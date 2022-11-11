
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");

}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;

// change view on directory page to grid or list
const gridbutton = document.querySelector("#viewGrid");
const listbutton = document.querySelector("#viewList");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid")
    display.classList.remove("list");
})

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})