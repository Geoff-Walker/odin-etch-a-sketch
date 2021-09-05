const DEFAULTGRID = 16;
const DEFAULTCOLOR = '#333333';

let currentGrid = DEFAULTGRID;
let currentColor = DEFAULTCOLOR;
let mode = 'color';

let pickedColor = document.getElementById('color-pick').value;
pickedColor.onchange = (e) => setCurrentColor(e.target.value);

document.documentElement.style.setProperty('--pixel-no', currentGrid);

// Click New Grid to update the number of pixels
function updateValue() {
	currentGrid = document.getElementById('pixels').value;
	////use input to change css variable
	document.documentElement.style.setProperty('--pixel-no', currentGrid);
	deleteDiv();

	for (let i = 0; i < currentGrid * currentGrid; i++) {
		//// mulitply input x input and create divs
		let createdDivs = document.createElement('div');
		createdDivs.className = 'pixel';
		createdDivs.addEventListener('mouseover', changeColor);
		document.querySelector('.container-grid').appendChild(createdDivs);
	}
	document.getElementById('btn-color').focus();
	mode = 'color';
}

function setCurrentColor() {
	pickedColor = currentColor;
}

function deleteDiv() {
	//// reset to blank
	document.querySelector('.container-grid').innerHTML = '';
}

function rainbow() {
	mode = 'rainbow';
}

function eraser() {
	mode = 'eraser';
}

function color() {
	mode = 'color';
	pickedColor = document.getElementById('color-pick').value;
	document.getElementById('btn-color').focus();
}

//// mousover event

// ///rainbow randow
function changeColor(e) {
	if (mode === 'color') {
		e.target.style.backgroundColor = pickedColor;
	} else if (mode === 'eraser') {
		e.target.style.backgroundColor = 'white';
	} else if (mode === 'rainbow') {
		let redRandom = Math.floor(Math.random() * 256);
		let greenRandom = Math.floor(Math.random() * 256);
		let blueRandom = Math.floor(Math.random() * 256);

		e.target.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
	}
}
