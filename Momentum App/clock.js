const clockContainer = document.querySelector(".clock")
const clockTitle = clockContainer.querySelector("h1")
const calendarTitle = clockContainer.querySelector("h2")
const ampmnow = document.querySelector('[data-ampm]')

function getTime(){
	let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
    let weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
    let now = weekday[date.getDay()];

    var ampm = hours >= 12 ? 'pm' : 'am';
    if (hours   < 10) {
        hours   = "0"+date.getHours();
    }
    if (minutes < 10) {
        minutes = "0"+date.getMinutes();
    }
    if (seconds < 10) {
        seconds = "0"+date.getSeconds();
    }
    if (hours >12){
        hours = hours % 12;
        hours = hours ? hours : 12;
    }
    calendarTitle.innerText = now + " "+  (month+1) + "/" +day +"/"+ year;
    clockTitle.innerText = hours + ':' +minutes+ ':' + seconds + ' '+ ampm;
    if (hours >0){
        ampmnow.innerText = "Good morning";
    }
    if (hours>12){
        ampmnow.innerText = "Good noon";
    }
    if (hours>13){
        ampmnow.innerText = "Good afternoon";
    }

    if (hours>18){
        ampmnow.innerText = "Good evening";
    }
    
}


function init(){
	getTime();
	setInterval(getTime, 1000); // Not getTime()
}

init();