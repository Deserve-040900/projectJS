// JavaScript Document
window.onload = function() {
	var minutes = 00;
	var seconds = 00;
	var tens = 00;
	var appendMinutes = document.getElementById("minutes");
	var appendSeconds = document.getElementById("seconds");
	var appendTens = document.getElementById("tens");
	var buttonStart = document.getElementById("btn_start");
	var buttonStop = document.getElementById("btn_stop");
	var buttonReset = document.getElementById("btn_reset");
	var interval;
	
	buttonStart.onclick = function() {
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}
	
	buttonStop.onclick = function() {
		clearInterval(interval);
	}
	
	buttonReset.onclick = function() {
		clearInterval(interval);
		tens = "00";
		seconds = "00";
		minutes = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
		appendMinutes.innerHTML = minutes;
	}
	
	function startTimer() {
		tens++;
		if(tens < 9){
			appendTens.innerHTML = "0" + tens;
		}
		else if(tens > 9){
			appendTens.innerHTML = tens;
		}
		else if(tens > 99){
			console.log("seconds");
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}
		else if(seconds > 9){
			appendSeconds.innerHTML = seconds;
		}
		else if(seconds > 99){
			console.log("minutes");
			minutes++;
			appendMinutes.innerHTML = "0" + minutes;
			seconds = 0;
			appendSeconds.innerHTML = "0" + 0;
		}
		else if(minutes > 9){
			appendMinutes.innerHTML = minutes;
		}
	}
}