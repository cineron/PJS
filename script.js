// V9 Requirements
// - There should an li for every todo
// - Each li should contain .todoText
// - Each li should show whether completed


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
	deleteTodo: () => {
		const deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = "";
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

			// todoLi.textContent = todoList.todos[i].todoText;
			todosUl.appendChild(todoLi);
		}
	}
};