var foods =(localStorage.getItem('todoLista')) ? JSON.parse(localStorage.getItem('todoLista')): {
	food: []
};


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
    		var amount = foods.food[i].Amount;
    		console.log(foods.food[i])
			addItemToDOM(foodname, amount);
  		}

  		// var wIL = foods.food.length;
  		// wLeftHeader.innerText=wIL;
	}


// add food

	function newFood(foodz) {
		

		var foodname = foodValue.value

		if(foodname == "erase") {
			console.log("yes")
			for (var i=0; i < foods.food.length; i++) {
				foods.food.pop()

			}
			dataObjectUpdated();
			return
		}


		var Food = {
			Name: foodname,
			Amount: 12
		}
		var amount = Food.Amount
		foods.food.push(Food)
		

		// foods.food.push(foodname);
		
		
		

		
		addItemToDOM(foodname,amount,3);
		
		document.getElementById("foodValue").value=''; //returns add input blank
		dataObjectUpdated();


		}

//add food to page

	function addItemToDOM(food,amount,index) {
			
		var div = document.createElement("div"); 
		div.className = "idk";
		var list = document.createElement("li"); 
		list.className = "tolist";
		var name = document.createElement("div"); 
		name.className = "itemn"
		var ul = document.createElement("ul");
		ul.setAttribute("id", "collapsenigga");

		console.log(amount + "ad")

		for(var i=0; i < 1; i++) {
			var ulLI = document.createElement("li")
			ulLI.innerHTML = "<p class='deletethis'>Delete</p>"
			ul.appendChild(ulLI)
			ulLI.addEventListener("click", function() {
				console.log(food)
				var indexOfFood = foods.food.findIndex(x => x.Name === food);
				console.log(indexOfFood)
				var minusOne = 1
				var minusTHIS = foods.food[indexOfFood].Amount - minusOne;
				console.log(minusTHIS)
				foods.food[indexOfFood].Amount = minusTHIS;
				dataObjectUpdated();
			})

		}
		
		ul.className = "reabitch";
	
				var foodName = document.createTextNode(food);
console.log(foodName)	
				name.appendChild(foodName);


				var counter =document.createElement("div")
		counter.className= "cals"

				counter.innerText=amount
				list.appendChild(counter)

				list.appendChild(name)
				div.appendChild(list)
				
				div.appendChild(ul)
		

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





