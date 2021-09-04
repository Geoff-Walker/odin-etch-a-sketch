const DEFAULTGRID = 16;
const DEFAULTCOLOR = '#333333';

let currentGrid = DEFAULTGRID;
let currentColor = DEFAULTCOLOR;

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
		createdDivs.addEventListener('mouseover', (event) => {
			//change colour function to be inserted below
			console.log('Mouse out');
		});

		document.querySelector('.container-grid').appendChild(createdDivs);
	}
}

function deleteDiv() {
	//// reset to blank
	document.querySelector('.container-grid').innerHTML = '';
}

//// mousover event

// ///rainbow randow
