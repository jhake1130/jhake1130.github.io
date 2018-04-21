var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")
var audio = document.querySelector("#myAudio")

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquaresListeners();
	reset()
}

function setupModeButtons() {
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");//this refers to what was clicked on
			this.textContent ==="Easy" ? numSquares =3: numSquares =6; //if easy then num is 3 otherwise is 6
			//change if medium modes
			reset() // if u click it it resets the screen to 3 squares
		});
	}
}

function setupSquaresListeners() {
	for(var i=0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.background
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			resetButton.textContent="Play Again?"
			messageDisplay.textContent="Correct!"
			changeColors(clickedColor)
			h1.style.background=clickedColor;
			youWin()
			audio.setAttribute("src", "beatit.mp3")
		} else {
			this.style.background= "#232323";
			messageDisplay.textContent="Try Again Faggot"
			}
		})
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor
	resetButton.textContent = "New Colors"
	messageDisplay.textContent="";
	//change colors of square
	for(var i=0; i < squares.length; i++) {
		if(colors[i]) {
		squares[i].style.display="block" //puts colors into each square
		squares[i].style.background=colors[i]
	} else {
		squares[i].style.display="none"
	}
  }
	h1.style.background ="linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
}

//reset
resetButton.addEventListener("click", function() {
	reset()
})

function changeColors(color) {
	//loop through all squares
	for(var i=0; i < squares.length; i++) {
	//change each color to match given color
		// squares[i].style.background=color
		squares[i].style.background=""
		squares[i].classList.add("michael")
	}
}

function pickColor() {
	// math.random picks a random number from 0-1 not 1, but we want it from 0-colors.length we multiply it but it will never go to the max
	//in order to get rid of the decimal to get a whole number we use Math.floor
	// math.floor takes whatever math.random gets then remove everything after the decimal point aka if 4.54 now its 4
	var random =Math.floor(Math.random() * colors.length ) // maybe 5.4545 now 5
	return colors[random]; //colors is the array var and how it looks possibly colors[5]
}

function generateRandomColors(num) {
	//make an array
	var arr= [];
	//repat num times 
	for (var i=0; i< num; i++) {
	//get random color and push into array
		arr.push(randomColor()) //runs randomColor how ever big num is and pushes each value into an array
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256 );
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256 );
	//pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256 );
	return "rgb(" + red + ", " + green + ", " + blue + ")"; //will return all the random numbers into one string
}

function youWin(){
	setInterval(function(){
	var colors = generateRandomColors(1)

	document.body.style.background=colors
	}, 100);
}