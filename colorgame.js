var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1 = document.querySelector("h1");
var stripe = document.querySelector("#stripe")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")
var audio = document.querySelector("#myAudio")
var round= 1;
var scoreSpan = document.getElementById("score");
var score = 0;
var win = document.querySelector("#win");
init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquaresListeners();
	reset()
	h1.textContent="Round " + round
}

function setupModeButtons() {
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");//this refers to what was clicked on
			this.textContent ==="Easy" ? numSquares =3: numSquares =6; //if easy then num is 3 otherwise is 6
			console.log(numSquares)
			//change if medium modes
			if(round <5) {reset(); console.log("h")} // if u click it it resets the screen to 3
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
			// resetButton.textContent="Play Again?"
			messageDisplay.textContent=pickedColor
			if(numSquares >= 6) {
			changeColors(clickedColor,numSquares)
			youWin()
			}
			
		} else {
			
			this.style.background= "none";
			// messageDisplay.textContent="Try Again Faggot"
			}
		})
	}
}

function reset() {
	if(round===5) {
		round = 1;
		score = 0;
		colorDisplay.textContent=pickedColor;
	}
	document.body.classList.remove("mich")
	colors = generateRandomColors(numSquares);
	win.textContent="";
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	h1.style.display="block"
	colorDisplay.textContent = pickedColor
	resetButton.textContent = "New Colors"
	messageDisplay.textContent=pickedColor;
	//change colors of square
	for(var i=0; i < squares.length; i++) {
		if(colors[i]) {
		squares[i].style.display="block" //puts colors into each square
		squares[i].style.background=colors[i]
	} else {
		squares[i].style.display="none"
	}
  }
  if(round ===1) {
	h1.style.background ="linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
}

	 if(round ===4) { h1.style.background ="red";}
	scoreSpan.textContent=score;
}

//reset
resetButton.addEventListener("click", function() {
	reset()
})

function changeColors(color,mode) {
	//loop through all squares
	if(mode === 3) {
	//change each color to match given color
	for(var i=0; i < squares.length; i++) {
		squares[i].style.background=color
		colorDisplay.textContent="YOU WIN"
		}
	}
	
	if(mode >=6) {
		for(var i=0; i < squares.length; i++) {
			squares[i].style.display="none"
		// squares[i].classList.add("michael")
	}

	if (round !==5) {
	stripe.style.background=color;
	}
	if(round  >=3 && round !== 4) {
		stripe.style.background="red";
	}
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
	round++
	score+=100;
	h1.style.background =pickedColor;
	if(numSquares < 9){
	numSquares+=3
	}
	scoreSpan.textContent=score;
	if(round==2) {
	audio.setAttribute("src", "beatit.mp3")
	}
	if(round ===5) {
		audio.setAttribute("src", "thriller.mp3")
	}
	win.textContent="YOU WIN!";
	if(round >=3) {
		win.textContent="HOLY SHIT"
	}
	if(round >=4 && round %2==0) {
		win.textContent="MOTHER FUCKER"
	}
	if(round ===5) {
		setupModeButtons();
		win.textContent="NO MORE BITCH"
	}
	if(round ===4) { h1.style.background ="red";}
	h1.textContent="Round " + round
	document.body.classList.add("mich")
	setInterval(function(){
	var colors = generateRandomColors(1)
	// document.body.style.background=colors
	if(round === 5) {
	h1.style.background=colors;
	win.style.color=colors;
	stripe.style.color=colors;
	}
	}, 100);
}

