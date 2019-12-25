//Define Timer
let timer;

//Select DOM Elements
const second = document.getElementById('second');
const minute = document.getElementById('minute');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

//Start Timer Event
start.addEventListener('click', (e) => {
	e.preventDefault();
	let m = parseInt(minute.textContent);
	let sec = parseInt(second.textContent);

	//Prevent stacking multiple events
	clearInterval(timer);

	//start count
	timer = setInterval(() => {
		sec++;
		sec == 60 && m++;
		sec == 60 && (sec = 0);
		m == 60 && (m = 0);
		minute.textContent = m < 10 ? '0' + m : m;
		second.textContent = sec < 10 ? '0' + sec : sec;
	}, 1000);
});

//Stop Timer Event
stop.addEventListener('click', (e) => {
	e.preventDefault();
	clearInterval(timer);
});
