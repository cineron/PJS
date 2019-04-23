// V10 Requirements
// - There should be a way to create delete buttons
// - There should be a delete button for each item
// - Each li should have an id that has the todo position
// - Delete buttons should have access to the todo id
// - Clicking delete should update the todoList todos and the DOM


var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position) {
		// this works
		let completedTodo = this.todos[position];
		completedTodo.completed = !completedTodo.completed;

		// this does not work! WHY??? -- because the boolean by itself doesn't apply to a specific object.
		// var done = this.todos[position].completed;
		// done = !done;
	},
	toggleAll: function() {
		const totalTodos = this.todos.length;
		let completedTodos = 0;
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		//if everything's true, make everything false
		if (completedTodos === totalTodos) {
			//make everything false
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			//make everything false
		} else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
};

var handlers = {
	displayTodos: function(){todoList.displayTodos();},
	addTodo: () => {
		const addTodoTextInpout = document.getElementById("addTodoText");
		todoList.addTodo(addTodoTextInpout.value);
		addTodoTextInpout.value = "";
		view.displayTodos();
	},
	changeTodo: () => {
		const changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		const changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		view.displayTodos();
	},
	deleteTodo: (position) => {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: () => {
		const toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
		todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
		toggleTodoPositionInput.value = "";
		view.displayTodos();
	},
	toggleAll: () => {
		todoList.toggleAll();
		view.displayTodos();
	}
};

const view = {
	displayTodos: () => {
		// debugger;
		let todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
		for (let i = 0; i < todoList.todos.length; i++){
			let todoLi = document.createElement("li");
			//check for completed
			if (todoList.todos[i].completed) {
				todoLi.textContent = `(x) ${todoList.todos[i].todoText}`;
			} else {
				todoLi.textContent = `( ) ${todoList.todos[i].todoText}`;
			}
			todoLi.id = i;

			// todoLi.textContent = todoList.todos[i].todoText;
			// below does NOT work with "this."
			// todoLi.appendChild(this.createDeleteButton());
			todoLi.appendChild(view.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: () => {
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		return deleteButton;
	},
	setUpEventListeners: () => {
		const todosUl = document.querySelector("ul");
		
		todosUl.addEventListener("click", (event) => {
			// console.log(event.target.parentNode.id);
			//get the element that was clicked
			const clickedElement = event.target;
			//check the clicked is delete button
			if (clickedElement.className === "deleteButton"){
				//run handlers.deleteTodo(position)
				handlers.deleteTodo(parseInt(clickedElement.parentNode.id));
			}
		});

	}
};
view.setUpEventListeners();