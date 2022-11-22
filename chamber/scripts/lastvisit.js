//display number of days since last visit

const visits = document.querySelector("visit");
let lastVisit = Number(window.localStorage.getItem("visit-date"));
let today = Date.now()

//calculate how many days by subtracing last visit from today, then convert milliseconds to days and round to
//nearest whole number

let milliseconds = (today - lastVisit);
days = (milliseconds / 86,400,000)
rounded = Math.round(days)
//change local storage value to today & display number of days since last visit
localStorage.setItem("lastVisit", today);
visits.innerHTML = `${rounded}`;
