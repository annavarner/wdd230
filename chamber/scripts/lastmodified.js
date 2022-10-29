//Insert current year after copyright sign in footer

let date = new Date();
let year = date.getFullYear();
document.querySelector(".currentyear").textContent = year;


//Insert last modified date in footer

const lastMod = new Date(document.lastModified);

const formatted = lastMod.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

document.getElementById("lastupdated").innerHTML = formatted;

//display number of days since last visit

const visits = document.getElementById("visit");
let lastVisit = Number(window.localStorage.getItem("visit-date"));
let today = Date.now()

//calculate how many days by subtracing last visit from today, then convert milliseconds to days and round to
//nearest whole number

let milliseconds = (today - lastVisit);
days = (milliseconds / 86,400,000)
rounded = Math.round(days)
//change local storage value to today & display number of days since last visit
localStorage.setItem("lastVisit", today);
visits.textContent = rounded;


