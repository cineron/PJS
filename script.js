// V8 Requirements
// - It should have working controls for .addTodo
// - It should have working controls for .changeTodo
// - It should have working controls for .deleteTodo
// - It should have working controls for .toggleTodo


var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log("Your todo list is empty!");
		} else {
			console.log("My todos:");
			for (let i = 0; i < this.todos.length; i++) {
				// console.log(this.todos[i].todoText);
				//check if .completed
				if (this.todos[i].completed) {
					console.log(`(x) ${this.todos[i].todoText}`);
				} else {
					console.log(`( ) ${this.todos[i].todoText}`);
				}
			}
		}
	},
addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		// this works
		let completedTodo = this.todos[position];
		completedTodo.completed = !completedTodo.completed;

		// this does not work! WHY??? -- because the boolean by itself doesn't apply to a specific object.
		// var done = this.todos[position].completed;
		// done = !done;
		this.displayTodos();
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
		this.displayTodos();
	}
};

var handlers = {
	displayTodos: function(){todoList.displayTodos();},
	toggleAll: () => todoList.toggleAll(),
	addTodo: () => {
		const addTodoTextInpout = document.getElementById("addTodoText");
		todoList.addTodo(addTodoTextInpout.value);
		addTodoTextInpout.value = "";
	}
};