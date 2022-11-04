//Insert current date in header

const datefield = document.querySelector(".date");
const joinDate = document.querySelector(".join-date");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `${fulldate}`;

joinDate.innerHTML = `${now}`;