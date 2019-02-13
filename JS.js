var seconds = Number(prompt("Введіть кількість секунд"));
var hours = 0, minutes = 0;

while(seconds > 3600) {
	hours++;
	seconds = seconds - 3600;
}

while(seconds > 60) {
	minutes++;
	seconds = seconds - 60;
}

alert("Time in UTF " + hours + ':' + minutes + ':' + seconds);

