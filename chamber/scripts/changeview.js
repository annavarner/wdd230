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