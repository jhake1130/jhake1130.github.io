var foods =(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
	name: [],
	calories: [],
	totalc: 0
};
var limit = 1500;

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(foods));
  console.log(foods)
}



		renderList();
		

	function renderList() {
		if(foods.calories.length !==0) {
		var howmany = foods.calories.reduce(function(total, num) {


			// console.log(total + "total") // debugging
			// console.log(num + "num")  // debugging
			foods.totalc = total + num
			// console.log(foods.totalc + "totalc")  // debugging
			return total + num;
			})
	}
		renderCalHeader();

	
	for(var i =0; i < todos.length; i++) {
		var list = document.createElement("li");
		var note = document.createTextNode(todos[i]);      
		list.appendChild(note);                                          
		document.getElementById("todos").appendChild(list);
	}

	for (var i = 0; i < foods.calories.length; i++) {

    var foodname = foods.name[i];
    var foodcals = foods.calories[i];

    addItemToDOM(foodname,foodcals);
  }
  // if(foods.name.length ==0) {
  // 				var x = document.getElementById("rightside");
  // 				x.style.display = "none";  
  // 			}


	}


		function newFood(food) {
			
			if(food.indexOf(',') >-1) {
				var array = food.split (",")
				var name = array[0];
				var calories = array[1]
			}
			else {
				alert("Separate food name and calories with a comma")
				return false;
			}
			foods.name.push(name);
			foods.calories.push(Number(calories));
			var fname = array[0];
			var cals = array[1];
			
			foods.totalc= cals;
			var howmany = foods.calories.reduce(function(total, num) {
				console.log(total + "total")
				console.log(num + "num")
				foods.totalc = total + num
				console.log(foods.totalc + "totalc")
				return total + num;
			})

			renderCalHeader();

			addItemToDOM(fname,cals);
			
			array.length= 0;
			document.getElementById("foodValue").value=''; //returns add input blank
			dataObjectUpdated();

		}

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
//

		function removeItem() {
			var maybethis = this;
			var item = this.parentNode.parentNode;
			var idk = this.parentNode;

  			var parent = item.parentNode;
  			var id = parent.id;
  			
  			var value = item.innerText;



  			var getcals = value.replace(/[^0-9]/g,'');
  			foods.totalc = foods.totalc - getcals;

  			console.log(maybethis + "maybethis")
  			console.log(item + "item")
  			console.log(idk + "idk")
  			console.log(parent + "parent")
  			console.log(id + "id")
  			console.log(value + "value")


    		foods.name.splice(foods.name.indexOf(value), 1);
			foods.calories.splice(foods.calories.indexOf(value), 1);

			// 
			// For replacing the header with current calorie count
			renderCalHeader();
  			// 
  			

  			parent.removeChild(item);
  			if(foods.name.length <= 0) {
  				foods.totalc = 0;

  			}
  			// if(foods.name.length <=0) {
  			// 	var x = document.getElementById("rightside");
  			// 	x.style.display = "none";  
  			// }
  			// renderList();
  			
  			dataObjectUpdated();
		}

document.getElementById('new').addEventListener('click', function() {
  var value = document.getElementById('foodValue').value;
  if (value) {
    newFood(value);
  }
});
		document.getElementById('delete2').addEventListener('click', function() {
		var btnshow = document.getElementsByClassName("buttons");
   			for (var i = 0; i < btnshow.length; i++) {
      		btnshow[i].style.display = "block";    
    	}
 		})


function renderCalHeader() {

	if(foods.totalc >= 0) {
	var mab = document.getElementsByClassName("limit");
   			for (var i = 0; i < mab.length; i++) {
      		mab[i].style.display = "none"; }   
			document.getElementsByClassName("limit").innerHTML = "";

			var limit=  document.createElement("p")
			limit.className = "limit"
			var leemet = document.createTextNode(foods.totalc + " Calories")
			limit.appendChild(leemet)
			document.getElementById("calorieheader").appendChild(limit)

}
}
