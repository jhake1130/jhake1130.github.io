var foods =(localStorage.getItem('todoLista')) ? JSON.parse(localStorage.getItem('todoLista')): {
	food: [],
	totalc: 0
};
var limit = 1500;

	function dataObjectUpdated() {
  		localStorage.setItem('todoLista', JSON.stringify(foods));
  		console.log(foods.food)
	}

	renderList();
		

	function renderList() {
		if(foods.food.length >=0) {

		renderCalHeader();
		renderCalInfo();

		for (var i = 0; i < foods.food.length; i++) {

    		var foodname = foods.food[i].name;
    		var foodcals = foods.food[i].calories;
			addItemToDOM(foodname,foodcals);
  		}


	}


// add food

	function newFood(foodz) {
		if(foodz.indexOf(',') >-1) {
				var array = foodz.split (",")
				var foodname = array[0];
				var foodcalories = Number(array[1])
		}
		else {
				alert("Separate food name and calories with a comma")
				return false;
		}

		foods.food.push({name:foodname, calories: foodcalories});
		foods.totalc = foods.totalc + foodcalories;
		
		renderCalHeader();
		renderCalInfo();
		addItemToDOM(foodname,foodcalories);
		array.length= 0;
		document.getElementById("foodValue").value=''; //returns add input blank
		dataObjectUpdated();

		}

//add food to page

	function addItemToDOM(food,cals) {
			
		var list = document.createElement("li"); 
		list.className = "tolist";
		var item = document.createElement("div"); 
		item.className = "itemn"
		var counter =document.createElement("div")
		counter.className= "cals"


		var buttons = document.createElement('div');
  		buttons.classList.add('buttons');
		var remove = document.createElement('button');

  		remove.classList.add('remove');
  		remove.classList.add("btn")
  		remove.classList.add("btn-outline-primarymade")
  		remove.addEventListener('click', removeItem);
  		remove.innerText = "X";
  		buttons.appendChild(remove);

		var foodCals = document.createTextNode(cals);
		var foodName = document.createTextNode(food);
		item.appendChild(foodName); 
		counter.appendChild(foodCals);
		list.appendChild(item);  
		list.appendChild(counter)
		list.appendChild(buttons);

		document.getElementById("ultodos").appendChild(list);  
			
		}

//remove food

	function removeItem() {
		var maybethis = this;
		var item = this.parentNode.parentNode;
			var idk = this.parentNode;

		var idk2 = this.parentNode.previousElementSibling;
		var idk5 = idk2.previousElementSibling;
		var calname = idk5.innerText;
		var calnum =	idk2.innerText;
			// var idk4 =	calnum.innerText;
  		var parent = item.parentNode;
  		var id = parent.id;
  			
  		var value = item.innerText;



  		var getcals = value.replace(/[^0-9]/g,'');
  		console.log(getcals + " getcals")
  			foods.totalc = foods.totalc - getcals;
		console.log(foods.totalc + " foods.totalc")
  		console.log(idk2 + "idk2")
  		console.log(calnum + "calnum")
  		console.log(calname + " calname")
  		console.log(maybethis + "maybethis")
  		console.log(item + "item")
  		console.log(idk + "idk")
  		console.log(parent + "parent")
  		console.log(id + "id")
  		console.log(value + "value")

  	for (var i=0; i < foods.food.length; i++) {
  		if(foods.food[i].name == calname && foods.food[i].calories == calnum) {
  			console.log("NAHOMENOY")
  			foods.food.splice(i,1)
  		}
  	} 
   
	// For replacing the header with current calorie count

			renderCalHeader();
			renderCalInfo();
  			// 
  			

  			parent.removeChild(item);
  		
  			
  			dataObjectUpdated();
		}


//listen for clicks
document.getElementById('new').addEventListener('click', function() {
  var value = document.getElementById('foodValue').value;
  		if (value) {
    		newFood(value);
  		}
});

document.getElementById('delete2').addEventListener('click', function() {
   var btnshow = document.getElementsByClassName("buttons");
   		for (var i = 0; i < btnshow.length; i++) {
      		btnshow[i].classList.toggle("btnshow")  // turns x on buttons on or off
    	}
 })

document.getElementById('toggleside').addEventListener('click', function() {
  	var toggleright= document.querySelector(".rs")
  	toggleright.classList.toggle("togglerightside")
});


//render the calorie header
	function renderCalHeader() {
		if(foods.totalc > 1500) { //if over limit
		var tag= document.getElementById("calorieheader")
		tag.classList.add("over-limit")
		}
	
		if(foods.totalc >= 0) {

		if(foods.totalc <= 1500) {
			var tag= document.getElementById("calorieheader")
		tag.classList.remove("over-limit")
		}
		var mab = document.getElementsByClassName("limit");
   			for (var i = 0; i < mab.length; i++) {
      		mab[i].style.display = "none"; }   
			document.getElementsByClassName("limit").innerHTML = "";

			var limit=  document.createElement("p")
			limit.className = "limit"
			var leemet = document.createTextNode(foods.totalc + " Calories")
			limit.appendChild(leemet)
			document.getElementById("calorieheader").appendChild(limit)


		} else {
			var mab = document.getElementsByClassName("limit");
   			for (var i = 0; i < mab.length; i++) {
      		mab[i].style.display = "none"; }   
			console.log("?")
			var limit=  document.createElement("p")
			limit.className = "limit"
			var leemet = document.createTextNode(foods.totalc + " Calories")
			limit.appendChild(leemet)
			document.getElementById("calorieheader").appendChild(limit)
	}
} }

	function renderCalInfo() {
		//Calories In
		var removePrevious = document.querySelector(".cIn").innerHTML = "";
		var calsIn = document.getElementsByClassName("cIn")[0];
		var td=  document.createElement("td")
		var text = document.createTextNode(foods.totalc)
		td.appendChild(text)
		calsIn.appendChild(td)

		//Calories Left
		var removePrevious = document.querySelector(".cLeft").innerHTML = "";
		var calsLeft = document.getElementsByClassName("cLeft")[0];

		
		console.log(calsLeft)
		var td=  document.createElement("td")
		var caloriesLeft = limit - foods.totalc
		var text = document.createTextNode(caloriesLeft)
		td.appendChild(text)
		calsLeft.appendChild(td)
		if (foods.totalc > limit) {
			calsLeft.style.color="red";
		}
	}

// 	document.getElementsByClassName('tolist')[0].addEventListener('click', function() {
//   		var td=  document.createElement("p")
// 		var text = document.createTextNode("caloriesLeft")
// 		td.appendChild(text)
// 		this.appendChild(td)
// });

var entries = document.querySelectorAll("li");

for(var i=0; i < entries.length; i++) {
	entries[i].addEventListener("click", function(){
		if(this.style.height !== "300px") {
		this.style.height="300px";
	} else {
		this.style.height="60px";
	}
	})
}
