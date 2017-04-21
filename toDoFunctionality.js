window.onload = function() {

	var form = document.querySelector("form");
	var addHere = document.getElementById("toDoList");

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var newToDo = document.createElement("li");
		var input = document.querySelector("input")	
		newToDo.innerText = input.value;
		addActionsForListItem(newToDo);
		addHere.appendChild(newToDo);
	})

	function addActionsForListItem(newToDo) {
		var xButton = document.createElement("button");
		var yButton = document.createElement("button");
		xButton.innerText = "delete";
		xButton.style.backgroundColor = "red";
		yButton.innerText = "done";
		yButton.style.backgroundColor = "green";
		xButton.addEventListener("click", function(event) {
			event.preventDefault();
			event.target.parentElement.remove();
		})
		yButton.addEventListener("click", function(event) {
			event.preventDefault();
			event.target.parentElement.style.textDecoration = "line-through";
			event.target.remove();
		})

		newToDo.append(xButton);
		newToDo.append(yButton);
	}
}
