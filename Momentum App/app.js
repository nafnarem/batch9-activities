const clockContainer = document.querySelector(".clock")
const clockTitle = clockContainer.querySelector("h1")

function getTime(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

    if (hours   < 10) {
        hours   = "0"+date.getHours();
    }
    if (minutes < 10) {
        minutes = "0"+date.getMinutes();
    }
    if (seconds < 10) {
        seconds = "0"+date.getSeconds();
    }

	clockTitle.innerText = hours + ':' +minutes+ ':' + seconds;
}

function init(){
	getTime();
	setInterval(getTime, 1000); // Not getTime()
}

init();