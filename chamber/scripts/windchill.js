

//get degrees and wind speed from website
let degrees=document.getElementById("degrees");
let temp = degrees.textContent;
temp = Number(temp);

let windSpeed=document.getElementById("wind-speed");
let speed = windSpeed.textContent;
speed = Number(speed);

//if statement to determine if wind chill should be calculated
//temperature must be <=50° F AND wind speed >= 3.0 mph
if (temp <= 50  && speed >= 3.0) {
// calculate wind chill from degrees and wind speed
    const chill = 
        35.74 + 
        0.6215 * temp - 
        35.75 * speed ** 0.16 +
        0.4275 * temp * speed ** 0.16;

    //round result & insert windchill into wind-chill span 
    document.getElementById("wind-chill").textContent = Math.round(chill);
}
else {
    document.getElementById("wind-chill").textContent = "N/A";
}