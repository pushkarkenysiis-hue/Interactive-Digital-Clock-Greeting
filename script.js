let is24Hour =  true;

let Greetings = document.querySelector("#greeting");
let Time = document.querySelector("#timeDisplay");
let btn = document.querySelector("#toggleTime");

function padZero(number) {
    return String(number).padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let amPm = '';

    if(hours < 12){
        Greetings.innerText = "Good Morning";
    }else if(hours < 18){
        Greetings.innerText = "Good Afternoon";
    }else{
        Greetings.innerText = "Good Evening";
    }

    if(!is24Hour){
        amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);

    Time.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}${amPm}`;
}

setInterval(updateClock, 1000);
updateClock();

btn.addEventListener("click",() =>{
    is24Hour = !is24Hour;

    if (is24Hour) {
        btn.innerText = "Switch to 12-Hour";
    } else {
        btn.innerText = "Switch to 24-Hour";
    }

    updateClock();
});