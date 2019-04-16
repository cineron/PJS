// V7 Requirements
// - There should be a "Display todos" button and .toggleAll button
// - clicking "display todos" should run .displayTodos
// - clicking "toggle all" should run .toggleAll

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

// 1. Accesss the "display todos" button
var displayTodosButton = document.getElementById("displayTodosBtn");
// 2. run .displayTodos when the button is clicked
displayTodosButton.addEventListener("click", function(){
	todoList.displayTodos();
});

// 1. access "toggle all" button
var toggleAllButton = document.getElementById("toggleAllBtn");
// 2. run toggleAll when button is clicked
toggleAllButton.addEventListener("click", () => todoList.toggleAll());

//refactor to utilize onclick in html

var handlers = {
	displayTodos: function(){todoList.displayTodos();},
	toggleAll: () => todoList.toggleAll()
}