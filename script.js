const DEFAULTGRID = 10;
const DEFAULTCOLOR = '#333333';

let currentGrid = DEFAULTGRID;
let currentColor = DEFAULTCOLOR;
let inputGrid;

// Older Attempt
// function setCurrenGrid(newSize) {
// 	currentGrid = newSize;
// }

// function changeGrid(value) {
// 	setCurrentGrid(value);
// }

// from html oninput
function updateValue() {
	inputGrid = document.querySelector('.pixels-required').value;
}

console.log(inputGrid);

console.log(currentGrid);

////use input to change css variable

//// mulitply input x input and create divs

//// reset to blank

//// mousover event

///rainbow randow
