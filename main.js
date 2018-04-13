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
		
function renderTodoList() {
	var calorielist = document.getElementsByClassName('tolist')
	for(var i=0; i< foods.calories.length; i++) {
		calorielist[i].style.display = "none";  
	}
 

}

	function renderList() {
		var lh2 =  document.getElementById("cl");
		
		var calsleft = document.createTextNode(foods.totalc + " Calories")

		lh2.appendChild(calsleft)
		if(foods.calories.value !== undefined) {
			var howmany = foods.calories.reduce(function(total, num) {


				console.log(total + "total")
				console.log(num + "num")
			foods.totalc = total + num
			console.log(foods.totalc + "totalc")
			return total + num;
			})
		}
	// for(var i =0; i < todos.length; i++) {
	// 	var list = document.createElement("li");
	// 	var note = document.createTextNode(todos[i]);      
	// 	list.appendChild(note);                                          
	// 	document.getElementById("todos").appendChild(list);
	// }

	for (var i = 0; i < foods.calories.length; i++) {

    var foodname = foods.name[i];
    var foodcals = foods.calories[i];
    addItemToDOM(foodname,foodcals);
  }
	}

document.getElementById('new').addEventListener('click', function() {
  var value = document.getElementById('foodValue').value;
  if (value) {
    newFood(value);
  }
});

		function newFood(food) {
			
			if (food == 0) {
				return false;
			}
			if(food ==="order 66") {
				renderTodoList();
				console.log(food + " Executed")
			}
			if(food.indexOf(',') >-1) {
				var array = food.split (",")
				var name = array[0];
				var calories = array[1]
			}
			
			foods.name.push(name);
			foods.calories.push(Number(calories));
			var fname = array[0];
			var cals = array[1];

			var howmany = foods.calories.reduce(function(total, num) {
				console.log(total + "total")
				console.log(num + "num")
			foods.totalc = total + num
			console.log(foods.totalc + "totalc")
			return total + num;
			})
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

		function removeItem() {
			
			var item = this.parentNode.parentNode;
  			var parent = item.parentNode;
  			var id = parent.id;
  			var value = item.innerText;

  

    		foods.name.splice(foods.name.indexOf(value), 1);
  			var remove = foods.calories.splice(foods.calories.indexOf(value), 1);
  			console.log(value + id + item)
  			foods.totalc = 0;
  			parent.removeChild(item);
  			dataObjectUpdated();
		}

		function sortTodo() {

			var notes = document.getElementsByTagName("li");
			for (var i = 0; i < notes.length; i++) {
				notes[i].style.display = "none";
			}
			for (var i = 0; i < todos.length; i++) {
			todos.sort()
			var para = document.createElement("li");
			var t = document.createTextNode(todos[i]);      
			para.appendChild(t);                                          
			document.getElementById("todos").appendChild(para); 
		}
		}
		document.getElementById('delete2').addEventListener('click', function() {
		var btnshow = document.getElementsByClassName("buttons");
   			for (var i = 0; i < btnshow.length; i++) {
      		btnshow[i].style.display = "block";    
    	}
 		})