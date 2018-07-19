var foods =(localStorage.getItem('todoLista')) ? JSON.parse(localStorage.getItem('todoLista')): {
	food: []
};
var limit = 1500;



	function dataObjectUpdated() {
  		localStorage.setItem('todoLista', JSON.stringify(foods));
  		console.log(foods.food)
	}

	renderList();
		

	function renderList() {
		var wLeftHeader = document.getElementById("wil");

		if(foods.food.length >=0) {

						 
		
		// renderCalInfo();

		for (var i = 0; i < foods.food.length; i++) {

    		var foodname = foods.food[i].Name;
    		console.log(foods.food[i])
			addItemToDOM(foodname);
  		}

  		// var wIL = foods.food.length;
  		// wLeftHeader.innerText=wIL;
	}


// add food

	function newFood(foodz) {
		

		var foodname = foodValue.value



		var Food = {
			Name: foodname
		}
		for(var i=0; i <=12; i++) {
			// if( i <=1) {
			// var foodnew = {
			// 	Name: foodname
			// }
			
		}
			console.log(foodname + " " + i)
			// foods.food.push(foodname + " " + i)
		
		foods.food.push(Food)
		console.log(Food)

		// foods.food.push(foodname);
		
		
		

		
		addItemToDOM(foodname);
		
		document.getElementById("foodValue").value=''; //returns add input blank
		dataObjectUpdated();


		}

//add food to page

	function addItemToDOM(food,index) {
			
		var div = document.createElement("div"); 
		div.className = "idk";
		var list = document.createElement("li"); 
		list.className = "tolist";
		var name = document.createElement("div"); 
		name.className = "itemn"
		var ul = document.createElement("ul");
		ul.setAttribute("id", "collapsenigga");


		for(var i=0; i < 3; i++) {
			var ulLI = document.createElement("li")
			ulLI.innerText =  food + i
			console.log("df")
			ul.appendChild(ulLI)
		}
		
		ul.className = "reabitch";
		console.log(index)
				var foodName = document.createTextNode(food);
console.log(foodName)	
				name.appendChild(foodName);
				list.appendChild(name)
				div.appendChild(list)
				
				div.appendChild(ul)

	




		// var list = document.createElement("li"); 
		// list.className = "tolist";
		// var item = document.createElement("div"); 
		// item.className = "itemn"


		

		// var foodName = document.createTextNode(food);
		// item.appendChild(foodName); 
		// list.appendChild(item);  
		

		document.getElementById("ultodos").appendChild(div);  
			
		}

//remove food

	// function removeItem() {
	// 	var maybethis = this;
	// 	var item = this.parentNode.parentNode;
	// 		var idk = this.parentNode;

	// 	var idk2 = this.parentNode.previousElementSibling;
	// 	var idk5 = idk2.previousElementSibling;
	// 	var calname = idk5.innerText;
	// 	var calnum =	idk2.innerText;
	// 		// var idk4 =	calnum.innerText;
 //  		var parent = item.parentNode;
 //  		var id = parent.id;
  			
 //  		var value = item.innerText;



 //  		var getcals = value.replace(/[^0-9]/g,'');
 //  		console.log(getcals + " getcals")
 //  			foods.totalc = foods.totalc - getcals;
	// 	console.log(foods.totalc + " foods.totalc")
 //  		console.log(idk2 + "idk2")
 //  		console.log(calnum + "calnum")
 //  		console.log(calname + " calname")
 //  		console.log(maybethis + "maybethis")
 //  		console.log(item + "item")
 //  		console.log(idk + "idk")
 //  		console.log(parent + "parent")
 //  		console.log(id + "id")
 //  		console.log(value + "value")

 //  	for (var i=0; i < foods.food.length; i++) {
 //  		if(foods.food[i].name == calname && foods.food[i].calories == calnum) {
 //  			console.log("NAHOMENOY")
 //  			foods.food.splice(i,1)
 //  		}
 //  	} 
   
	// For replacing the header with current calorie count

			
		// 	renderCalInfo();
  // 			// 
  			

  // 			parent.removeChild(item);
  		
  			
  // 			dataObjectUpdated();
		// }


//listen for clicks
document.getElementById('new').addEventListener('click', function() {
  var value = document.getElementById('foodValue').value;
  		if (value) {
    		newFood(value);
  		}
});






}










// collapse div

var rea = document.querySelectorAll("#collapsenigga")


var listenerToList = document.querySelectorAll(".tolist");
console.log(listenerToList.length)


for(var i=0; i< listenerToList.length; i++) {
	console.log(listenerToList[i].innerText)
}


listenerToList.forEach(function(link,index) {
	link.addEventListener("click", function() {
		
		rea[index].classList.toggle("reabitch")
 		
	})
})



//
	// function renderCalInfo() {
	// 	//Calories In
	// 	var removePrevious = document.querySelector(".cIn").innerHTML = "";
	// 	var calsIn = document.getElementsByClassName("cIn")[0];
	// 	var td=  document.createElement("td")
	// 	var text = document.createTextNode(foods.totalc)
	// 	td.appendChild(text)
	// 	calsIn.appendChild(td)

	// 	//Calories Left
	// 	var removePrevious = document.querySelector(".cLeft").innerHTML = "";
	// 	var calsLeft = document.getElementsByClassName("cLeft")[0];

		
	// 	console.log(calsLeft)
	// 	var td=  document.createElement("td")
	// 	var caloriesLeft = limit - foods.totalc
	// 	var text = document.createTextNode(caloriesLeft)
	// 	td.appendChild(text)
	// 	calsLeft.appendChild(td)
	// 	if (foods.totalc > limit) {
	// 		calsLeft.style.color="red";
	// 	}
	// }

// 	document.getElementsByClassName('tolist')[0].addEventListener('click', function() {
//   		var td=  document.createElement("p")
// 		var text = document.createTextNode("caloriesLeft")
// 		td.appendChild(text)
// 		this.appendChild(td)
// });

// var entries = document.querySelectorAll("li");

// for(var i=0; i < entries.length; i++) {
// 	entries[i].addEventListener("click", function(){
// 		if(this.style.height !== "300px") {
// 		this.style.height="300px";
// 	} else {
// 		this.style.height="60px";
// 	}
// 	})
// }


