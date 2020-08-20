
var cells = document.getElementsByTagName("td")

var cellsHH1 = document.getElementsByClassName("HH1")

var cellsHH0 = document.getElementsByClassName("HH0")

var cellsPHOEBE = document.getElementsByClassName("PHOEBE")

for (var i = 0; i < cells.length; i++) {
	var cell = cells[i]
	
	cell.onclick = cellClick
}

function cellClick (e) {
	var cell = e.target

	if (cell.classList.contains("selected")) {
		cell.classList.remove("selected");
	} else {
		cell.classList.add("selected")
	}
}

var speed = 80

// KICK.
window.setInterval(function(){
  advanceStep()
}, speed);

var index = 0;

function advanceStep () {
	cells[index].classList.remove("executing")
	index++ 

	if (index >= 16) {
		index = 0;
	}

	if (cells[index].classList.contains("selected")) {
		var audio = new Audio('./audio/kick.wav');
		audio.play();
	}

	cells[index].classList.add("executing")
	}


	// HH1.
window.setInterval(function(){
  advanceStepHH1()
}, speed);

var indexHH1 = 0;

function advanceStepHH1 () {
	cellsHH1[indexHH1].classList.remove("executing")
	indexHH1++ 

	if (indexHH1 >= 16) {
		indexHH1 = 0;
	}

	if (cellsHH1[indexHH1].classList.contains("selected")) {
		var audio = new Audio('./audio/HH1.wav'); 
		audio.play();
	}

	cellsHH1[indexHH1].classList.add("executing")
	}
	
	//HH0
	window.setInterval(function(){
  advanceStepHH0()
}, speed);

var indexHH0 = 0;

function advanceStepHH0 () {
	cellsHH0[indexHH0].classList.remove("executing")
	indexHH0++ 

	if (indexHH0 >= 16) {
		indexHH0 = 0;
	}

	if (cellsHH0[indexHH0].classList.contains("selected")) {
		var audio = new Audio('./audio/HH0.wav'); 
		audio.play();
	}

	cellsHH0[indexHH0].classList.add("executing")
}


//PHOBE!!!
window.setInterval(function(){
  advanceStepPHOEBE()
}, speed);

var indexPHOEBE = 0;

var phoebeAudio = new Audio('./audio/PHOEBEV0.wav')

function advanceStepPHOEBE () {
	cellsPHOEBE[indexPHOEBE].classList.remove("executing")
	indexPHOEBE++ 

	var PHOEBENUMBER = Math.floor(Math.random() * 7); 

	if (indexPHOEBE >= 16) {
		indexPHOEBE = 0;
	}

	if (cellsPHOEBE[indexPHOEBE].classList.contains("selected")) {

		if (isPlaying(phoebeAudio)) {
			phoebeAudio.pause()
		}

		phoebeAudio.src = './PHOEBEV' + PHOEBENUMBER +'.wav'; 
		phoebeAudio.play();
	}

	cellsPHOEBE[indexPHOEBE].classList.add("executing")
}
function isPlaying(audelem) { return !audelem.paused; }