

var foods =(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
	name: [],
	calories: []
	};

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(foods));
  console.log(foods)
}



		renderList();
		renderTodoList();
function renderTodoList() {
	// var calorielist = document.getElementsByClassName('tolist')
	// for(var i=0; i< foods.calories.length; i++) {
	// 	calorielist[i].style.display = "none";  
	// }
  for (var i = 0; i < foods.calories.length; i++) {

    var foodname = foods.name[i];
    var foodcals = foods.calories[i];
    addItemToDOM(foodname,foodcals);
  }

}

	function renderList() {
		var lh2 =  document.getElementById("cl");
		var limit = document.createTextNode(1500 + " Calories")
		lh2.appendChild(limit)

	
	for(var i =0; i < todos.length; i++) {
		var list = document.createElement("li");
		var note = document.createTextNode(todos[i]);      
		list.appendChild(note);                                          
		document.getElementById("todos").appendChild(list);
	}
	}

		function newFood() {
			value = document.getElementById("addvalue").value
			if (value== 0) {
				return false;
			}
			if(value==="order 66") {
				renderTodoList();
				console.log(value + " Executed")
			}
			if(value.indexOf(',') >-1) {
				var array = value.split (",")

				var name = array[0];
				var calories = array[1]
			}
			
			foods.name.push(name);
			foods.calories.push(calories);
			var fname = array[0]
			var cals = array[1]
			addItemToDOM(fname,cals);
			
			array.length= 0;
			document.getElementById("addvalue").value=''; //returns add input blank
			dataObjectUpdated();
		}

		function addItemToDOM(food,cals) {
			var list = document.createElement("li"); 
			list.className = "tolist";
			var item = document.createElement("div"); 
			item.className = "itemn"
			var counter =document.createElement("div")
			counter.className= "cals"
			var foodCals = document.createTextNode(cals);
			var foodName = document.createTextNode(food);
			item.appendChild(foodName); 
			counter.appendChild(foodCals);
			list.appendChild(item);  
			list.appendChild(counter)
		       
			document.getElementById("ultodos").appendChild(list);  
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
		